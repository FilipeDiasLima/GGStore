import { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import LibCard from '../../components/LibCard'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface GameProps {
  id: number
  name: string
  cover_url: string
}

const Library = () => {
  const [games, setGames] = useState([])
  const { token } = useContext(AuthContext)

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
      <Header />
      <div className={styles.container}>
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