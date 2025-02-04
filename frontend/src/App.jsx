import { useState } from 'react' 
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Display from './Pages/Display'
import Insert from './Pages/Insert'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="insert" element={<Insert/>}/>
    
    
    
    
    
    </Route>
    
    
    
    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
