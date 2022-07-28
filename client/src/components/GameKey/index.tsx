import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import styles from './styles.module.scss'

interface GameKeyProps {
  gameKey: string
}

const GameKey = ({ gameKey }: GameKeyProps) => {
  const [showKey, setShowKey] = useState(false)

  return (
    <div className={styles.info}>
      <strong>Chave: </strong>
      <span className={showKey ? styles.showText : styles.hiddenText}>{gameKey}</span>
      {showKey ? (
        <FiEye size={25} onClick={() => setShowKey(false)} />
      ) : (
        <FiEyeOff size={25} onClick={() => setShowKey(true)} />
      )}
    </div>
  )
}

export default GameKey