import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function getUserProject(params) {
  return request({
    url: `${cdnPrefix}/user_project/`,
    method: 'get',
    params
  })
}

export function getUserProjectList(params) {
  return request({
    url: `${cdnPrefix}/user_project/list_user_projects/`,
    method: 'get',
    params
  })
}

export function createUserProject(data) {
  return request({
    url: `${cdnPrefix}/user_project/set_project/`,
    method: 'post',
    data
  })
}

export function deleteProject(params) {
  return request({
    url: `${cdnPrefix}/user_project/del_project/`,
    method: 'delete',
    data: params
  })
}

// 用户信息
export function getUserInfo(params) {
  return request({
    url: `${cdnPrefix}/user_project/user_info/`,
    method: 'get',
    data: params
  })
}
