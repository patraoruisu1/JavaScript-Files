import React from 'react';

function UserGreetingAlt(props) {
  const { primeiro, ultimo } = props;

  return (
    <h1>Olá, {primeiro} {ultimo}</h1>
  );
}

const user = { primeiro: "Alberto", ultimo: "Menezes" };

function App() {
  return (
    <div>
      <UserGreetingAlt primeiro={user.primeiro} ultimo={user.ultimo} />
    </div>
  );
}

export default App;
