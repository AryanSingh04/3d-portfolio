import { useState } from 'preact/hooks'
import { Home,About,Contact,Project } from './Pages'
import './app.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App=()=> {
 return (
  <div className=' bg-gray-300'>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
   
    </Routes>
    </Router>
  </div>
 )
}
export default App;
