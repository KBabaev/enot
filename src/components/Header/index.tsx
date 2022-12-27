import React, { useState } from 'react'
import { FormControlLabel, Modal, Typography } from '@mui/material'
import { ReactComponent as SettingsSVG } from '../../assets/icons/Settings.svg'
import { SwitchComponent } from '../Switch'
import css from './styles.module.css'

interface PropsType {
  changeVisibleNews: (value: boolean) => void
  visibleNews: boolean
}

export const Header: React.FC<PropsType> = ({ changeVisibleNews, visibleNews }): JSX.Element => {
  const [showModal, setShowModal] = useState(false)

  const changeModal = (value: 'open' | 'close') => {
    setShowModal(value === 'open')
  }

  const changeToggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeVisibleNews(e.target.checked)
  }

  return (
    <div className={css.header}>
      <Typography variant='h1'>To Do</Typography>
      <SettingsSVG onClick={() => changeModal('open')} />
      <Modal sx={{ border: 'none' }} open={showModal} onClose={() => changeModal('close')}>
        <div className={css.contentModal}>
          <div className={css.modalTitle}>Want to see the news?</div>
          <FormControlLabel
            control={<SwitchComponent checked={visibleNews} onChange={changeToggle} />}
            label=''
          />
        </div>
      </Modal>
    </div>
  )
}
