import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { TaskType } from '../../../data/database'
import { TaskRow } from '../TaskRow'
import { Accordion, AccordionSummary, AccordionDetails } from '../../Accordion/Accordion'
import { CollapseIcon } from '../../../assets'
import { Pointer } from '../../Pointer'
import { getTaskDate } from '../../../utils'
import { AddCircle } from '@mui/icons-material'
import { TaskModal } from '../../TaskModal/TaskModal'
import { initTaskError, initTaskInfo } from '../../../assets/constants'
import css from '../styles.module.css'

export interface TaskInfoType {
  title: string
  description: string
}

export interface TaskErrorType {
  title: boolean
  description: boolean
}

interface PropsType extends TaskType {
  changeTaskStatus: (dayId: number, id: number, status: boolean) => void
  addNewTask: (dayId: number, taskId: number, taskInfo: TaskInfoType) => void
  deleteTaskRow: (dayId: number, id: number) => void
  index: number
}

export const OtherTask: React.FC<PropsType> = ({
  dayId,
  tomorrow,
  tasks,
  changeTaskStatus,
  index,
  addNewTask,
  deleteTaskRow,
}): JSX.Element => {
  const [expandId, setExpandId] = React.useState<React.Key | null>(null)
  const [taskInfo, setTaskInfo] = React.useState<TaskInfoType>(initTaskInfo)
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const [errors, setErrors] = React.useState<TaskErrorType>(initTaskError)

  const expandChange =
    (id: React.Key) =>
    (event: React.SyntheticEvent, isExpanded: boolean): void => {
      setExpandId(isExpanded ? id : null)
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
    <div className={css.tasks}>
      <TaskModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleAddTask={handleAddTask}
        onChange={onChange}
        errors={errors}
        taskInfo={taskInfo}
      />
      <Accordion expanded={expandId === dayId} onChange={expandChange(dayId)}>
        <AccordionSummary expandIcon={<CollapseIcon />}>
          <Pointer status='disable' />
          <Typography className={css.otherTitle} variant='h2'>
            {tomorrow ? 'Tomorrow Tasks' : `${getTaskDate(index + 1)} Tasks`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={css.otherTasks}>
            {tasks.map((task) => (
              <TaskRow
                key={`${task.id}-${task.title}`}
                dayId={dayId}
                changeTaskStatus={changeTaskStatus}
                deleteTaskRow={deleteTaskRow}
                {...task}
              />
            ))}
          </div>
          <div className={css.addSvg}>
            <IconButton
              type='button'
              onClick={handleOpenModal}
              sx={{ '& .MuiSvgIcon-root': { fontSize: '30px', color: '#61ea5a' } }}
            >
              <AddCircle />
            </IconButton>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
