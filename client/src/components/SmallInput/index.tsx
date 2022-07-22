import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const SmallInput: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <div className={styles.container}>
      {Icon && <Icon size={20} />}
      <input
        {...rest}
      />
    </div>
  )
}

export default SmallInput
