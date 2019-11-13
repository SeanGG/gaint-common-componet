import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function getRefreshHistory(params) {
  return request({
    url: `${cdnPrefix}/history/`,
    method: 'get',
    params
  })
}

export function getOneHistorys(id) {
  return request({
    url: `${cdnPrefix}/history/${id}/`,
    method: 'get'
  })
}
