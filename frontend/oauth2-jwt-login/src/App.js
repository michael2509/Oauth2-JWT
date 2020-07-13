import React from 'react';
import LoginForm from './LoginForm';
import EndpointList from './EndpointList';

function App() {
  return (
    <div style={{ width: 500, margin: 'auto' }}>
        <LoginForm />
        <EndpointList />
    </div>
  );
}

export default App;
