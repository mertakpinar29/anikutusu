import React from 'react'
import moment from 'moment'

import { MdModeEdit, MdDelete } from 'react-icons/md'

import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { useDispatch } from 'react-redux'

import { deleteMemory } from '../actions/memoryActions'

const Memory = ({ memory }) => {
  const dispatch = useDispatch()
  return (
    <Card className='rounded py-3 my-3'>
      <Card.Img variant='top' src={memory.image} />
      <Card.Body>
        <Card.Title style={{ color: 'darkblue' }}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Title>
          <span style={{ color: 'darkblue' }}>Yazar:</span> {memory.creator}
        </Card.Title>
        <Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
      </Card.Body>
      <Card.Footer
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className='bg-white pb-0'
      >
        <LinkContainer
          to={`/update/${memory._id}`}
          style={{ cursor: 'pointer' }}
        >
          <MdModeEdit size={25} color='blue' />
        </LinkContainer>

        <MdDelete
          color='red'
          style={{ cursor: 'pointer' }}
          size={25}
          onClick={() => {
            dispatch(deleteMemory(memory._id))
          }}
        />
      </Card.Footer>
    </Card>
  )
}

export default Memory
