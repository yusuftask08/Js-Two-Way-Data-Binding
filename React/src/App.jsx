import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Input = (props) => {
  const { onChange, value } = props;

  return (
    <input 
    type='text'
    onChange={onChange}
    value={value}
    />
  )
}

function App() {
  const [fullName, setFullName] = useState('');

  // const handleChange = (event) => {
  //   console.log('event', event.target.value);
  //   setFullName(event.target.value)
  // }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Input onChange={(event)=> setFullName(event.target.value)} value={fullName} />
        <p>
          Full Name: {fullName}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
