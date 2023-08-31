import { httpClient } from "@/utils/api"

export const onContactUsSubmit = (obj) => {
    return  httpClient.post('/newsletter', {email:obj})
  }