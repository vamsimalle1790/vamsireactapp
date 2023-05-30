

// import React from 'react';
// import { useState } from 'react';
// import {useHistory } from 'react-router-dom';



// export function Emplogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();


//   const handleLogin = () => {
//     // Perform login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//     history.push('/home');
//   };
//   if (username === '') {
//     console.log('Please enter your username and password.');
//   } else if (password === '') {
//   console.log('Please enter your password.');
//   }
//   return (
//     // <>
//     // <form>
//     //   <h4>Login</h4>
//     //   <label htmlFor="login page">User name</label>
//     //   <input type="text" />
//     //   <label>Password</label>
//     //   <input type='password'/>
//     //   <br/>
//     //   <input type='submit'/>
//     // </form>
//     // </>
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin} >Login</button>
//     </div>

//   )
// }

// export default Emplogin;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Emplogin.css';

export function Emplogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform email validation
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    // Perform login logic here
    if (email === 'vamsi@gmail.com' && password === 'password') {
      // Successful login
      console.log('Login successful');
      history.push('/home'); // Redirect to the home page
    } else {
      // Invalid credentials
      setErrorMessage('Invalid email or password');
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Emplogin;
