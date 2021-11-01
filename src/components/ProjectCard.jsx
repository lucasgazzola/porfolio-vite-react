import Card from 'react-bootstrap/Card'
import proyectsInfo from './proyectsInfo'

export default function ProjectCard () {
  return (
    proyectsInfo.map(proyect => {
      const { id, url, name, description, image } = proyect
      return (
        <a className='project-section__card text-decoration-none text-dark' key={id} href={url} target='_blank' rel='noreferrer'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      )
    })
  )
}
