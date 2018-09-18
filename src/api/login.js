import request from '@/utils/request'

export function login (code) {
  return request({
    url: '/wechater/login',
    method: 'post',
    data: {
      code
    }
  })
}
export function logincode (code) {
  return request({
    url: '/wechater/code',
    method: 'post',
    data: {
      code
    }
  })
}
