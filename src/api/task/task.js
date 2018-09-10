import request from '@/utils/request'

<<<<<<< HEAD
export default function getPreheatTasks () {
  return request({
    rul: '/task/preheatTasks',
=======
export function getPreheatTasks () {
  return request({
    url: '/task/preheatTasks',
    method: 'get'
  })
}

export function getPublishTasks () {
  return request({
    url: '/task/publishTasks',
>>>>>>> 83b072bc705c2cc351085f3bde51ca5ce9fa0468
    method: 'get'
  })
}
