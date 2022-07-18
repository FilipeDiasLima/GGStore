import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input'
import Button from '../../components/Button';

import styles from './styles.module.scss'

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.ggLogoTop}>GG</h1>
      <div className={styles.content}>
        <strong className={styles.title}>GG<strong>store</strong></strong>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
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