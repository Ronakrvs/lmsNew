import { httpClient } from "@/utils/api"

export const getAllSubjectList = () => {
    return  httpClient.get(`subject/all`)
  }
export const getSubjectById = (id) => {
    return  httpClient.get(`subject/${id}`)
  }