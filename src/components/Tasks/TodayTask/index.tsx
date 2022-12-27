import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import { TaskType } from '../../../data/database'
import { CheckboxCustom } from '../../Checkbox/Checkbox'
import { TaskRow } from '../TaskRow'
import css from '../styles.module.css'
import { TaskModal } from '../../TaskModal/TaskModal'
import { initTaskError, initTaskInfo } from '../../../assets/constants'
import { TaskErrorType, TaskInfoType } from '../OtherTask'
import { AddCircle } from '@mui/icons-material'

interface PropsType extends TaskType {
  changeTaskStatus: (dayId: number, id: number, status: boolean) => void
  addNewTask: (dayId: number, taskId: number, taskInfo: TaskInfoType) => void
  deleteTaskRow: (dayId: number, id: number) => void
}

export const TodayTask: React.FC<PropsType> = ({
  dayId,
  tasks,
  changeTaskStatus,
  deleteTaskRow,
  addNewTask,
}): JSX.Element => {
  const [showTask, setShowTask] = useState(true)
  const [taskInfo, setTaskInfo] = React.useState<TaskInfoType>(initTaskInfo)
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const [errors, setErrors] = React.useState<TaskErrorType>(initTaskError)

  const changeTaskVisible = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShowTask(e.target.checked)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setErrors((prev) => ({ ...prev, [name]: !!value.length }))
    setTaskInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleCloseModal = (): void => {
    setErrors(initTaskError)
    setTaskInfo(initTaskInfo)
    setShowModal(false)
  }

  const handleOpenModal = (): void => {
    setShowModal(true)
  }

  const handleAddTask = (): void => {
    setErrors(initTaskError)
    setTaskInfo(initTaskInfo)
    addNewTask(dayId, tasks.length, taskInfo)
    setShowModal(false)
  }

  return (
    <>
      <div className={css.todayTitle}>
        <CheckboxCustom checked={showTask} onChange={changeTaskVisible} />
        <Typography variant='h2'>Today Tasks:</Typography>
      </div>
      <TaskModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleAddTask={handleAddTask}
        onChange={onChange}
        errors={errors}
        taskInfo={taskInfo}
      />
      {showTask && (
        <div className={css.tasks}>
          {tasks.map((task) => (
            <TaskRow
              key={`${dayId}-${task.title}`}
              changeTaskStatus={changeTaskStatus}
              dayId={dayId}
              deleteTaskRow={deleteTaskRow}
              {...task}
            />
          ))}
          <div className={css.addSvg}>
            <IconButton
              type='button'
              onClick={handleOpenModal}
              sx={{ '& .MuiSvgIcon-root': { fontSize: '30px', color: '#61ea5a' } }}
            >
              <AddCircle />
            </IconButton>
          </div>
        </div>
      )}
    </>
  )
}
