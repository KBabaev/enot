import React from 'react'
import css from './styles.module.css'

interface PropsType {
  status: 'done' | 'fail' | 'disable'
}

export const Pointer: React.FC<PropsType> = ({ status }): JSX.Element => {
  const getColor = (): string => {
    let color
    switch (status) {
      case 'done':
        color = '#10C200'
        break
      case 'fail':
        color = '#FF0000'
        break
      case 'disable':
        color = '#A9A9A9'
        break
      default:
        color = '#366EFF'
    }
    return color
  }
  return <div className={css.pointer} style={{ backgroundColor: `${getColor()}` }} />
}
