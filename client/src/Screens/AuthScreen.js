import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AuthScreen = () => {
  const [login, setLogin] = useState(true)
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6}>
            {login ? (
              <Form className='align-content-center mt-3'>
                <h1 className='text-center mb-3'>Giriş yap</h1>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email adresinizi girin'
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Şifrenizi girin'
                  ></Form.Control>
                </Form.Group>

                <Button block type='submit'>
                  Giriş yap
                </Button>

                <Form.Text as='large' className='text-center mt-2'>
                  Henüz bir hesabın yok mu?{' '}
                  <span
                    onClick={(e) => setLogin(!login)}
                    style={{ fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    Hesap oluştur
                  </span>
                </Form.Text>
              </Form>
            ) : (
              <Form className='align-content-center mt-3'>
                <h1 className='text-center mb-3'>Kayıt ol</h1>

                <Form.Group style={{ display: 'flex' }}>
                  <Form.Control
                    type='text'
                    placeholder='İlk adınız'
                    className='mr-2'
                  ></Form.Control>

                  <Form.Control
                    type='text'
                    placeholder='Soy adınız'
                    className='ml-2'
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email adresinizi girin'
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Şifrenizi girin'
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Şifrenizi doğrulayın</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Şifrenizi doğrulayın'
                  ></Form.Control>
                </Form.Group>

                <Button block type='submit'>
                  Kayıt ol
                </Button>

                <Form.Text as='large' className='text-center mt-2'>
                  Zaten bir hesabınız var mı?{' '}
                  <span
                    onClick={(e) => setLogin(!false)}
                    style={{ fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    Giriş yapın
                  </span>
                </Form.Text>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AuthScreen
