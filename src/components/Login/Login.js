import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBCollapse,
  MDBContainer,
  MDBNavbarToggler,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import './Login.css';

class Login extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    return (
      <div className='classic-form-page' id='login'>
        
        <MDBView>
          <MDBMask
            className='d-flex justify-content-center align-items-center'
            overlay='stylish-strong'
          >
            <MDBContainer>
              <MDBRow>
                <MDBCol md='10' lg='6' xl='5' sm='12' className='mt-5 mx-auto'>
                  <MDBCard>
                    <MDBCardBody>
                      <div className='form-header purple-gradient'>
                        <h3>
                          <MDBIcon
                            icon='user'
                            className='mt-2 mb-2 text-white'
                          />{' '}
                          Log in:
                        </h3>
                      </div>
                      <MDBInput
                        type='text'
                        label='Your name'
                        icon='user'
                        iconClass='white-text'
                      />
                      <MDBInput
                        type='password'
                        label='Your password'
                        icon='lock'
                        iconClass='white-text'
                      />
                      <div className='text-center mt-3 black-text'>
                      <a href='/DashBoard'>
                        <MDBBtn className='purple-gradient' size='lg'>
                          Login
                        </MDBBtn>
                        </a>
                        <hr />
                      </div>
                      <div className='inline-ul text-center d-flex justify-content-center'>
                        <a href='!#'>
                          <MDBIcon
                            fab
                            icon='twitter'
                            size='lg'
                            className='p-2 m-2  white-text'
                          />
                        </a>
                        <a href='!#'>
                          <MDBIcon
                            fab
                            icon='linkedin'
                            size='lg'
                            className='p-2 m-2 white-text'
                          />{' '}
                        </a>
                        <a href='!#'>
                          <MDBIcon
                            fab
                            icon='instagram'
                            size='lg'
                            className='p-2 m-2 white-text'
                          />
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Login;
