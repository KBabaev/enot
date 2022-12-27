import React from 'react'
import { TodayTask } from './TodayTask'
import { OtherTask, TaskInfoType } from './OtherTask'
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

  const addNewTask = (dayId: number, taskId: number, taskInfo: TaskInfoType): void => {
    setTasksData((prev) => {
      const copyData = [...prev]
      const findTask = copyData.find((item) => item.dayId === dayId)
      if (findTask) {
        findTask.tasks.push({ ...taskInfo, id: taskId + 1, isDone: false })
      }
      return copyData
    })
  }

  const deleteTaskRow = (dayId: number, taskId: number): void => {
    setTasksData((prev) => {
      const copyData = [...prev]
      const findTask = copyData.find((item) => item.dayId === dayId)
      if (findTask) {
        findTask.tasks = findTask.tasks.filter((item) => item.id !== taskId)
      }
      return copyData
    })
  }

  return (
    <div className={css.content}>
      {tasksData.map((item, index) => {
        return item.today ? (
          <TodayTask
            {...item}
            key={item.dayId}
            changeTaskStatus={changeTaskStatus}
            deleteTaskRow={deleteTaskRow}
            addNewTask={addNewTask}
          />
        ) : (
          <OtherTask
            {...item}
            key={item.dayId}
            index={index}
            changeTaskStatus={changeTaskStatus}
            addNewTask={addNewTask}
            deleteTaskRow={deleteTaskRow}
          />
        )
      })}
    </div>
  )
}
