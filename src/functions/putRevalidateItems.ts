'use server'

import api from '@/services/server/api'
import { revalidatePath } from 'next/cache'

export async function putRevalidateItems<T = unknown>(url: string, data?: any) {
  return api
    .put<T>(url, data)
    .then((response) => {
      console.log(response.data)
      revalidatePath(url)
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data
      } else {
        console.log('Unexpected error', error)
      }
    })
}
