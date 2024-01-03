import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToWatchHistory, deleteAVideo } from '../services/allAPI';
import { toast } from 'react-toastify';


function VideoCard({displayData, setDeleteVideoStatus, insideCategory}) {
  console.log(displayData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //api call to add watch history
    //destructuring method
    const {caption, embedLink} = displayData
    //to get current date and time
    let today = new Date() //Date and Time
    let timestamp = new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',
                    hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);
    console.log(timestamp);

    //api call
    let videoDetails={
      caption,
      embedLink,
      timestamp
    }
    //api call to get video details
    await addToWatchHistory(videoDetails)
  }

  //delete video
  const removeVideo = async(id)=>{
    //make api call
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
    toast.error(`${displayData.caption} deleted successfully`)
  }

  //drag function
  const dragStarted = (e,id)=>{
    console.log("drag started", +id, e);
    e.dataTransfer.setData("videoId",id) //videoId:8
  }
  

  return (
    <>
      <Row>
        <Col className='px-2'>
          <Card draggable onDragStart={(e)=>dragStarted(e, displayData.id)} style={{height:'20rem', backgroundColor:'rgb(0, 0, 0, 0.900)' }} className='mb-5 text-light'>
            <a href="#!"><Card.Img onClick={handleShow} width={'100%'} height={'170px'} variant="top" src={displayData.url} /></a>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <Card.Title className='fw-bolder'>{displayData.caption}</Card.Title>
              {
                insideCategory ? "" :
                <button onClick={()=>{removeVideo(displayData.id)}} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={displayData.embedLink} title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard