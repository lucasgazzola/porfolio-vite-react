import Typewriter from 'typewriter-effect'
import Cards from '../../components/Cards'

export default function Home () {
  return (
    <section className='home-section'>
      <div className='home-section__presentation'>
        <h3>Hello, my name is</h3>
        <h1>Lucas Gazzola</h1>
        <p>I am a self taught <span>Front-end developer</span>  from Argentina and some of the technologies I've been working with are</p>
        <span>
          <Typewriter
            options={{
              strings: [
                'HTML, CSS, JavaScript',
                'React',
                'Sass, PostCSS',
                'Tailwind, Bootstrap'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50
            }}
          />
        </span>
      </div>
      <Cards />
    </section>
  )
}
