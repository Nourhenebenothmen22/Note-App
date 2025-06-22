import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App