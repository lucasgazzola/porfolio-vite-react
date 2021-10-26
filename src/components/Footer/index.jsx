export default function Footer () {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            <strong>Copyright©{year} LucasGazzola</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
