import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='primary' className='p-3'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='fs-1 fw-bolder text-light'>
          {/* <img
              alt=""
              src="https://i.gifer.com/origin/78/78adb1ece0a0aa57bb42f8f022c6164f_w200.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            <i class="fa-solid fa-cloud-arrow-up me-2"></i>
            Media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header