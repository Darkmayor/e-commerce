import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
   } from '@mui/material';
   import React, { useState } from 'react';
   import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
   
   function LoginUser() {
    return (
     <>
      <Container component="main" maxWidth="xs" className='mt-24'>
       <Box>
        <Typography component="h1" variant="h5">
         Sign In
        </Typography>
        <Box component="form">
         <TextField
           margin="normal"
           required
           fullWidth
           id="email"
           type="email"
           label="Email Address"
           name="email"        
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
          />
         <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
         />
         <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          >
          Sign In
         </Button>
         <div className='border-2'>
         </div>
         <div className='text-center'>
          or login with
         </div>
         <FacebookLoginButton onClick={() => alert("Currently Not implemented")} />
         <GoogleLoginButton className='mt-2' onClick={()=> alert("Currently Not implemented")} />
         <Grid>
          <Link href="">Forgot password?</Link>
         </Grid>    
         <Grid className="footer">
          <Typography component="h5">
           Don't have an account? <Link href="">Sign Up</Link>
          </Typography>
         </Grid>
        </Box>
       </Box>
      </Container>
     </>
    );
   }
   
   export default LoginUser;