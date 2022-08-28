import { useContext, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import AuthContext, { GameCartProp } from '../../context/auth'
import styles from './styles.module.scss'

export const CartCard = ({ id, cover_url, name, plataform, price }: GameCartProp) => {
  const { removeItemFromCart, updateSubTotal } = useContext(AuthContext)
  const [amount, setAmount] = useState(1)

  function handleSubAmount() {
    if (amount > 1) setAmount(amount - 1)
  }

  function handleAddAmount() {
    if (amount < 10) setAmount(amount + 1)
  }

  useEffect(() => {
    const subtotal = Number((price * amount).toFixed(2))
    updateSubTotal(subtotal, id, amount)
  }, [, amount])

  return (
    <div className={styles.container}>
      <div>
        <img src={cover_url} alt="" />
        <div>
          <strong>{name}</strong>
          <span>{plataform}</span>
          <div>
            <p>R$ {price?.toFixed(2)}</p>
            <div className={styles.amount}>
              <button><IoRemoveOutline size={20} color='#fff' onClick={handleSubAmount} /></button>
              {amount}
              <button><IoAddOutline size={20} color='#fff' onClick={handleAddAmount} /></button>
            </div>
          </div>
        </div>
      </div>
      <button type='button' onClick={() => removeItemFromCart(id)}>
        <IoMdClose />
      </button>
    </div>
  )
}