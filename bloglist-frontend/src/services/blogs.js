import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
  console.log(token)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  }


  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const setLikes = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  }

  let url = baseUrl + "/" + id
  console.log("This is the url", url)

  const response = await axios.put(url, newObject, config)
  return response.data
}

const deleteBlog = async (id) => {

  const config = {
    headers: { Authorization: token }
  }

  let url = baseUrl + "/" + id
  console.log("This is the url", url)

  const response = await axios.delete(url, config)
  console.log(response)
}

// eslint-disable-next-line 
export default { setToken, getAll, create, setLikes, deleteBlog }