import { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { setTimeout } from 'timers/promises'
import { CartModal } from '../../components/CartModal'
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
  const [cookies] = useCookies(['token'])
  const token = cookies.token
  const [games, setGames] = useState([])
  const [search, setSearch] = useState('')
  const [isOpenCartModal, setIsOpenCartModal] = useState(false)

  async function getGames(filtersObj: {}) {
    const response = await api.get('product', {
      params: filtersObj,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    setGames(response.data)
  }

  function handleOpenCartModal() {
    setIsOpenCartModal(true)
    // setInterval(() => setIsOpenCartModal(false), 2000)
  }

  useEffect(() => {
    getGames({})
  }, [])

  return (
    <>
      <Header
        searchGame={getGames}
        isDisable={false}
      />
      <div className={styles.container}>
        {isOpenCartModal && <CartModal closeModal={() => setIsOpenCartModal(false)} />}
        <Filter
          getFilters={getGames}
        />
        <div className={styles.main}>
          <MainBanner />
          <p>Clique duas vezes para adicionar aos favoritos</p>
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
                openModal={handleOpenCartModal}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home