import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [text,setText] = useState('')
  const [password,setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  function handleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='username' type='text' value={text} onChange={(e)=> setText(e.target.value)}/>
        <input id='password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type="submit">Log in</button>
      </form>
      {submitted?<h1 id="logged">You're logged</h1>:null}
    </div>
  );
}

export default App;
