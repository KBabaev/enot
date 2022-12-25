import React from 'react'
import { Typography } from '@mui/material'
import { DoneIcon } from '../../../assets'
import { TaskType } from '../../../data/database'
import { TaskRow } from '../TaskRow'
import css from '../styles.module.css'

interface PropsType extends TaskType {
  changeTaskStatus: (dayId: number, id: number, status: boolean) => void
}

export const TodayTask: React.FC<PropsType> = ({ dayId, tasks, changeTaskStatus }): JSX.Element => {
  return (
    <>
      <div className={css.todayTitle}>
        <DoneIcon />
        <Typography variant='h2'>Today Tasks:</Typography>
      </div>
      <div className={css.tasks}>
        {tasks.map((task) => (
          <TaskRow
            key={`${dayId}-${task.title}`}
            changeTaskStatus={changeTaskStatus}
            dayId={dayId}
            {...task}
          />
        ))}
      </div>
    </>
  )
}
