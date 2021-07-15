import Link from 'next/link'
import styles from '../styles/sidebar.module.css'
import { Button, MenuItem, Menu } from '@material-ui/core';

export default function Sidebar() {
  return (
    <div>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open with fade transition
        </Button>
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
  )
}