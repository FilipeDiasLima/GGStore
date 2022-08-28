import { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Header from '../../components/Header'
import LibCard from '../../components/LibCard'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'

import noData from '../../assets/no-data.svg'
import styles from './styles.module.scss'

interface GameProps {
  id: number
  name: string
  cover_url: string
}

const Library = () => {
  const [games, setGames] = useState([])
  const [cookies] = useCookies(['token'])
  const token = cookies.token
  const [search, setSearch] = useState('')

  async function getGames() {
    const response = await api.get('library', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setGames(response.data)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <>
      <Header
        isDisable={true}
      />
      <div className={styles.container}>
        {!games.length && (
          <div className={styles.noGames}>
            <img src={noData} alt="" />
            <strong>Você ainda não possui jogos</strong>
          </div>
        )}
        {games.map((game: GameProps) => (
          <LibCard
            key={game.id}
            productId={game.id}
            gameId={game.id}
            title={game.name}
            cover_url={game.cover_url}
          />
        ))}
      </div>
    </>
  )
}

export default Library