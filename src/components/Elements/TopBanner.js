import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useNavigate } from 'react-router-dom';

export default function TopBanner() {
  const navigate = useNavigate();

  const action = (
    <Button sx={{color:'#fff', marginRight: 4, textTransform: "none"}} size="small" onClick={()=> navigate("contact-us")}>
      Contact Us
    </Button>
  );

  return (
    <Stack spacing={2}>
      <SnackbarContent action={action} />
    </Stack>
  );
}
