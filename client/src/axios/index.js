import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const createMemory = async (newMemory) => {
  await API.post('/memories', newMemory)
}
