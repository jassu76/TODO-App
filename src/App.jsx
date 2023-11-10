import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Component/TodoList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <h1 className='bg-gray-800 text-white text-3xl'>Todo-List</h1>
          <TodoList></TodoList>
    </>
  )
}

export default App
