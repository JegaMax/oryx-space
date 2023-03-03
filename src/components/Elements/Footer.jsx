import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'OryxSpace © '}
      <Link color="inherit" href="http://www.oryxspace.tech">
      www.oryxspace.tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} All Rights Reserved
    </Typography>
  );
}

function Footer(props) {

  return (
    <Box component="footer" sx={{ bgcolor: '#eee', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
        Let's make something great together
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Call Us: +974 66963360/70977928
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Email: <a href="mailto:business@oryxspace.tech">business@oryxspace.tech</a>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;