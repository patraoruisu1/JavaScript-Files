import React from 'react';

function UserGreeting(props) {
  const { user } = props;
  const { primeiro, ultimo } = user;

  return (
    <h1>Olá, {primeiro} {ultimo}</h1>
  );
}

const user = { primeiro: "Alberto", ultimo: "Menezes" };

function App() {
  return (
    <div>
      <UserGreeting user={user} />
    </div>
  );
}

export default App;
