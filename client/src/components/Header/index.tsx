import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { IoCartOutline, IoCartSharp, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import SearchBar from '../SearchBar'

import styles from './styles.module.scss'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth';

interface HeaderProps {
  isDisable: boolean
  searchGame?: (filtersObj: {}) => Promise<void>
}

const Header = ({ searchGame, isDisable }: HeaderProps) => {
  const { pathname } = useLocation()
  const { logout, user, getUser } = useContext(AuthContext)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handleSearch() {
    isDisable && navigate('/store')
  }

  useEffect(() => {
    searchGame?.({ name: search })
  }, [search])

  useEffect(() => {
    getUser()
  }, [])

  return (
    <header className={styles.container}>
      <nav className={styles.nav1}>
        {
          user?.provider &&
          <Link className={pathname === '/newGame' ? styles.linkActive : styles.link} to='/newGame'>Novo Jogo</Link>
        }
        <Link className={pathname === '/store' ? styles.linkActive : styles.link} to='/store'>Loja</Link>
        <Link className={pathname === '/library' || pathname === '/game' ? styles.linkActive : styles.link} to='/library'>Biblioteca</Link>
      </nav>
      <SearchBar
        name='search'
        placeholder='Buscar na loja...'
        icon={FiSearch}
        value={search}
        isDisable={isDisable}
        onChange={e => setSearch(e.target.value)}
        onClick={handleSearch}
      />
      <nav className={styles.nav2}>
        <Link className={pathname === '/cart' ? styles.linkActive : styles.link} to='/cart'>
          {pathname === '/cart' ? (
            <IoCartSharp size={25} />
          ) : (
            <IoCartOutline size={25} />
          )}
        </Link>
        <Link className={pathname === '/favorites' ? styles.linkActive : styles.link} to='/favorites'>
          {pathname === '/favorites' ? (
            <IoHeartSharp size={25} />
          ) : (
            <IoHeartOutline size={25} />
          )}
        </Link>
        <img src={user?.avatar_url} alt="avatar" />
        <AiOutlinePoweroff size={25} onClick={logout} />
      </nav>
    </header>
  )
}

export default Header