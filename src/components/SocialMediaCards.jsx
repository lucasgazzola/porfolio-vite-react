import socialMediaInfo from './socialMediaInfo'

export default function SocialMediaCards () {
  return (
    <ul style={{ zIndex: 1000 }} className='social-media-list'>
      {socialMediaInfo.map(media => {
        const { url, icon } = media
        return (
          <li key={url} className='social-media-item'>
            <a href={url} target='_blank' rel='noreferrer'>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
