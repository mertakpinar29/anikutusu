import axios from 'axios'

const API = axios.create({
  baseURL: 'https://ani-kutusu.herokuapp.com',
  withCredentials: true,
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).accessToken
    }`
  }
  return req
})

export const fetchMemories = async () => await API.get('/memories')

export const fetchMemory = async (id) => await API.get(`/memories/${id}`)

export const createMemory = async (newMemory) =>
  await API.post('/memories', newMemory)

export const updateMemory = async (id, updatedMemory) =>
  await API.put(`/memories/${id}`, updatedMemory)

export const deleteMemory = async (id) => await API.delete(`/memories/${id}`)

export const signUp = async (formData) =>
  await API.post('/users/signup', formData)

export const signIn = async (formData) =>
  await API.post('/users/signin', formData)

export const logOut = async (id) => await API.get(`/users/logout/${id}`)

export const refreshAccessToken = async (userId) =>
  await API.get(`/users/refresh/${userId}`)
