
import { useContext, useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'
import GameKey from '../../components/GameKey'
import Header from '../../components/Header'
import AuthContext from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface StateProps {
  productId: number
  gameId: number
}

interface GameProps {
  id: number
  name: string
  price: number
  poster_url: string
  plataform: string
  studio: string
  release: string
}

const GameScreen = () => {
  const initalDataGame = {
    id: 0,
    name: '',
    price: 0,
    poster_url: '',
    plataform: '',
    studio: '',
    release: ''
  }

  const location = useLocation()
  const state = location.state as StateProps
  const navigate = useNavigate()
  const { token } = useContext(AuthContext)
  const [game, setGame] = useState<GameProps>(initalDataGame)
  const [keys, setKeys] = useState([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')

  const goBack = () => {
    navigate('/library')
  }


  async function getGames() {
    const responseProduct = await api.get(`product/${state.gameId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setGame(responseProduct.data)

    const responseKey = await api.get(`key/${state.productId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setKeys(responseKey.data)

    const responseCategories = await api.get(`gender/${state.productId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setCategories(responseCategories.data)
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
        <header>
          <FiArrowLeft size={24} onClick={goBack} />
          <span>{game.name}</span>
        </header>
        <main>
          <img src={game.poster_url} alt="Thumb" />

          <div>
            <div className={styles.left}>
              <div className={styles.info}>
                <strong>Data de lançamento: </strong>
                <span>{game.release}</span>
              </div>
              <div className={styles.info}>
                <strong>Studio: </strong>
                <span>{game.studio}</span>
              </div>
              <div className={styles.info}>
                <strong>Plataforma: </strong>
                <span>{game.plataform}</span>
              </div>
              <div className={styles.info}>
                <strong>Gênero: </strong>
                <span>{categories.toString()}</span>
              </div>
            </div>

            <div className={styles.right}>
              {keys.map((key: { id: number, key: string }) => (
                <GameKey key={key.id} gameKey={key.key} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default GameScreen