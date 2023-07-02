import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = ({ onLogin , onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} style={formContainerStyles}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{marginBottom: '16px',color:"#ffffff"}}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{marginBottom: '16px',color:"#ffffff"}}
      />
      <Button type="submit" variant="contained" color="secondary">
        Login
      </Button>
    </form>
  );
};

const SignupForm = ({ onSignup , onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(username, password);
  };

  return (
    <form onSubmit={handleSubmit} style={formContainerStyles}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{marginBottom: '16px',color:"#ffffff"}}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{marginBottom: '16px',color:"#ffffff"}}
      />
      <Button type="submit" variant="contained" color="secondary">
        Signup
      </Button>
    </form>
  );
};

const formContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  backgroundColor: '#ADD8E6',
  padding : "20px",
  borderRadius: "16px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
};

export { LoginForm, SignupForm };

