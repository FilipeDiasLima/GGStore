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
  const [subtotalArr, setSubtotalArr] = useState<number[]>(cartItems)

  function updateSubtotal(value: number, index: number) {
    let copy = subtotalArr
    copy[index] = value
    setSubtotalArr(copy)
  }

  console.log(subtotalArr)

  useEffect(() => {
    const result = subtotalArr.reduce((partialSum: number, item: number) => partialSum + item, 0)
    setSubtotal(result)
  }, [subtotalArr])

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        <div>
          {cartItems.map((id: number, index) => (
            <CartCard
              id={id}
              key={index}
              index={index}
              subtotalItem={updateSubtotal}
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