import React from 'react'
import './ordercard.style.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'

export default function OrderCard({ size, number, name, status }) {
  return (
    <div className='orderRow'>
      <div className='numberText'>{number}</div>
      <div className='nameText'>{name}</div>
      <InfoOutlinedIcon />
    </div>
  )
}
