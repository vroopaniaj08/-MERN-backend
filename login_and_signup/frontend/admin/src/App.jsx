
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './component/login'
import Register from './component/register'

function App() {


  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login></Login>}></Route>
        <Route exact path='/signup' element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}

export default App
