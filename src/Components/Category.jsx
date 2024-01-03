import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories, deleteCategory, getAVideo, getCategories, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from '../Components/VideoCard'

function Category() {

  //to hold category name from the form
  const [categoryName, setCategoryName] = useState('')
  console.log(categoryName);

  //to hold category details (including name and id)
  const [categoryDetails, setCategoryDetails] = useState([])


  //add category
  const handleAddCategory = async()=>{
  const body = {
    categoryName
  }
    //to make api call
    if (categoryName) {
      const response = await addCategories(body)
      console.log(response);
      toast.success("Category Added Successfully.")
      getCategory()
      setCategoryName('')
      handleClose()
    } else {
      toast.error("Please enter a category name.")
    }
  }


  //get category
  const getCategory = async()=>{
    const {data} = await getCategories()
    console.log(data); //array of categories
    setCategoryDetails(data)
  }
  console.log(categoryDetails);
  useEffect(()=>{
    getCategory()
  },[])


  //delete category
  const handleDeleteCategory = async(item)=>{
    //make api call to delete category
    await deleteCategory(item.id)
    getCategory()
    toast.error(`${item.categoryName} deleted successfully`)
  }


  //dragOver function
  const dragOver = (e)=>{
    console.log("Video Drag Over");
    e.preventDefault()
  }


  //drop function
  const videoDrop = async(e, categoryId)=>{
    console.log("Video dropped" + categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId);
    const {data} = await getAVideo(videoId) //api call to fetch video data
    console.log(data); //data
    const selectedCategory = categoryDetails.find(item=>item.id===categoryId) //get category details
    console.log(selectedCategory);
    selectedCategory.allvideos = selectedCategory.allvideos || [];  // Ensure allvideos is initialized as an array
    selectedCategory.allvideos.push(data) //add video details into the array (allvideos[])
    console.log(selectedCategory);
    await updateCategory(categoryId, selectedCategory)  //make an api call to update category details
    getCategory()
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='text-center'>
        <Button onClick={handleShow} size="lg" style={{width:'250px'}} className='btn btn-primary me-5'>Add New Category</Button>
      </div>

      <div className='px-3 mt-3'>
        {
          categoryDetails.length > 0? categoryDetails.map(item=>(
            <div onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e, item.id)} className='my-3 p-2 ps-3 border border-1 border-primary rounded'>
              <div className='d-flex justify-content-between'>
                <h5 className='mt-2'>{item.categoryName}</h5>
                <button onClick={()=>handleDeleteCategory(item)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
              </div>
              <Row className='mt-3'>
              {
                item.allvideos && item.allvideos.map(data=>(
                  <Col className='px-3'>
                      <VideoCard displayData = {data} insideCategory={true} />
                  </Col>
                ))
              }
            </Row>
            </div>
          )) : <p>No Data.</p>
        }
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingPassword" label="Category Name">
          <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

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

    </>
  )
}

export default Category