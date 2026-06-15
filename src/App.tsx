import { useState } from 'react'
import { Outlet } from 'react-router'
import { Footer, Header } from './components'

function App() {

  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
