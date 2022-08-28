import { useContext, useEffect, useState } from 'react'
import { CartCard } from '../../components/CartCard'
import Header from '../../components/Header'
import AuthContext, { GameCartProp } from '../../context/auth'
import { api } from '../../services/api'

import noData from '../../assets/no-cart.svg'
import styles from './styles.module.scss'

const Cart = () => {
  const { cartGames, token, clearCart } = useContext(AuthContext)
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [promocode, setPromocode] = useState(0)
  const [total, setTotal] = useState(0)

  async function handlePayment() {
    for (let i = 0; i < cartGames.length; i++) {
      const data = {
        productId: cartGames[i].id,
        amount: cartGames[i].amount || 1
      }
      await api.post('sale', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      clearCart()
    }
  }

  useEffect(() => {
    const sum = cartGames.reduce((sum, item) => {
      return sum + item.subtotal!
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
          {!cartGames.length && (
            <div className={styles.noGames}>
              <img src={noData} alt="" />
              <strong>Seu carrinho está vazio</strong>
            </div>
          )}
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

          <button type="button" className={styles.applyButton} onClick={handlePayment}>
            Pagar
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart