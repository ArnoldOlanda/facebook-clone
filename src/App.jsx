import { useState } from 'react'
import './App.css'
import { NavbarFb } from './components/Navbar'
import { Home } from './components/Home'
import { People } from './components/People'
import { Watch } from './components/Watch'
import { Store } from './components/Store'
import { Games } from './components/Games'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter className="App">
      <NavbarFb/>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Content />
      </div>
      <Routes>
        
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/watch" element={<Watch/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
        <Route path="/games" element={<Games/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
