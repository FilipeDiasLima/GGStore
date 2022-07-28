import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input'
import Button from '../../components/Button';

import styles from './styles.module.scss'
import AuthContext from '../../context/auth';

interface SignFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const formRef = useRef(null);
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('filipe@gmail.com')
  // const [password, setPassword] = useState('123123')

  const handleSignIn = () => {
    signIn({ email, password })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.ggLogoTop}>GG</h1>
      <div className={styles.content}>
        <strong className={styles.title}>GG<strong>store</strong></strong>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          icon={FiMail}
          placeholder="E-mail"
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="button" onClick={handleSignIn}>Entrar</Button>
        <Link to="/register">
          <FiLogIn />
          Criar conta
        </Link>
      </div>
      <h1 className={styles.ggLogoBottom}>GG</h1>
    </div>
  )
}

export default SignIn