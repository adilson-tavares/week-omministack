import React, {useState} from 'react';
import Header from './Header';

function App() {
  
  const [counter, setcounter] = useState(0);

  function increment() {
    
    setcounter(counter + 1);
  }
  return (
    <div>
    <Header>
      Contador: {counter}
    </Header>
    <button onClick={increment}> Incrementar </button>
  </div>

  );
}

export default App;
