import styles from './styles.module.scss'
import capa from '../../assets/god-of-war.png'

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
  return (
    <div className={styles.container}>
      <div style={{ background: `url(${item.image_cover}) no-repeat`, backgroundSize: 'cover' }} className={styles.cover}>
        <div>
          <span>R$ {item.price}</span>
        </div>
      </div>
      <div className={styles.info}>
        <strong>{item.name}</strong>
        <span>{item.plataform}</span>
      </div>
      <button type='button'>COMPRAR</button>
    </div>
  )
}

export default SaleCard