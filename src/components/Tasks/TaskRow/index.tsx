import React, { useEffect, useState } from 'react'
import { TaskRowType } from '../../../data/database'
import { FormControlLabel } from '@mui/material'
import { SwitchComponent } from '../../Switch'
import { Pointer } from '../../Pointer'
import css from './styles.module.css'

interface PropsType extends TaskRowType {
  changeTaskStatus: (dayId: number, id: number, status: boolean) => void
  dayId: number
}

export const TaskRow: React.FC<PropsType> = ({
  title,
  description,
  isDone,
  changeTaskStatus,
  dayId,
  id,
}): JSX.Element => {
  const [statusTask, setStatusTask] = useState<boolean>(isDone)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.target
    setStatusTask(checked)
    changeTaskStatus(dayId, id, checked)
  }

  useEffect((): void => {
    setStatusTask(isDone)
  }, [isDone])

  return (
    <div className={css.row}>
      <Pointer status={isDone ? 'done' : 'fail'} />
      <div className={css.textBlock}>
        <span
          className={css.title}
          style={{ textDecoration: `${statusTask ? 'line-through' : 'none'}` }}
        >
          {title}
        </span>
        <span className={css.description}>{description}</span>
      </div>
      <FormControlLabel
        label=''
        control={<SwitchComponent checked={statusTask} onChange={onChange} />}
      />
    </div>
  )
}
