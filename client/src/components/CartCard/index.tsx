import { useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import AuthContext from '../../context/auth'
import styles from './styles.module.scss'

interface CartCardProp {
  id: number
  name: string
  price: number
  cover_url: string
  plataform: string
  reload: () => void
}

export const CartCard = (item: CartCardProp) => {
  const { removeItemFromCart } = useContext(AuthContext)
  const [amount, setAmount] = useState(0)

  const handleRemoveGame = (id: number) => {
    removeItemFromCart(id)
    item.reload()
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

  return (
    <div className={styles.container}>
      <div>
        <img src={item.cover_url} alt="" />
        <div>
          <strong>{item.name}</strong>
          <span>{item.plataform}</span>
          <div>
            <p>R$ {item.price.toFixed(2)}</p>
            <div className={styles.amount}>
              <button><IoRemoveOutline size={20} color='#fff' onClick={handleSubAmount} /></button>
              {amount}
              <button><IoAddOutline size={20} color='#fff' onClick={handleAddAmount} /></button>
            </div>
          </div>
        </div>
      </div>
      <button type='button' onClick={() => handleRemoveGame(item.id)}>
        <IoMdClose />
      </button>
    </div>
  )
}