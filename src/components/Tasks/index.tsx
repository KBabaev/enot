import React from 'react'
import { TodayTask } from './TodayTask'
import { OtherTask } from './OtherTask'
import { AppContext } from '../../index'
import { TaskType } from '../../data/database'
import { useLocalStorage } from '../../utils'
import css from './styles.module.css'

export const Tasks: React.FC = (): JSX.Element => {
  const data = React.useContext<TaskType[]>(AppContext)
  const [tasksData, setTasksData] = useLocalStorage<TaskType[]>('tasks', data)

  const changeTaskStatus = (dayId: number, id: number, status: boolean) => {
    setTasksData((prev) => {
      const copyData = [...prev]
      const findDay = copyData.find((item) => item.dayId === dayId)
      const findTask = findDay?.tasks.find((item) => item.id === id)
      if (findTask) {
        findTask.isDone = status
      }
      return copyData
    })
  }

  return (
    <div className={css.content}>
      {tasksData.map((item) => {
        return item.today ? (
          <TodayTask {...item} key={item.dayId} changeTaskStatus={changeTaskStatus} />
        ) : (
          <OtherTask {...item} key={item.dayId} changeTaskStatus={changeTaskStatus} />
        )
      })}
    </div>
  )
}
