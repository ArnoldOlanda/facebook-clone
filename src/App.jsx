import { useContext, useState } from 'react'
import './App.css'
import { NavbarFb } from './components/Navbar'
import { Home } from './components/Home'
import { People } from './components/People'
import { Watch } from './components/Watch'
import { Store } from './components/Store'
import { Games } from './components/Games'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { RightBar } from './components/RightBar'
import { Chat } from './components/Chat'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import { GlobalContext } from './context/GlobalContext'



function App() {

  const {mostrar} = useContext(GlobalContext);
  // console.log( state );

  return (
      <BrowserRouter>
      <NavbarFb/>
      <div style={{ display: 'flex',paddingTop:'50px' }}>
        <SideBar />
        <Content />
        <RightBar/>
        { mostrar ? <Chat /> : 'no funca'}
        {/* <Chat /> */}
      </div>
   
      <Routes>      
        
          
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/watch" element={<Watch/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/games" element={<Games/>}></Route>
          <Route path="/" element={<Navigate to={'/home'}/>}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
