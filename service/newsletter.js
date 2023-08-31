import { httpClient } from "@/utils/api"

export const onSubscribeNewsletter = (obj) => {
    return  httpClient.post('/newsletter', {email:obj})
  }