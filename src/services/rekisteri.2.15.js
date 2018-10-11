import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Osa2 tehtävä
// 2.15 puhelinluettelo osa 8

const getAll = () => {
  return axios.get(baseUrl)
}

const getAllPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, getAllPersons, create, update }