import React, { useEffect, useState } from 'react'
import { TaskRowType } from '../../../data/database'
import { FormControlLabel } from '@mui/material'
import { SwitchComponent } from '../../Switch'
import { Pointer } from '../../Pointer'
import css from './styles.module.css'
import { Delete } from '@mui/icons-material'

interface PropsType extends TaskRowType {
  changeTaskStatus: (dayId: number, id: number, status: boolean) => void
  deleteTaskRow: (dayId: number, id: number) => void
  dayId: number
}

export const TaskRow: React.FC<PropsType> = ({
  title,
  description,
  isDone,
  changeTaskStatus,
  dayId,
  id,
  deleteTaskRow,
}): JSX.Element => {
  const [statusTask, setStatusTask] = useState<boolean>(isDone)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.target
    setStatusTask(checked)
    changeTaskStatus(dayId, id, checked)
  }

  const removeTask = (): void => {
    deleteTaskRow(dayId, id)
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
      <div className={css.switch}>
        <FormControlLabel
          label=''
          control={<SwitchComponent checked={statusTask} onChange={onChange} />}
        />
        <FormControlLabel label='' control={<Delete onClick={removeTask} />} />
      </div>
    </div>
  )
}
