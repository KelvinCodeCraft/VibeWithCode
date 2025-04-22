import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title, rating}) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className='card'>
      <h2>{title}</h2>
      <h3>{rating}</h3>
      <button onClick={()=>setHasLiked(!hasLiked)}>
        {hasLiked? '❤️': '🤍' }
      </button>
    </div>
  )
}

const App = () => {
  
  return (
    <div className='card-container'> 
      <Card title="G20" rating={4.9} isCool = {true} />
      <Card title="Night Agent" rating={5} isCool = {true} />
      <Card title="Star Wars" rating={3} isCool = {false} />
    </div>
  )
}

export default App
