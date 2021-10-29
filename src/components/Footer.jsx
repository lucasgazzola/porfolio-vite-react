export default function Footer () {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <strong>Copyright©{year} LucasGazzola</strong>
      </div>
    </footer>
  )
}
