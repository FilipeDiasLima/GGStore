import { useCallback, useState } from 'react'
import Header from '../../components/Header'
import { useDropzone } from 'react-dropzone'
import SmallInput from '../../components/SmallInput'
import Input from '../../components/Input'
import PosterDropzone from '../../components/PosterDropzone'

import styles from './styles.module.scss'
import CoverDropzone from '../../components/CoverDropzone'
import Button from '../../components/Button'

const RegisterGame = () => {
  const [action, setAction] = useState(false)
  const [adventure, setAdventure] = useState(false)
  const [fps, setFps] = useState(false)
  const [indy, setIndy] = useState(false)
  const [racing, setRacing] = useState(false)
  const [rpg, setRpg] = useState(false)
  const [selectedFilePoster, setSelectedFilePoster] = useState<File>();
  const [selectedFileCover, setSelectedFileCover] = useState<File>();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.form}>
            <Input
              placeholder='Nome do jogo'
            />
            <div className={styles.inputs}>
              <SmallInput
                placeholder='Preço'
              />
              <SmallInput
                placeholder='Estudio'
              />
            </div>
            <div className={styles.inputs}>
              <SmallInput
                placeholder='Plataforma'
              />
              <SmallInput
                placeholder='Data de lançamento'
              />
            </div>
          </div>

          <div className={styles.categories}>
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
              <span>Indy</span>
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
          </div>

        </div>
        <div className={styles.bottom}>
          <PosterDropzone onFileUploaded={setSelectedFilePoster} />
          <CoverDropzone onFileUploaded={setSelectedFileCover} />
        </div>
        <Button>Cadastrar jogo</Button>
      </div>
    </>
  )
}

export default RegisterGame