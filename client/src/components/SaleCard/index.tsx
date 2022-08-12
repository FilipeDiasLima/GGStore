import { useContext, useState } from 'react'
import { IoHeartSharp } from 'react-icons/io5'
import AuthContext from '../../context/auth'
import styles from './styles.module.scss'

interface SaleCardProp {
  id: number
  name: string
  price: number
  image_cover: string
  plataform: string
  studio: string
  release: string
}

const SaleCard = (item: SaleCardProp) => {
  const { addItemToCart } = useContext(AuthContext)
  const [fav, setFav] = useState(false)

  function handleAddFavorite() {
    setFav(true)
    setInterval(() => setFav(false), 2000)
  }

  return (
    <div className={styles.container} onDoubleClick={handleAddFavorite}>
      {fav && (
        <div className={styles.favorite}>
          <IoHeartSharp size={55} />
        </div>
      )}
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${item.image_cover})`,
          backgroundSize: 'cover',
        }}
      >
        <div>
          <span>R$ {item.price.toFixed(2)}</span>
        </div>
      </div>
      <div className={styles.info}>
        <strong>{item.name}</strong>
        <span>{item.plataform}</span>
      </div>
      <button type='button' onClick={() => addItemToCart(item.id)}>COMPRAR</button>
    </div>
  )
}

export default SaleCard