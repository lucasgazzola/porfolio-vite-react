import { Link } from 'wouter'
export default function Nav () {
  return (
    <nav className='nav fixed'>
      <div className='nav__logo'>
        <Link href='/'>
          <img src='./logo.svg' alt='logo' />
        </Link>
      </div>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav__item'>
          <Link href='/about'>About</Link>
        </li>
        <li className='nav__item'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='nav__item'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
