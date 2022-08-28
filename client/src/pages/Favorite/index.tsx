import { useContext } from 'react'
import FavCard from '../../components/FavCard'
import Header from '../../components/Header'
import AuthContext, { GameCartProp } from '../../context/auth'

import noData from '../../assets/no-data.svg'
import styles from './styles.module.scss'

const Favorite = () => {
  const { favGames } = useContext(AuthContext)

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        {!favGames.length && (
          <div className={styles.noGames}>
            <img src={noData} alt="" />
            <strong>Sua lista de desejos está vazia</strong>
          </div>
        )}
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