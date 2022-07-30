import { IoMdClose } from 'react-icons/io'
import image from '../../assets/god-of-war.png'
import styles from './styles.module.scss'

export const CartCard = () => {

  const handleRemoveGame = () => {

  }

  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="" />
        <div>
          <strong>God of War</strong>
          <span>PC</span>
          <p>R$ 65.99</p>
        </div>
      </div>
      <button type='button' onClick={handleRemoveGame}>
        <IoMdClose />
      </button>
    </div>
  )
}