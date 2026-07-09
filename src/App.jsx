import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from './components/AddBook'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route path="add" element={<AddBook />} />
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
