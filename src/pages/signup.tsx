import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FaUserAlt, FaLock } from "react-icons/fa";
import '../pages/Style/Login.css'; // Your path might be different

export default function SignUp() {
  // Define the dark theme
  const theme = createTheme({
    palette: {
      mode: 'dark', // ensures that text and other components use dark theme colors
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='wrapper' style={{
        background: 'linear-gradient(to bottom, #000046, #000000)', // Gradient from dark blue to black
        color: theme.palette.text.primary,
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 0,
        margin: 0,
      }}>
        <div className='login-container' style={{
          padding: '4rem',
          borderRadius: '4px',
          background: '#333', // Lighter shade of black, dark gray
          boxShadow: `10px 10px 20px #00001a, -5px -5px 20px #2e2e2e`, // Adjusted shadow colors for depth
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}>
          <form action="">
            <h1>Login</h1>
            <div className='input-box' style={{
  position: 'relative',
  background: theme.palette.background.default,
  borderRadius: '10px',
  margin: '2rem 0',
  boxShadow: 'inset 5px 5px 10px #00001a, inset -5px -5px 10px #2e2e2e',
}}><input 
type="email" 
placeholder='email' 
id='email'
required 
style={{
  border: 'none',
  outline: 'none',
  background: 'none',
  padding: '1.5rem',
  paddingLeft: '2.5rem',
  color: 'inherit',
  width: '100%',
  // Add this to remove the blue glow border
  boxShadow: 'none',
  // Ensure the focus state has no outline or boxShadow

}}
/>
<FaUserAlt className='icon' style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: theme.palette.grey[500],
          }} />
        </div>
        <div className='input-box' style={{
position: 'relative',
background: theme.palette.background.default,
borderRadius: '10px',
margin: '2rem 0',
boxShadow: 'inset 5px 5px 10px #00001a, inset -5px -5px 10px #2e2e2e',
        }}>
              <input 
    type="text" 
    placeholder='Username' 
    required 
    style={{
      border: 'none',
      outline: 'none',
      background: 'none',
      padding: '1.5rem',
      paddingLeft: '2.6rem',
      color: 'inherit',
      width: '100%',
      // Add this to remove the blue glow border
      boxShadow: 'none',
      // Ensure the focus state has no outline or boxShadow

    }}
  />
  <FaUserAlt className='icon' style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.palette.grey[500],
              }} />
            </div>
            <div className='input-box' style={{
  position: 'relative',
  background: theme.palette.background.default,
  borderRadius: '10px',
  margin: '2rem 0',
  boxShadow: 'inset 5px 5px 10px #00001a, inset -5px -5px 10px #2e2e2e',
            }}>
              <input 
    type="password" 
    placeholder='Password' 
    required 
    style={{
      border: 'none',
      outline: 'none',
      background: 'none',
      padding: '1rem',
      paddingLeft: '2.5rem',
      color: 'inherit',
      width: '100%',
      // Add this to remove the blue glow border
      boxShadow: 'none',
      // Ensure the focus state has no outline or boxShadow
    }}
  />
              <FaLock className='icon' style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.palette.grey[500],
              }} />
            </div>
            
            <div className="remember-forgot" style={{
              justifyContent: 'space-between', // Space elements evenly
              fontSize: '0.8rem', // Smaller font size for a cleaner look
            }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="remember-me" style={{
                marginRight: '0.5rem',
              }} />
              <label htmlFor="remember-me" style={{
                cursor: 'pointer',
              }}>Remember me</label>
            </div>
            <a href="#" style={{
              textDecoration: 'none',
              color: theme.palette.primary.main,
            }}>Forgot password?</a>
          </div>
          <button type="submit" style={{
  // ... other styles ...
  // Remove focus outline for buttons as well

}}>
  Login
</button>

          <div className="register-link" style={{
            marginTop: '1rem',
          }}>
            <p style={{ margin: 0 }}>Don't have an account?
              <a href="#" style={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontWeight: 'bold',
              }}> Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </ThemeProvider>
);};
