import request from '@/utils/request'

export default function getPreheatTasks () {
  return request({
    rul: '/task/preheatTasks',
    method: 'get'
  })
}
