import React, {useState} from "react";
import "./App.css";

const App = () => {
  // let message = "hello World";
  const [message, setMessage] = useState('Hello World');
  return (
    <>
    <div className="container">{message}</div>
    <button onClick={()=> setMessage('Hellooooooo')}>ALTERAR</button>
    </>
  )
};

export default App;