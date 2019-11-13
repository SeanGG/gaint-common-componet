import request from '@/utils/request'
import {
  staticApi,
} from '@/api/apilist'

// 头部导航列表
export function queryNavMenu() {
  let path = '/catalog/menu-d.json'
  const {
    NODE_ENV = null
  } = process.env;
  if (NODE_ENV === 'production') {
    path = '/catalog/menu-p.json'
  }
  return request({
    url: `${staticApi}${path}`,
    method: 'get',
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
}
