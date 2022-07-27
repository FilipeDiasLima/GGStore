import { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import LibCard from '../../components/LibCard'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface GameProps {
  id: number
  name: string
}

interface SaleProps {
  product_id: number
  product: GameProps
  cover_url: string
}

const Library = () => {
  const [games, setGames] = useState([])
  const { token } = useContext(AuthContext)

  async function getGames(productId: number | null) {
    const response = await api.get('library', {
      params: {
        productId: productId || null
      },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    setGames(response.data)
  }

  useEffect(() => {
    getGames(null)
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        {games.map((game: SaleProps) => (
          <LibCard
            key={game.product.id}
            productId={game.product_id}
            gameId={game.product.id}
            title={game.product.name}
            cover_url={game.cover_url}
          />
        ))}
      </div>
    </>
  )
}

export default Library