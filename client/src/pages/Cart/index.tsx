import { useState } from 'react'
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
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </>
  )
}

export default Cart