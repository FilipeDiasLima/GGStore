import { useState } from 'react'
import Button from '../../components/Button'
import { CartCard } from '../../components/CartCard'
import Header from '../../components/Header'
import styles from './styles.module.scss'

const Cart = () => {

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        <div>
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.inputContainer}>
            <input placeholder='Promocode' type='text' />
            <button type='button'>Aplicar</button>
          </div>
          <div className={styles.info}>
            <span>Subtotal</span>
            <strong>R$ 200,00</strong>
          </div>
          <div className={styles.info}>
            <span>Desconto</span>
            <strong>R$ 00,00</strong>
          </div>
          <div className={styles.info}>
            <span>Promocode</span>
            <strong>R$ 00,00</strong>
          </div>

          <div className={styles.line} />

          <div className={styles.total}>
            <span>Total</span>
            <strong>R$ 200,00</strong>
          </div>

          <button type="button" className={styles.applyButton}>
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart