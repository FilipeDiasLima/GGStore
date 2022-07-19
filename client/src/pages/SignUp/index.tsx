import { Link } from 'react-router-dom'
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input'
import Button from '../../components/Button';

import styles from './styles.module.scss'

const SignUp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.ggLogoTop}>GG</h1>
      <div className={styles.content}>
        <strong className={styles.title}>GG<strong>store</strong></strong>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Input
          name="confirmPassword"
          icon={FiLock}
          type="password"
          placeholder="Confirmar Senha"
        />
        <Button type="button">Cadastrar</Button>
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