import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import ServiceNavItems from '../Nav/ServiceNavItems'
import Link from '@mui/material/Link';
import { aboutUsNavigation } from "../AppConstants";

const styles = {
  btnLink: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "capitalize",
    color: { xs: '#000000', lg: '#fff' },
    marginRight: "44px",
    paddingX: 0,
    display: "flex",
  },
};

const Navbar = ({ changeDrawerState }) => {
  const navigate = useNavigate();

  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
  const [serviceAnchorEl, setServiceAnchorEl] = React.useState(null);
  const [partnerAnchorEl, setPartnerAnchorEl] = React.useState(null);
  const open = Boolean(aboutAnchorEl);
  const handleClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAboutAnchorEl(null);
  };
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      <Box>
        <MuiButton sx={styles.btnLink} onClick={(event)=> setServiceAnchorEl(event.currentTarget)}>
          Services {serviceAnchorEl ? <ExpandLess /> : <ExpandMore />}
        </MuiButton>
        <Menu
          id="basic-menu"
          anchorEl={serviceAnchorEl}
          open={Boolean(serviceAnchorEl)}
          onClose={()=> setServiceAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{maxWidth:"calc(100% - 100px)"}}
        >
          <MenuItem><ServiceNavItems /></MenuItem>
        </Menu>
      </Box>
      <Box>
        <MuiButton sx={styles.btnLink} onClick={(event)=> setPartnerAnchorEl(event.currentTarget)}>
          Partners {partnerAnchorEl ? <ExpandLess /> : <ExpandMore />}
        </MuiButton>
        <Menu
          id="basic-menu"
          anchorEl={partnerAnchorEl}
          open={Boolean(partnerAnchorEl)}
          onClose={()=> setPartnerAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={changeDrawerState}>Partners</MenuItem>
        </Menu>
      </Box>
      <Box>
        <MuiButton sx={styles.btnLink} onClick={handleClick}>
          About Us {aboutAnchorEl ? <ExpandLess /> : <ExpandMore />}
        </MuiButton>
        <Menu
          id="basic-menu"
          anchorEl={aboutAnchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >{
            aboutUsNavigation.map((aboutus) => (
              <MenuItem><Link href={aboutus.href} underline="none" sx={{color:'#0B093B'}} >{aboutus.title}</Link></MenuItem>
            ))
          }

        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
