import { useContext, useEffect, useState } from 'react'
import Button from '../../components/Button'
import { CartCard } from '../../components/CartCard'
import Header from '../../components/Header'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface CartCardProp {
  id: number
  name: string
  price: number
  cover_url: string
  plataform: string
}

const Cart = () => {
  const { cartItems, token } = useContext(AuthContext)
  const [games, setGames] = useState<any[]>([])

  async function getGames() {
    let arr: any = []
    cartItems.map(async id => {
      const responseProduct = await api.get(`product/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      arr.push(responseProduct.data)
    })
    setGames([...games, arr])
  }

  useEffect(() => {
    getGames()
  }, [])

  console.log(cartItems)
  console.log(games)
  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        <div>
          {games[0].map((game: CartCardProp) => (
            <CartCard
              id={game.id}
              name={game.name}
              cover_url={game.cover_url}
              plataform={game.plataform}
              price={game.price}
              key={game.id}
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