import React from 'react'

function PageNotFound() {
  return (
    <div className='text-center pb-5'>
        <img height={"400px"} src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" />
        <h2>Sorry, the page not found.</h2>
        <h4 style={{marginTop:'19px'}}>The link you followed probably broken or the page has been removed.</h4>
    </div>
  )
}

export default PageNotFound