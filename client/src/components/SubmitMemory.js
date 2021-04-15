import React, { useState } from 'react'
import ReactFileBase64 from 'react-file-base64'

import { Form, Button } from 'react-bootstrap'

import * as api from '../axios/index.js'

const SubmitMemory = () => {
  const [memoryData, setMemoryData] = useState({
    title: '',
    content: '',
    creator: '',
    image: '',
  })

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()

          api.createMemory(memoryData)
        }}
      >
        <Form.Group>
          <h1>Bir anı yarat</h1>
        </Form.Group>

        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            name='title'
            type='text'
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Yazar</Form.Label>
          <Form.Control
            name='author'
            type='text'
            onChange={(e) =>
              setMemoryData({ ...memoryData, creator: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Anınız</Form.Label>
          <Form.Control
            name='content'
            type='text'
            as='textarea'
            rows={3}
            onChange={(e) =>
              setMemoryData({ ...memoryData, content: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <ReactFileBase64
            type='file'
            multiple={false}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 })
            }}
          />
        </Form.Group>

        <Button type='submit' block>
          Gönder
        </Button>
      </Form>
    </>
  )
}

export default SubmitMemory
