import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isDisable: boolean
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const SearchBar: React.FC<InputProps> = ({ name, icon: Icon, isDisable, ...rest }) => {
  const searchBar: any = useRef(null)

  useEffect(() => {
    !isDisable && searchBar.current.focus()
  }, [])

  return (
    <div className={styles.container}>
      <input
        ref={searchBar}
        {...rest}
      />
      {Icon && <Icon size={20} />}
    </div>
  )
}

export default SearchBar
