
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Pages/Home'
import SinglePage from '../Pages/SinglePage'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Home />} />
<Route path='/singlepage' element={<SinglePage />} />

</Routes>
</BrowserRouter>
    </>
  )
}

export default App
