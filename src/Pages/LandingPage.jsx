import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function LandingPage() {

  const navigate = useNavigate()

  return (
    <div>
      <Container className='my-5'>

        {/* first row */}
      <Row className='p-5'>
        <Col className='px-5'>
            {/* content */}
            <h1 className='fw-bolder text-center mb-3'>Welcome to <span className='text-primary'>Media Player</span></h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eum, fuga repellat, id earum eligendi nisi 
              officiis hic odit nobis laboriosam. Itaque at earum saepe maxime soluta numquam rem ratione. Lorem, ipsum dolor 
              sit amet consectetur adipisicing elit. Amet provident minus temporibus enim consequuntur ratione iste perferendis 
              ut at recusandae! Aperiam repudiandae omnis itaque, maiores pariatur quas dolorum quis corrupti.</p>
              <div className='text-center'>
              <button onClick={()=>navigate('/home')} className='btn btn-primary mt-3 p-2 px-3'>Get Started</button>
              </div>
        </Col>
        <Col className='px-5 mt-5'>
            {/* image */}
            <img style={{width:'100%', height:'200px'}} src="https://resonic.at/img/player/musical-spectrum.gif" alt="" />
        </Col>
      </Row>

      {/* second row */}
      <Row className='p-5'>
        <h2 className='text-center fw-bolder text-primary pb-4'>Features</h2>
        <Col className='px-5'>
          <Card >
          <Card.Img variant="top" style={{height:'300px'}} src="https://i.gifer.com/FDve.gif" />
          <Card.Body className='p-4'>
            <Card.Title className='text-center fw-bolder'>Managing Videos</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>

        <Col className='px-5'>
          <Card>
          <Card.Img variant="top" style={{height:'300px'}} src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif" />
          <Card.Body className='p-4'>
            <Card.Title className='text-center fw-bolder'>Categories Videos</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>

        <Col className='px-4'>
          <Card >
          <Card.Img variant="top" style={{height:'300px'}} src="https://media.newyorker.com/photos/5a2eecdfd0152e62fb02169b/master/w_2560%2Cc_limit/TNY-Best-Music.gif" />
          <Card.Body className='p-4'>
            <Card.Title className='text-center fw-bolder'>Watch History</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Third row */}
      <Row className='m-5 py-5 border border-2 border-primary'>
        <Col className='px-5'>
            <h3 className='text-primary fw-bolder mb-4'>Simple, Fast and Powerful</h3>
            <h5 className='text-primary fw-bolder'>Play Everything</h5>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis fuga alias illum 
              provident recusandae ipsam tenetur dolor, saepe accusamus laborum magnam facere eius dolore. 
              Pariatur, asperiores maxime! Sit, fugiat.</p>
            <h5 className='text-primary fw-bolder'>Categories Videos</h5>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis fuga alias illum 
              provident recusandae ipsam tenetur dolor, saepe accusamus laborum magnam facere eius dolore. 
              Pariatur, asperiores maxime! Sit, fugiat.</p>
            <h5 className='text-primary fw-bolder'>Managing History</h5>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis fuga alias illum 
              provident recusandae ipsam tenetur dolor, saepe accusamus laborum magnam facere eius dolore. 
              Pariatur, asperiores maxime! Sit, fugiat.</p>
        </Col>

        <Col className='px-5'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/IqwIOlhfCak?si=wkvjTNUQMiDIAAbK" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        className='mt-5 pt-3' allowfullscreen></iframe>
        </Col>
      </Row>

      </Container>
    </div>
  )
}

export default LandingPage