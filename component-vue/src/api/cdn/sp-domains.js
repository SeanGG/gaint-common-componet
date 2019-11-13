import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function getSpDomains() {
  return request({
    url: `${cdnPrefix}/sp_domains/`,
    method: 'get'
  })
}

export function syncInfo(data) {
  return request({
    url: `${cdnPrefix}/sp_domains/sync_info/`,
    method: 'post',
    data
  })
}
