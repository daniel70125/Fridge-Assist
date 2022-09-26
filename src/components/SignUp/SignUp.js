import React, { Component } from 'react';
import './SignUp.scss';
import {Link} from 'react-router-dom';

import boyIcon from '../../Pictures/boy-chef-1.png';
import girlIcon from '../../Pictures/girl-chef-1.png';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        })};
    
    render() { 
        function Copyright(props) {
            return (
              <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link to='/'>
                  Your Website
                </Link>
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            );
          }
        const theme = createTheme();
        return ( 
            (
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
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
                      <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="username"
                          label="@username"
                          name="username"
                          autoComplete="username"
                          autoFocus
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="email"
                          name="email"
                          autoComplete="email"
                          autoFocus
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
                        />

                        <h2 style={{"textAlign":"center"}}>Choose your avatar!</h2>

                         {/* This is the radio group for picking avatar image */}
                         <RadioGroup id='sign-up-radio-group-cont' row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top" >
                          <div className='sign-up-avatar-cont'>
                            <img alt='image1' src={boyIcon} />
                            <FormControlLabel value="boyChef" control={<Radio style={{"transform":"scale(1.5)"}} />} labelPlacement="bottom" />
                          </div>
                          <div className='sign-up-avatar-cont'>
                            <img alt='image1' src={girlIcon} />
                            <FormControlLabel value="girlChef" control={<Radio style={{"transform":"scale(1.5)"}} />} labelPlacement="bottom" />
                          </div>
                        </RadioGroup> {/* End of radio group */}




                        <FormControlLabel
                          control={<Checkbox value="remember" color="primary" />}
                          label="Remember me"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign Up
                        </Button>
                        <Grid container>
                          <Grid item xs>
                            <Link to='/' variant="body2">
                              Forgot password?
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link to='/login' variant="body2">
                              {"Already have an account? Sign In"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                  </Container>
                </ThemeProvider>
              )
         );
    }
}
export default Login;