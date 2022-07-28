import { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Filter from '../../components/Filter'
import Header from '../../components/Header'
import MainBanner from '../../components/MainBanner'
import SaleCard from '../../components/SaleCard'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'

import styles from './styles.module.scss'

interface SaleCardProp {
  id: number
  name: string
  price: number
  cover_url: string
  plataform: string
  studio: string
  release: string
}

const Home = () => {
  const [games, setGames] = useState([])
  const [cookies] = useCookies(['token'])
  const token = cookies.token

  async function getGames(filtersObj: {}) {
    const response = await api.get('product', {
      params: filtersObj,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    setGames(response.data)
  }

  useEffect(() => {
    getGames({})
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Filter
          getFilters={getGames}
        />
        <div className={styles.main}>
          <MainBanner />
          <div className={styles.cards}>
            {games.map((game: SaleCardProp) => (
              <SaleCard
                key={game.id}
                id={game.id}
                name={game.name}
                image_cover={game.cover_url}
                plataform={game.plataform}
                price={game.price}
                release={game.release}
                studio={game.studio}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home