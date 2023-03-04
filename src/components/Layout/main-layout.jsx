import Box from '@mui/material/Box'
import React from 'react'
import TopBanner from '../Elements/TopBanner'
import Header from '../Header'
import Footer from '../Elements/Footer'

const MainLayout = ({ children }) => {
  return (
    <Box component="main">
      <TopBanner />
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
