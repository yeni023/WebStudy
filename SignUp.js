import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <TextField
          margin="normal"
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          label="Nickname"
          required
          fullWidth
          name="Nickname"
          autoComplete="Nickname"
        />
        <TextField
          margin="normal"
          label="PassWord"
          type="passwoed"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          label="PassWord Confirm"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remeber me"
        />

        <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
          Sign up
        </Button>
      </Box>
    </Container>
  );
}