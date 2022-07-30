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
  return (
    <div className={styles.container}>
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
      <button type='button'>COMPRAR</button>
    </div>
  )
}

export default SaleCard