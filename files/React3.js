import React from 'react';

function Soma(props) {
  const { a, b } = props;
  const resultado = a + b;

  return (
    <p>{a} + {b} = {resultado}</p>
  );
}

function App() {
  return (
    <div>
      <Soma a={3} b={4} />
    </div>
  );
}

export default App;
