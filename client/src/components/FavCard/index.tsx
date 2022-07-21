import styles from './styles.module.scss'
import capa from '../../assets/god-of-war.png'
import { useNavigate } from 'react-router-dom'

const FavCard = () => {
  const navigate = useNavigate()

  const goToGameScreen = () => {
    navigate('/game')
  }

  return (
    <div className={styles.container} onClick={goToGameScreen}>
      <div className={styles.image}>
        <div style={{ background: `url(${capa}) no-repeat`, backgroundSize: 'cover' }} className={styles.cover}></div>
      </div>
      <div className={styles.info}>
        <span>God of War</span>
        <button type='button'>COMPRAR</button>
      </div>
    </div>
  )
}

export default FavCard