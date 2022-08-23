import styles from './styles.module.scss'
import { IoMdClose } from 'react-icons/io'
import AuthContext, { GameCartProp } from '../../context/auth'
import { useContext } from 'react'

const FavCard = ({ id, cover_url, name }: GameCartProp) => {
  const { removeItemFromFav, addItemToCart } = useContext(AuthContext)

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div style={{ background: `url(${cover_url}) no-repeat`, backgroundSize: 'cover' }} className={styles.cover}>
          <button type='button' onClick={() => removeItemFromFav(id)}>
            <IoMdClose />
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <span>{name}</span>
        <button type='button' onClick={() => addItemToCart(id)}>COMPRAR</button>
      </div>
    </div>
  )
}

export default FavCard