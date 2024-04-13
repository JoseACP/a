import { Routes, Route } from "react-router-dom"
import './App.css'
import  Sidebar  from './components/Sidebar'

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Sidebar />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
