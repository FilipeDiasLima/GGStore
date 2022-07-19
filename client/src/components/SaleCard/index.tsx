import styles from './styles.module.scss'
import capa from '../../assets/god-of-war.png'

const SaleCard = () => {
  return (
    <div className={styles.container}>
      <div style={{ background: `url(${capa}) no-repeat`, backgroundSize: 'cover' }} className={styles.cover}>
        <div>
          <span>R$ 100,99</span>
        </div>
      </div>
      <div className={styles.info}>
        <strong>God of War</strong>
        <span>PC</span>
      </div>
      <button type='button'>COMPRAR</button>
    </div>
  )
}

export default SaleCard