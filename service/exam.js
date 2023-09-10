import { httpClient } from "@/utils/api"

export const getAllExamList = () => {
    return  httpClient.get(`exams/all`)
  }
export const getExamById = (id) => {
    return  httpClient.get(`exams/${id}`)
  }