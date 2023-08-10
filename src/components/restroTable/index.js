import React from 'react'
import './restroTable.style.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'

export default function RestroTable({ size, number, name, status }) {
  return (
    <div className={`restroTableCon ${status} size${size}`}>
      <div className='row'>
        <div className='numberText'>{number}</div>
        <InfoOutlinedIcon />
      </div>
      <div className='detailsRow'>
        <div className='column'>
          <div className='nameText'>{name}</div>
          <div className='statusText'>{status}</div>
        </div>
        <div className='svgNumber'>
          <Diversity2OutlinedIcon />
          <div className='numberText'>{size}</div>
        </div>
      </div>
    </div>
  )
}
