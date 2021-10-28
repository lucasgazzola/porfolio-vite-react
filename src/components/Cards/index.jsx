import socialMediaInfo from './socialMediaInfo'
export default function Cards () {
  return (
    <div className='social-media-cards flex flex-row justify-center items-center text-gray-900 font-bold w-2/4'>
      <ul className='flex flex-row'>
        {socialMediaInfo.map(media => {
          const { url, icon } = media
          return (
            <li key={url} className=''>
              <a href={url} target='_blank' rel='noreferrer'>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
