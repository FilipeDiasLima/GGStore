import { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import AuthContext from '../../context/auth'
import styles from './styles.module.scss'

interface CartCardProp {
  id: number
  name: string
  price: number
  cover_url: string
  plataform: string
}

export const CartCard = (item: CartCardProp) => {
  const { removeItemFromCart } = useContext(AuthContext)

  const handleRemoveGame = (id: number) => {
    removeItemFromCart(id)
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={item.cover_url} alt="" />
        <div>
          <strong>{item.name}</strong>
          <span>{item.plataform}</span>
          <p>R$ {item.price.toFixed(2)}</p>
        </div>
      </div>
      <button type='button' onClick={() => handleRemoveGame(item.id)}>
        <IoMdClose />
      </button>
    </div>
  )
}