import { Link } from 'wouter'
import logo from '../favicon.svg'
export default function NavBar () {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <Link href='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link href='/about'>
            About
          </Link>
        </li>
        <li className='nav__item'>
          <Link href='/projects'>
            Projects
          </Link>
        </li>
        <li className='nav__item'>
          <Link href='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
