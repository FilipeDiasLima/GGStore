import { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import image from '../../assets/god-of-war.png'
import AuthContext from '../../context/auth'
import styles from './styles.module.scss'

interface CartCardProp {
  id: number
  name: string
  price: number
  image_cover: string
  plataform: string
  studio: string
  release: string
}

export const CartCard = (item: CartCardProp) => {
  const { removeItemFromCart } = useContext(AuthContext)

  const handleRemoveGame = (id: number) => {
    removeItemFromCart(id)
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="" />
        <div>
          <strong>{item.name}</strong>
          <span>{item.plataform}</span>
          <p>R$ {item.price}</p>
        </div>
      </div>
      <button type='button' onClick={() => handleRemoveGame(item.id)}>
        <IoMdClose />
      </button>
    </div>
  )
}