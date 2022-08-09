import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import LibCard from '../../components/LibCard'
import { api } from '../../services/api'

import styles from './styles.module.scss'

interface MainProps {
  route: string
}

interface GameProps {
  id: number
  name: string
  cover_url: string
}

const Main = ({ route }: MainProps) => {
  const navigate = useNavigate()
  const [games, setGames] = useState([])
  const [cookies] = useCookies(['token'])
  const token = cookies.token
  async function getGames() {
    const response = await api.get('product', {
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
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {games.map((game: GameProps) => (
            <div className={styles.slide} key={game.id}>
              <div className={styles.containerCard}>
                <div className={styles.image}>
                  <div style={{ background: `url(${game.cover_url})`, backgroundSize: 'cover' }} className={styles.cover}></div>
                </div>
                <div className={styles.info}>
                  <span>{game.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <strong className={styles.title}>GG<strong>store</strong></strong>
      <button type="button" className={styles.button} onClick={() => navigate(`/${route}`)}>
        Entrar
      </button>
      
      
      <div className={styles.slider}>
        <div className={styles.slide_track1}>
          {games.map((game: GameProps) => (
            <div className={styles.slide} key={game.id}>
              <div className={styles.containerCard}>
                <div className={styles.image}>
                  <div style={{ background: `url(${game.cover_url})`, backgroundSize: 'cover' }} className={styles.cover}></div>
                </div>
                <div className={styles.info}>
                  <span>{game.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Main