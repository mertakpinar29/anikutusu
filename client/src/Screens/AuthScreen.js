import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'

import { useDispatch, useSelector } from 'react-redux'
import { signup, signin } from '../actions/userActions.js'

const AuthScreen = ({ history }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const userState = useSelector((state) => state.user)
  const { error } = userState

  const [form, setForm] = useState(initialFormData)
  const [login, setLogin] = useState(true)

  const dispatch = useDispatch()

  const googleSuccess = (res) => {
    const user = res?.profileObj
    const accessToken = res?.tokenId
    const googleLogin = 'google'

    try {
      dispatch({ type: 'AUTH', payload: { user, accessToken, googleLogin } })

      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (err) => {
    console.log(err)
  }
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6}>
            {login ? (
              <Form
                onSubmit={(e) => {
                  e.preventDefault()

                  if (login) {
                    dispatch(signin(form, history))
                  }
                }}
                className='align-content-center mt-3'
              >
                <h1 className='text-center mb-3'>Giriş yap</h1>
                {error && <Message>{error}</Message>}

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email adresinizi girin'
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Şifrenizi girin'
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                <Button block type='submit'>
                  Giriş yap
                </Button>

                <GoogleLogin
                  clientId='51344977623-ol7jrbhpcpf4kbvb4vdhpvqs7uq6cofi.apps.googleusercontent.com'
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      block
                      variant='info'
                    >
                      <FcGoogle size={22} className='text-center mr-2' />
                      Google hesabınız ile giriş yapın
                    </Button>
                  )}
                />

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
              <Form
                onSubmit={(e) => {
                  e.preventDefault()

                  if (!login) {
                    dispatch(signup(form, history))
                  }
                }}
                className='align-content-center mt-3'
              >
                <h1 className='text-center mb-3'>Kayıt ol</h1>
                {error && <Message>{error}</Message>}

                <Form.Group style={{ display: 'flex' }}>
                  <Form.Control
                    type='text'
                    placeholder='İlk adınız'
                    className='mr-2'
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                  ></Form.Control>

                  <Form.Control
                    type='text'
                    placeholder='Soy adınız'
                    className='ml-2'
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email adresinizi girin'
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Şifrenizi girin'
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Şifrenizi doğrulayın</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Şifrenizi doğrulayın'
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
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
