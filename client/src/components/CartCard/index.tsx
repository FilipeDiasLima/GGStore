import { useContext, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface CartCardProp {
  id: number
  index: number
  subtotalItem: (value: number, index: number) => void
}

interface GameProp {
  id: number
  name: string
  price: number
  cover_url: string
  plataform: string
}

const initialGameProp = {
  id: 0,
  name: '',
  price: 0,
  cover_url: '',
  plataform: '',
}


export const CartCard = ({ id, subtotalItem, index }: CartCardProp) => {
  const { removeItemFromCart, token } = useContext(AuthContext)
  const [amount, setAmount] = useState(1)
  const [data, setData] = useState<GameProp>(initialGameProp)
  const [totalPriceItem, setTotalPriceItem] = useState(0)

  async function getGames() {
    const responseProduct = await api.get(`product/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setData(responseProduct.data)
    setTotalPriceItem(responseProduct.data.price)
  }

  const handleRemoveGame = (id: number) => {
    removeItemFromCart(id)
  }

  function handleSubAmount() {
    if (amount >= 1) {
      setAmount(amount - 1)
      setTotalPriceItem(totalPriceItem - data!.price)
    }
  }

  function handleAddAmount() {
    if (amount <= 9) {
      setAmount(amount + 1)
      setTotalPriceItem(totalPriceItem + data!.price)
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    subtotalItem(totalPriceItem, index)
  }, [totalPriceItem])

  return (
    <div className={styles.container}>
      <div>
        <img src={data?.cover_url} alt="" />
        <div>
          <strong>{data?.name}</strong>
          <span>{data?.plataform}</span>
          <div>
            <p>R$ {Math.abs(totalPriceItem).toFixed(2)}</p>
            <div className={styles.amount}>
              <button><IoRemoveOutline size={20} color='#fff' onClick={handleSubAmount} /></button>
              {amount}
              <button><IoAddOutline size={20} color='#fff' onClick={handleAddAmount} /></button>
            </div>
          </div>
        </div>
      </div>
      <button type='button' onClick={() => handleRemoveGame(id)}>
        <IoMdClose />
      </button>
    </div>
  )
}