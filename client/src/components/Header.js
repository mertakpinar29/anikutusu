import React from 'react'

import { Navbar, Nav, Button } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

import { FcEditImage } from 'react-icons/fc'
import { AiOutlineLogin } from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>Anı Kutusu</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <LinkContainer to='/create'>
              <Nav.Link>
                <Button variant='outline-info'>
                  <FcEditImage className='mr-2' size={20} />
                  Bir anı paylaş
                </Button>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/auth'>
              <Nav.Link>
                <Button variant='outline-light'>
                  <AiOutlineLogin size={20} className='mr-2' />
                  Giriş yap
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
