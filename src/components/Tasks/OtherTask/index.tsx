import React from 'react'
import { Typography } from '@mui/material'
import { TaskType } from '../../../data/database'
import { TaskRow } from '../TaskRow'
import { Accordion, AccordionSummary, AccordionDetails } from '../../Accordion/Accordion'
import { CollapseIcon } from '../../../assets'
import { Pointer } from '../../Pointer'
import css from '../styles.module.css'

interface PropsType extends TaskType {
  changeTaskStatus: (dayId: number, id: number, status: boolean) => void
}

export const OtherTask: React.FC<PropsType> = ({
  dayId,
  date,
  tomorrow,
  tasks,
  changeTaskStatus,
}): JSX.Element => {
  const [expandId, setExpandId] = React.useState<React.Key | null>(null)

  const expandChange =
    (id: React.Key) =>
    (event: React.SyntheticEvent, isExpanded: boolean): void => {
      setExpandId(isExpanded ? id : null)
    }

  return (
    <div className={css.tasks}>
      <Accordion expanded={expandId === dayId} onChange={expandChange(dayId)}>
        <AccordionSummary expandIcon={<CollapseIcon />}>
          <Pointer status='disable' />
          <Typography className={css.otherTitle} variant='h2'>
            {tomorrow ? 'Tomorrow Tasks' : `${date} Tasks`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={css.otherTasks}>
            {tasks.map((task) => (
              <TaskRow
                key={`${dayId}-${task.title}`}
                dayId={dayId}
                changeTaskStatus={changeTaskStatus}
                {...task}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
