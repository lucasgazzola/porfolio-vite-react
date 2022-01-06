import './App.css'
import NavBar from './components/NavBar'
import { Route } from 'wouter'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App-header'>
      <NavBar />
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
      <Footer />
      <canvas class='background' />
      <script src='path/to/particles.min.js' />
    </div>
  )
}

export default App
