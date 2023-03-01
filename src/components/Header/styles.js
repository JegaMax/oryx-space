const styles = {
  appBar: (theme) => ({
    background: '#000000',
    color: '#ffffff'
  }),
  container: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      padding: 0,
      margin: 0,
    },
  }),
  logoDesk: {
    mr: 2,
    display: { xs: 'none', lg: 'flex' },
    flexGrow: 1,
    textDecoration: 'none',
    color: '#ffffff',
    paddingLeft: '64px'
  },
  logoMob: {
    mr: 2,
    display: { xs: 'flex', lg: 'none' },
    flexGrow: 1,
    textDecoration: 'none',
    color: '#ffffff'
  },
}

export default styles
