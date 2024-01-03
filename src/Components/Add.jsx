import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {

  const [video, setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(video);

  const getEmbedLink = (e)=>{
    const {value} = e.target
    // console.log(value.slice(-31));
    const link = `https://www.youtube.com/embed/${value.slice(-31)}`
    setVideo({...video, embedLink: link})
  }

  //to upload a video
  const handleUpload = async()=>{  
    const {id,caption,url,embedLink} = video
    if (!id||!caption||!url||!embedLink) {
      toast.error("Please fill the form.")
    } 
    else {
      //make an API call
      const response = await uploadVideo(video)
      console.log(response);
      if (response.status>=200 && response.status<=300) {
        //set server response
        setUploadVideoServerResponse(response.data);
        toast.success(`${response.data.caption} added successfully.`)
        setVideo({
          id:"",
          caption:"",
          url:"",
          embedLink:""
        })
        handleClose() //to close modal
      } else {
        toast.warning("Please provide a unique Id.")
      }
    }
  }



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container d-flex">
        <h4 className='mt-1 fw-bolder'>Upload New Video</h4>
        <button onClick={handleShow} className='btn btn-primary ms-3'>
          <i class="fa-solid fa-circle-plus fa-beat-fade fs-4 mt-1 mx-2"></i>
        </button>

        <ToastContainer 
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details.</p>
          <form className='border border-1 border-primary p-3 rounded'>

            <FloatingLabel label="Video Id" className="mb-3">
            <Form.Control onChange={(e)=>setVideo({...video, id: e.target.value})} type="text" placeholder="Video Id" />
            </FloatingLabel>

            <FloatingLabel label="Video Caption" className="mb-3">
              <Form.Control onChange={(e)=>setVideo({...video, caption: e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel label="Video Image Url" className="mb-3">
              <Form.Control onChange={(e)=>setVideo({...video, url: e.target.value})} type="text" placeholder="Video Image Url" />
            </FloatingLabel>

            <FloatingLabel label="Youtube Link" className="mb-2">
              <Form.Control onChange={getEmbedLink} type="text" placeholder="Youtube Link" />
            </FloatingLabel>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}

export default Add