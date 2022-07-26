import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import SmallInput from '../../components/SmallInput'
import Input from '../../components/Input'
import PosterDropzone from '../../components/PosterDropzone'

import styles from './styles.module.scss'
import CoverDropzone from '../../components/CoverDropzone'
import Button from '../../components/Button'
import { api } from '../../services/api'
import AuthContext from '../../context/auth'

const RegisterGame = () => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [studio, setStudio] = useState('')
  const [plataform, setPlataform] = useState('')
  const [release, setRelease] = useState('')

  const [action, setAction] = useState(false)
  const [adventure, setAdventure] = useState(false)
  const [fps, setFps] = useState(false)
  const [indy, setIndy] = useState(false)
  const [racing, setRacing] = useState(false)
  const [rpg, setRpg] = useState(false)

  const [selectedFilePost, setSelectedFilePost] = useState<File>();
  const [selectedFileCover, setSelectedFileCover] = useState<File>();

  function handleSavePost(file: File) {
    setSelectedFilePost(file)
  }

  function handleSaveCover(file: File) {
    setSelectedFileCover(file)
  }

  async function handleSubmit() {
    const data = new FormData()
    data.append('name', name)
    data.append('price', price)
    data.append('studio', studio)
    data.append('plataform', plataform)
    data.append('release', release)

    let categoriesArr = []
    if (action) categoriesArr.push('action')
    if (adventure) categoriesArr.push('adventure')
    if (fps) categoriesArr.push('fps')
    if (indy) categoriesArr.push('indy')
    if (racing) categoriesArr.push('racing')
    if (rpg) categoriesArr.push('rpg')

    data.append('categories', categoriesArr.join(','))

    const selectedFiles: File[] = [selectedFilePost!, selectedFileCover!]

    if (selectedFiles.length > 0) {
      data.append('images', selectedFiles[0])
      data.append('images', selectedFiles[1])
    }

    api.post('product', data, {
      headers: {
        'Accept': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      navigate('/store')
      alert('Jogo cadastrado com sucesso')
    }).catch(err => {
      alert('Erro ao cadastrar o jogo')
    })
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.form}>
            <Input
              placeholder='Nome do jogo'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className={styles.inputs}>
              <SmallInput
                placeholder='Preço'
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <SmallInput
                placeholder='Estudio'
                value={studio}
                onChange={e => setStudio(e.target.value)}
              />
            </div>
            <div className={styles.inputs}>
              <SmallInput
                placeholder='Plataforma'
                value={plataform}
                onChange={e => setPlataform(e.target.value)}
              />
              <SmallInput
                placeholder='Data de lançamento'
                value={release}
                onChange={e => setRelease(e.target.value)}
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
          </div>

        </div>
        <div className={styles.bottom}>
          <PosterDropzone onFileUploaded={handleSavePost} />
          <CoverDropzone onFileUploaded={handleSaveCover} />
        </div>
        <Button onClick={handleSubmit}>Cadastrar jogo</Button>
      </div>
    </>
  )
}

export default RegisterGame