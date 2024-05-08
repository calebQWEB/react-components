import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import NavbarTwo from './Components/NavbarTwo/NavbarTwo'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <NavbarTwo />
    <div className='App'>
      {/* <ErrorPage /> */}
      <Home />
    </div>
    </>
  )
}

export default App
