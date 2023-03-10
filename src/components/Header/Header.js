import { Menu } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

import Drawer from '../Drawer'
import Navbar from '../Navbar'

//IMPORTING SVG'S

import styles from './styles'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppBar position='static' sx={styles.appBar}>
      <Container maxWidth='xl' sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography variant='h3' component='a' sx={styles.logoDesk} href='/'>
            Oryx Space
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size='large'
              color='#ffffff'
              aria-label='menu'
              onClick={() => setOpenDrawer(true)}
            >
              <Menu sx={{color:"#fff"}}/>
            </IconButton>
          </Box>

          <Typography variant='h4' component='a' sx={styles.logoMob} href='/'>
            Oryx Space
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <Navbar changeDrawerState={()=>setOpenDrawer(false)} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
