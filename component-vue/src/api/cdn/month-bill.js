import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function getMonthBill(params) {
  return request({
    url: `${cdnPrefix}/month_bill/`,
    method: 'get',
    params
  })
}

// 生成费用
export function calcMonthBill(data) {
  return request({
    url: `${cdnPrefix}/month_bill/calc_money/`,
    method: 'post',
    data
  })
}

// 生成账单
export function createMonthBill(data) {
  return request({
    url: `${cdnPrefix}/month_bill/total_month/`,
    method: 'post',
    data
  })
}

// 总账单
export function getBill(params) {
  return request({
    url: `${cdnPrefix}/month_bill/billing/`,
    method: 'get',
    params
  })
}

// 账单走势
export function getBillTrend(params) {
  return request({
    url: `${cdnPrefix}/month_bill/billing_chart/`,
    method: 'get',
    params
  })
}

// 账单详情走势
export function getBillDetailTrend(params) {
  return request({
    url: `${cdnPrefix}/month_bill/billing_detail_chart/`,
    method: 'get',
    params
  })
}
