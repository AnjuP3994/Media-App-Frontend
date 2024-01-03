import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { getAllVideos } from '../services/allAPI'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function View({uploadVideoServerResponse}) {

  const [allVideo,setAllVideo] = useState([])

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  //api call for displaying video cards
  // const getUploadedVideos = async()=>{
  //   const response = await getAllVideos()  //all uploaded videos
  //   console.log(response.data); //array of videos
  // }

  //OR

  // destructuring method
  const getUploadedVideos = async()=>{
    const {data} = await getAllVideos()  //all uploaded videos
    console.log(data); //array of videos
    setAllVideo(data)
  }
  console.log(allVideo); //array of videos

  useEffect(()=>{
    getUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse, deleteVideoStatus])

  return (
    <>
      <Row className='ps-3'>
        {
          allVideo.length>0? allVideo.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          )): <p>No Data</p>
        }
      </Row>
    </>
  )
}

export default View