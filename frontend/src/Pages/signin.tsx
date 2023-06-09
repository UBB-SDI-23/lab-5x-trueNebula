import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { Login } from '../App';

const theme = createTheme();

export interface SignInProps{
    setLoginCallback: (data: Login) => void;
}

const SignIn : React.FC<SignInProps> = ({setLoginCallback })=> {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoginCallback({username: "aaa", password: "aaa"});
  };

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{'color':'#242424', 'backgroundColor': 'rgba(255, 255, 255, 0.87)', 'borderRadius': '6px'}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{'color':'#242424', 'backgroundColor': 'rgba(255, 255, 255, 0.87)', 'borderRadius': '6px'}}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" style={{color: 'rgba(255, 255, 255, 0.87)'}}/>}
              label="Remember me"

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={'primary'}
              sx={{ 'mt': '3', 'mb': '2', 'color':'#242424', 'backgroundColor': 'rgba(255, 255, 255, 0.87)'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default SignIn;