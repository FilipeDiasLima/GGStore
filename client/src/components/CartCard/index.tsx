import { useContext, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface CartCardProp {
  id: number
  updateSubtotal: (value: number) => void
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


export const CartCard = ({ id, updateSubtotal }: CartCardProp) => {
  const { removeItemFromCart, token } = useContext(AuthContext)
  const [amount, setAmount] = useState(1)
  const [data, setData] = useState<GameProp>(initialGameProp)

  async function getGames() {
    const responseProduct = await api.get(`product/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setData(responseProduct.data)
    updateSubtotal(responseProduct.data!.price * amount)
  }

  const handleRemoveGame = (id: number) => {
    removeItemFromCart(id)
  }

  function handleSubAmount() {
    if (amount >= 1) {
      setAmount(amount - 1)
    }
  }

  function handleAddAmount() {
    if (amount <= 9) {
      setAmount(amount + 1)
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    updateSubtotal(data!.price * amount)
  }, [amount, data])

  return (
    <div className={styles.container}>
      <div>
        <img src={data?.cover_url} alt="" />
        <div>
          <strong>{data?.name}</strong>
          <span>{data?.plataform}</span>
          <div>
            <p>R$ {data?.price.toFixed(2)}</p>
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