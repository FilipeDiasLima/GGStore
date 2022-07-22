import FavCard from '../../components/FavCard'
import Header from '../../components/Header'
import styles from './styles.module.scss'

const Favorite = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
      </div>
    </>
  )
}

export default Favorite