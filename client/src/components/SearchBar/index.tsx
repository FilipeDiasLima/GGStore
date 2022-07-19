import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const SearchBar: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  return (
    <div className={styles.container}>
      <input
        {...rest}
      />
      {Icon && <Icon size={20} />}
    </div>
  )
}

export default SearchBar
