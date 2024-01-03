import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import {Link} from 'react-router-dom'
import Category from '../Components/Category'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Home() {

  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({})

  return (
    <>

      {/* 1st div */}
      <Container>
      <Row className="d-flex align-items-center justify-content-between mt-5 pb-5">
        <Col xs={10} className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </Col>
        <Col>
          <Link to={'/watch-history'} style={{textDecoration:'none', color:'black'}}>
            <button className='btn btn-warning p-2'><i class="fa-solid fa-clock-rotate-left me-2"></i>Watch History</button>
          </Link>
        </Col>
      </Row>
      </Container>

      {/* 2nd div */}
      <Row className="container-fluid d-flex justify-content-between py-3">
        <Col xs={8}>
          <h3 className='text-center mb-4 fw-bolder text-primary'>All Videos</h3>
          <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </Col>
        <Col><Category/></Col>
      </Row>

    </>
  )
}

export default Home