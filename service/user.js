import { httpClient } from "../utils/api"

export const registerNewUser = (obj) => {
  return  httpClient.post('/user/register', obj)
}
export const forgetPassword = (obj) => {
  return  httpClient.post('/user/forgotpassword', obj)
}
export const loginUser = (obj) => {
  return  httpClient.post('/user/login', obj)
}
export const getUser = () => {
  return  httpClient.get('user/allusers')
}
export const getUserById = (id) => {
  return  httpClient.get(`user/${id}`)
}

export const updateUser = (field) => {
  return  httpClient.put(`user/update-profile`,field)
}
export const deleteUser = (id) => {
  return  httpClient.delete(`user/${id}`)
}