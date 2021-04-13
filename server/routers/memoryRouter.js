import express from 'express'

const router = express.Router()

//Get all memories from db

router.get('/', async (req, res) => {
  res.json({ message: 'get all memories from database' })
})

//Get single memory from db

router.get('/:id', async (req, res) => {
  res.json({ message: 'get single memory from database' })
})

//Create a memory

router.post('/', async (req, res) => {
  res.json({ message: 'create a memory' })
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
