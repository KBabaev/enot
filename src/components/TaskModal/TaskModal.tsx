import React from 'react'
import { Button, Modal } from '@mui/material'
import Box from '@mui/material/Box'
import { NewTask } from '../NewTask/NewTask'
import { TaskErrorType, TaskInfoType } from '../Tasks/OtherTask'
import css from './styles.module.css'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '40%',
  border: 'none',
  borderRadius: '15px',
  backgroundColor: '#3f3d3d',
  boxShadow: 24,
  p: 4,
}

interface PropsType {
  showModal: boolean
  handleCloseModal: () => void
  handleAddTask: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: TaskErrorType
  taskInfo: TaskInfoType
}

export const TaskModal: React.FC<PropsType> = ({
  showModal,
  handleCloseModal,
  onChange,
  errors,
  taskInfo,
  handleAddTask,
}): JSX.Element => {
  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <Box sx={style} className={css.newTaskWrapper}>
        <div className={css.newTaskContent}>
          <NewTask label='title' name='title' onChange={onChange} error={!errors.title} />
          <NewTask
            label='description'
            name='description'
            onChange={onChange}
            error={!errors.description}
          />
          <Button
            variant='contained'
            color='info'
            disabled={!taskInfo.title || !taskInfo.description}
            sx={{ margin: '0 auto', padding: '2px 32px' }}
            onClick={handleAddTask}
          >
            ADD
          </Button>
        </div>
      </Box>
    </Modal>
  )
}
