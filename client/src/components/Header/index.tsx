import { Link, useLocation } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { IoCartOutline, IoCartSharp, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import SearchBar from '../SearchBar'

import avatar from '../../assets/madara.jpg'
import styles from './styles.module.scss'
import { useContext } from 'react';
import AuthContext from '../../context/auth';

const Header = () => {
  const { pathname } = useLocation()
  const { logout } = useContext(AuthContext)

  return (
    <header className={styles.container}>
      <nav className={styles.nav1}>
        <Link className={pathname === '/store' ? styles.linkActive : styles.link} to='/store'>Loja</Link>
        <Link className={pathname === '/library' ? styles.linkActive : styles.link} to='/library'>Biblioteca</Link>
      </nav>
      <SearchBar name='search' placeholder='Buscar na loja...' icon={FiSearch} />
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
        <img src={avatar} alt="avatar" />
        <AiOutlinePoweroff size={25} onClick={logout} />
      </nav>
    </header>
  )
}

export default Header