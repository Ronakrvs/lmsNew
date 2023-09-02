import { httpClient } from "@/utils/api"

export const getAllCoursesList = () => {
    return  httpClient.get(`courses/all`)
  }