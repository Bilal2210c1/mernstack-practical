import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';

import ErrorPage from './Pages/ErrorPage'
import UserRegisteration from './Pages/UserRegisteration'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<UserRegisteration/>}/>
    <Route path='*' element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App