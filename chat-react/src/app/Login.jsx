import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default Login;
