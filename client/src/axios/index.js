import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchMemories = async () => await API.get('/memories')

export const fetchMemory = async (id) => await API.get(`/memories/${id}`)

export const createMemory = async (newMemory) =>
  await API.post('/memories', newMemory)

export const updateMemory = async (id, updatedMemory) =>
  await API.put(`/memories/${id}`, updatedMemory)

export const deleteMemory = async (id) => await API.delete(`/memories/${id}`)

export const signUp = async (formData) =>
  await API.post('/users/signup', formData)
