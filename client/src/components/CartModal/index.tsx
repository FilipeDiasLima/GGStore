import styles from './styles.module.scss'
import cartImg from '../../assets/cart.svg'

interface CartModel {
  closeModal: () => void
}

export const CartModal = ({ closeModal }: CartModel) => {

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <img src={cartImg} alt="" />
        <div className={styles.line}></div>
        <strong>Jogo adicionado ao carrinho</strong>
      </div>
    </div>
  )
}