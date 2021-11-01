export default function Footer () {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <strong>Copyright © {year} - Lucas Gazzola</strong>
        <div>
          <ul className='footer__social-media'>
            <li>
              <a href='https://github.com/lucasgazzola' target='_blank' rel='noreferrer'>GitHub</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/lucasgazzola/' target='_blank' rel='noreferrer'>LinkedIn</a>
            </li>
            <li>
              <a href='https://twitter.com/LucasGazzola17/' target='_blank' rel='noreferrer'>Twitter</a>
            </li>
            <li>
              <a href='https://www.instagram.com/lucasgazzola/' target='_blank' rel='noreferrer'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
