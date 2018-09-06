import request from '@/utils/request'

export function getPreheatTasks () {
  return request({
    url: '/task/preheatTasks',
    method: 'get'
  })
}

export function getPublishTasks () {
  return request({
    url: '/task/publishTasks',
    method: 'get'
  })
}
