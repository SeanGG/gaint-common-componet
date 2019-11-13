import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function getSp(params) {
  return request({
    url: `${cdnPrefix}/sp/`,
    method: 'get',
    params
  })
}
