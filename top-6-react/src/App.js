// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function onSubmit(e){
    e.preventDefault()
    console.log({email, password})
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor = "email">Email</label>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        id="email"
      />
      <label htmlFor = "email">Password</label>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        id="email"
      />
      <button type = "submit">Submit</button>
    </form>
  );
}

export default App;
