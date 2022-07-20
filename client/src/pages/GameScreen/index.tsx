
import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { IoEyeSharp, IoEyeOff } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import thumb from '../../assets/thumb.jpg'
import Header from '../../components/Header'

import styles from './styles.module.scss'

const GameScreen = () => {
  const navigate = useNavigate()
  const [showKey, setShowKey] = useState(false)

  const goBack = () => {
    navigate('/library')
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <header>
          <FiArrowLeft size={24} onClick={goBack} />
          <span>Assassin's Creed Valhalla</span>
        </header>
        <main>
          <img src={thumb} alt="Thumb" />

          <div className={styles.left}>
            <div className={styles.info}>
              <strong>Data de lançamento: </strong>
              <span>10/11/2021</span>
            </div>
            <div className={styles.info}>
              <strong>Studio: </strong>
              <span>Ubisoft</span>
            </div>
            <div className={styles.info}>
              <strong>Plataforma: </strong>
              <span>PC</span>
            </div>
            <div className={styles.info}>
              <strong>Gênero: </strong>
              <span>Ação, Aventura, RPG</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.info}>
              <strong>Chave: </strong>
              <span className={showKey ? styles.showText : styles.hiddenText}>fef23-ghun6-3gtg-9jjuu-y34g56-vbhn4</span>
              {showKey ? (
                <IoEyeSharp size={25} onClick={() => setShowKey(false)} />
              ) : (
                <IoEyeOff size={25} onClick={() => setShowKey(true)} />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default GameScreen