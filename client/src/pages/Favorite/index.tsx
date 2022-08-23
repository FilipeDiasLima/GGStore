import { useContext } from 'react'
import FavCard from '../../components/FavCard'
import Header from '../../components/Header'
import AuthContext, { GameCartProp } from '../../context/auth'
import styles from './styles.module.scss'

const Favorite = () => {
  const { favGames } = useContext(AuthContext)

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        {favGames.map((item: GameCartProp) => (
          <FavCard
            key={item.id}
            id={item.id}
            cover_url={item.cover_url}
            name={item.name}
            plataform={item.plataform}
            price={item.price}
          />
        ))}
      </div>
    </>
  )
}

export default Favorite