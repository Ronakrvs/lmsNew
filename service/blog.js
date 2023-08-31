import { httpClient } from "../utils/api"

export const getHomePageBlog = () => {
    return  httpClient.get(`blog`)
  }
export const getBlogsByCategory = (category) => {
    return  httpClient.get(`blog?category=${category}`)
  }
export const getBlogDetails = (id) => {
    return  httpClient.get(`blog/${id}`)
  }
export const getallBlogCategory = () => {
    return  httpClient.get(`blog/category`)
  }