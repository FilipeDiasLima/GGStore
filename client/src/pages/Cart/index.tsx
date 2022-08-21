import { useContext, useEffect, useState } from 'react'
import { CartCard } from '../../components/CartCard'
import Header from '../../components/Header'
import AuthContext, { GameCartProp } from '../../context/auth'
import styles from './styles.module.scss'

const Cart = () => {
  const { cartGames } = useContext(AuthContext)
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [promocode, setPromocode] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const sum = cartGames.reduce((sum, item) => {
      return sum + item.subtotal
    }, 0)
    setSubtotal(sum)
  }, [cartGames])

  useEffect(() => {
    const result = subtotal - discount - promocode
    setTotal(result)
  }, [, subtotal, cartGames, discount, promocode])

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        <div>
          {cartGames.map((item: GameCartProp) => (
            <CartCard
              key={item.id}
              id={item.id}
              cover_url={item.cover_url}
              name={item.name}
              plataform={item.plataform}
              price={item.price}
              subtotal={item.subtotal}
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