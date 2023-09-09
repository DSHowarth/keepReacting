import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';

const AppNavbar = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Navbar layout */}
      <Navbar>
        <Container fluid>
          <Nav.Brand as={Link} to='/'>
            Temporary Title: Keep Talking
          </Nav.Brand>
          <Nav>
            <Nav.Link as={Link} to='/score'>Scores</Nav.Link>
            {Auth.loggedIn() ? (
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Modal Layout */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            {/* Choose between Login and Signup Form */}
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

    </>
  )
}

export default AppNavbar;