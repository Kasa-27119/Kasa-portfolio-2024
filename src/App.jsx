import './App.css'

// import components/pages
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
