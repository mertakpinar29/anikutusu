import express from 'express'
import mongoose from 'mongoose'

import Memory from '../db/memoryModel.js'

const router = express.Router()

//Get all memories from db

router.get('/', async (req, res) => {
  try {
    const memories = await Memory.find()

    res.status(200).json(memories)

    res.json(memories)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

//Get single memory from db

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: 'Memory id is not valid' })

    const memory = await Memory.findById(id)
    if (!memory) return

    res.status(200).json(memory)
  } catch (error) {
    res.status(404).json({ message: 'Memory not found' })
  }
})

//Create a memory

router.post('/', async (req, res) => {
  try {
    const memory = req.body

    const createdMemory = await Memory.create(memory)

    res.status(201).json(createdMemory)
  } catch (error) {
    console.log(error.message)
    res.json({ message: 'Create memory failed' })
  }
})

//Update a memory

router.put('/:id', async (req, res) => {
  res.json({ message: 'update a memory' })
})

//Update a memory

router.delete('/:id', async (req, res) => {
  res.json({ message: 'delete a memory' })
})

export default router
