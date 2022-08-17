import { useContext, useEffect, useState } from 'react'
import { CartCard } from '../../components/CartCard'
import Header from '../../components/Header'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

const Cart = () => {
  const { cartItems } = useContext(AuthContext)
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [promocode, setPromocode] = useState(0)
  const [total, setTotal] = useState(0)

  function updateSubtotal(value: number) {
    const sub = subtotal + value
    console.log(sub)
    setSubtotal(subtotal + value)
  }

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        <div>
          {cartItems.map((id: number) => (
            <CartCard
              id={id}
              key={id}
              updateSubtotal={updateSubtotal}
            />
          ))}
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.inputContainer}>
            <input placeholder='Promocode' type='text' />
            <button type='button'>Aplicar</button>
          </div>
          <div className={styles.info}>
            <span>Subtotal</span>
            <strong>R$ {subtotal.toFixed(2)}</strong>
          </div>
          <div className={styles.info}>
            <span>Desconto</span>
            <strong>R$ {discount.toFixed(2)}</strong>
          </div>
          <div className={styles.info}>
            <span>Promocode</span>
            <strong>R$ {promocode.toFixed(2)}</strong>
          </div>

          <div className={styles.line} />

          <div className={styles.total}>
            <span>Total</span>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>

          <button type="button" className={styles.applyButton}>
            Pagar
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart