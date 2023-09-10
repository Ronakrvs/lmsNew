import { httpClient } from "@/utils/api"

export const getAllCoursesList = () => {
    return  httpClient.get(`courses/all`)
  }
export const getCourseById = (id) => {
    return  httpClient.get(`courses/${id}`)
  }