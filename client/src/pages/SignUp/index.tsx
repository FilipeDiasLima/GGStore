import { useContext, useState } from 'react';
import AuthContext from '../../context/auth';
import { Link } from 'react-router-dom'
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input'
import Button from '../../components/Button';
import AvatarDropzone from '../../components/AvatarDropzone';

import styles from './styles.module.scss'
import { api } from '../../services/api';

const SignUp = () => {
  const { signIn } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState<any>();

  const handleSignIn = async () => {
    const data = new FormData()
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    data.append('provider', JSON.stringify(false))
    if (selectedAvatar) data.append('avatar', selectedAvatar)

    const response = new Promise((resolve) => {
      resolve(api.post('/user', data, {
        headers: {
          'Accept': 'multipart/form-data'
        }
      }))
    })

    const promise: any = await response

    if (promise.status === 201) signIn({ email: email, password: password })
  }

  function handleSavePost(file: File) {
    setSelectedAvatar(file)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.ggLogoTop}>GG</h1>
      <div className={styles.content}>
        <strong className={styles.title}>GG<strong>store</strong></strong>
        <AvatarDropzone onFileUploaded={handleSavePost} />
        <Input
          name="name"
          icon={FiUser} placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          name="email"
          icon={FiMail} placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          name="confirmPassword"
          icon={FiLock}
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Button type="button" onClick={handleSignIn}>Cadastrar</Button>
        <Link to="/login">
          <FiArrowLeft />
          Já possuo uma conta
        </Link>
      </div>
      <h1 className={styles.ggLogoBottom}>GG</h1>
    </div>
  )
}

export default SignUp