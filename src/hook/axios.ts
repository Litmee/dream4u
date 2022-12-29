import axios from 'axios'

export function httpRequest (url: string) {
  axios.get(url).then((res) => {
    console.log(res)
  }).catch(() => {
    console.log('999')
  })
  return null
}
