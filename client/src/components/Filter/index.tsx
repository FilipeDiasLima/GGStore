import { useState } from 'react'
import styles from './styles.module.scss'

interface FilterProps {
  getFilters: ({ }) => void
}

const Filter = ({ getFilters }: FilterProps) => {
  const [action, setAction] = useState(false)
  const [adventure, setAdventure] = useState(false)
  const [fps, setFps] = useState(false)
  const [indy, setIndy] = useState(false)
  const [racing, setRacing] = useState(false)
  const [rpg, setRpg] = useState(false)
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

  function handleSetFilters() {
    getFilters({
      action: action || null,
      adventure: adventure || null,
      fps: fps || null,
      indy: indy || null,
      racing: racing || null,
      rpg: rpg || null,
    })
  }

  return (
    <div className={styles.container}>
      <strong>Gêneros</strong>

      <div className={styles.filterOption}>
        <button
          onClick={() => setAction(!action)}
          className={action ? styles.marked : styles.unmarked}
        >
        </button>
        <span>Ação</span>
      </div>
      <div className={styles.filterOption}>
        <button
          onClick={() => setAdventure(!adventure)}
          className={adventure ? styles.marked : styles.unmarked}
        >
        </button>
        <span>Aventura</span>
      </div>
      <div className={styles.filterOption}>
        <button
          onClick={() => setFps(!fps)}
          className={fps ? styles.marked : styles.unmarked}
        >
        </button>
        <span>FPS</span>
      </div>
      <div className={styles.filterOption}>
        <button
          onClick={() => setIndy(!indy)}
          className={indy ? styles.marked : styles.unmarked}
        >
        </button>
        <span>Indie</span>
      </div>
      <div className={styles.filterOption}>
        <button
          onClick={() => setRacing(!racing)}
          className={racing ? styles.marked : styles.unmarked}
        >
        </button>
        <span>Racing</span>
      </div>
      <div className={styles.filterOption}>
        <button
          onClick={() => setRpg(!rpg)}
          className={rpg ? styles.marked : styles.unmarked}
        >
        </button>
        <span>RPG</span>
      </div>

      <strong>Price</strong>
      <div className={styles.filterPrice}>
        <div className={styles.inputPrice}>
          <input
            placeholder="$ -- "
            value={priceFrom}
            onChange={e => setPriceFrom(e.target.value)}
          />
        </div>
        <div className={styles.miniLine} />
        <div className={styles.inputPrice}>
          <input
            placeholder="$ -- "
            value={priceTo}
            onChange={e => setPriceTo(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.line} />

      <button type="button" className={styles.applyButton} onClick={handleSetFilters}>
        Aplicar filtros
      </button>
    </div>
  )
}

export default Filter