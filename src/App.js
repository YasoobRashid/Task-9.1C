// src/App.js
import React, { useState } from 'react';
import { auth, signOut } from './firebase';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log('Signed out'))
      .catch((error) => console.error('Sign-out error:', error));
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <>
          <SignUp />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
