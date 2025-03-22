
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Pages/Home'
import SinglePage from '../Pages/SinglePage'
import AboutPage from '../Pages/AboutPage'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Home />} />
<Route path='/singlepage' element={<SinglePage />} />
<Route path='*' element={<AboutPage />} />

</Routes>
</BrowserRouter>
    </>
  )
}

export default App
