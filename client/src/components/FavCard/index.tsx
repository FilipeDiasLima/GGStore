import styles from './styles.module.scss'
import capa from '../../assets/god-of-war.png'
import { useNavigate } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'

const FavCard = () => {
  const navigate = useNavigate()

  const handleRemoveFavGame = () => {
    navigate('/game')
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div style={{ background: `url(${capa}) no-repeat`, backgroundSize: 'cover' }} className={styles.cover}>
          <button type='button' onClick={handleRemoveFavGame}>
            <IoMdClose />
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <span>God of War</span>
        <button type='button'>COMPRAR</button>
      </div>
    </div>
  )
}

export default FavCard