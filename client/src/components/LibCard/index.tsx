import styles from './styles.module.scss'
import capa from '../../assets/god-of-war.png'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  productId: number
  gameId: number
  title: string
  cover_url: string
}

const LibCard = ({ title, cover_url, productId, gameId }: CardProps) => {
  const navigate = useNavigate()

  const goToGameScreen = () => {
    navigate('/game', {
      state: {
        productId: productId,
        gameId: gameId
      }
    })
  }

  return (
    <div className={styles.container} onClick={goToGameScreen}>
      <div className={styles.image}>
        <div style={{ background: `url(${cover_url})`, backgroundSize: 'cover' }} className={styles.cover}></div>
      </div>
      <div className={styles.info}>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default LibCard