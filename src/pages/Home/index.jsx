import Typewriter from 'typewriter-effect'
import Cards from '../../components/Cards'

export default function Home () {
  return (
    <div className='flex h-screen'>
      <div className='flex flex-col justify-center text-gray-900 font-bold w-2/4'>
        <h3 className='text-3xl'>Hello, my name is</h3>
        <h3 className='text-5xl'>Lucas Gazzola</h3>
        <p>I am a self taught <span className='text-white font-bold'>Front-end developer</span>  from Argentina and some of the technologies I've been working with are</p>
        <div className='text-white font-bold'>
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
        </div>
      </div>

      <Cards />

    </div>
  )
}
