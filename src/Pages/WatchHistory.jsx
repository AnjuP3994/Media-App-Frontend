import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getWatchHistory } from '../services/allAPI';

function WatchHistory() {

  const [watchData,setWatchData] = useState([])

  const handleHistory = async()=>{
    //make an api call to fetch data from the server
    const {data} = await getWatchHistory()
    console.log(data);
    setWatchData(data)
  }
  console.log(watchData);

  useEffect(()=>{
    handleHistory()
  },[])

  return (
    <>
      <div className='container d-flex justify-content-between p-5'>
        <h3 className='fw-bolder'>Watch History</h3>
        <Link to={'/home'}><button className='btn btn-primary'><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</button></Link>
      </div>

      <div className='container pb-5'>
        {watchData.length > 0 ? (
          <Table striped bordered hover variant="primary">
            <thead>
              <tr className='text-center fs-5'>
                <th className='p-3 fw-bolder'>Id</th>
                <th className='p-3 fw-bolder'>Caption</th>
                <th className='p-3 fw-bolder'>Url</th>
                <th className='p-3 fw-bolder'>Time</th>
              </tr>
            </thead>
            <tbody>  
            {
              watchData.map((item)=>(
                <tr>
                  <td className='text-light'>{item.id}</td>
                  <td className='text-light'>{item.caption}</td>
                  <td className='text-light'><Link to={item.embedLink}>{item.embedLink}</Link></td>
                  <td className='text-light'>{item.timestamp}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        ) : (
        <p>No data found.</p>
        )}
      </div>   
      
    </>
  )
}

export default WatchHistory