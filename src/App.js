import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [text,setText] = useState('')
  const [password,setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [admin,setAdmin] = useState(false)
  const [longPassword, setLongPassword] = useState(false)
  
  function handleSubmit(e){
    e.preventDefault()
    if(password.length>30){
      setLongPassword(true)
      setAdmin(false)
      setSubmitted(false)
    }else if(password == "admin123" && text == "admin"){
      setAdmin(true)
      setLongPassword(false)
      setSubmitted(false)
    }else{
      setSubmitted(true)
      setAdmin(false)
      setLongPassword(false)
    }
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='username' type='text' value={text} onChange={(e)=> setText(e.target.value)}/>
        <input id='password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type="submit">Log in</button>
      </form>
      {longPassword?<h2 id="password-warning">Password is too long</h2>:null}
      {admin? <h2 id="logged">Wellcome Admin! You're logged</h2>:null}
      {submitted?<h1 id="submitted">Hello user! Unfortunately your credentials are not registered. Contact the support team to get help.</h1>:null}
    </div>
  );
}

export default App;
