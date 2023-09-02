import { httpClient } from "@/utils/api"

export const getAllExamList = () => {
    return  httpClient.get(`exams/all`)
  }