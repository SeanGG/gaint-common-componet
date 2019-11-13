import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function getPriceRule(params) {
  return request({
    url: `${cdnPrefix}/price_rule/`,
    method: 'get',
    params
  })
}

export function createPriceRule(data) {
  return request({
    url: `${cdnPrefix}/price_rule/`,
    method: 'post',
    data
  })
}

export function updatePriceRule(data) {
  const { id } = data
  delete data.id
  return request({
    url: `${cdnPrefix}/price_rule/${id}/`,
    method: 'put',
    data
  })
}

export function deletePriceRule(id) {
  return request({
    url: `${cdnPrefix}/price_rule/${id}/`,
    method: 'delete'
  })
}

// 编辑默认单价
export function createDefaultPrice(data) {
  return request({
    url: `${cdnPrefix}/price_rule/set_default_price/`,
    method: 'post',
    data
  })
}

// 获取默认单价
export function getDefaultPrice(params) {
  return request({
    url: `${cdnPrefix}/price_rule/get_default_price/`,
    method: 'get',
    params
  })
}