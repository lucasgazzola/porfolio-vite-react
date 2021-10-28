import './App.css'
import Nav from './components/NavBar'
import { Route } from 'wouter'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App-header bg-gradient-to-r from-indigo-400 via-blue-500 to-gray-300'>
      <Nav />
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
      <Footer />
    </div>
  )
}

export default App
