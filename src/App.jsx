import { useState } from 'react'
<<<<<<< HEAD
=======

>>>>>>> c0004c85a6dbc7189857de3b9e4544c61d53e51f
import './App.css'
import { NavbarFb } from './components/Navbar'
import { Home } from './components/Home'
import { People } from './components/People'
import { Watch } from './components/Watch'
import { Store } from './components/Store'
import { Games } from './components/Games'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { RightBar } from './components/RightBar'
import { Chat } from './components/Chat'
import { GlobalState } from './components/GlobalState'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'



function App() {
  const [mostrar, setMostrar] = useState(false)

  return (
    <GlobalState.Provider value={{mostrar, setMostrar}}>
      <BrowserRouter className="App">
   
      <NavbarFb/>
<<<<<<< HEAD
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Content />
      </div>
=======
     
        <RightBar/>
        {mostrar?<Chat></Chat>:<></>}
        
      <SideBar />
>>>>>>> c0004c85a6dbc7189857de3b9e4544c61d53e51f
      <Routes>
        
        
        
          
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/watch" element={<Watch/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/games" element={<Games/>}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalState.Provider>
    
  )
}

export default App
