import './header.style.css'
import { Switch } from '@mui/material'

function Header() {
  return (
    <div className='header'>
      <div className='left'> JMD Restaurant </div>
      <div className='center'>
        <a href='https://www.linkedin.com/in/deepdev/'>
          <h2>Waiter Calling System</h2>
        </a>
        <p>A Complete Restaurant Management System</p>
      </div>
      <div className='right'>
        <Switch checked color='success' />
      </div>
    </div>
  )
}

export default Header
