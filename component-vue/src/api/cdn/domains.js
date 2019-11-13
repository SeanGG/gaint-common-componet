import request from '@/utils/request'
import { cdnPrefix } from './apilist'

export function fileRefresh(data) {
  return request({
    url: `${cdnPrefix}/domains/purge_file/`,
    method: 'post',
    data
  })
}

export function dirRefresh(data) {
  return request({
    url: `${cdnPrefix}/domains/purge_dir/`,
    method: 'post',
    data
  })
}

export function cacheRefresh(data) {
  return request({
    url: `${cdnPrefix}/domains/preload/`,
    method: 'post',
    data
  })
}

export function getDomains(params) {
  return request({
    url: `${cdnPrefix}/domains/`,
    method: 'get',
    params
  })
}

export function getDomainById(id) {
  return request({
    url: `${cdnPrefix}/domains/${id}/`,
    method: 'get'
  })
}

export function createDomain(data) {
  return request({
    url: `${cdnPrefix}/domains/`,
    method: 'post',
    data
  })
}

export function updateDomain(data) {
  const { id } = data
  return request({
    url: `${cdnPrefix}/domains/${id}/`,
    method: 'put',
    data
  })
}

export function deleteDomain(id) {
  return request({
    url: `${cdnPrefix}/domains/${id}/`,
    method: 'delete'
  })
}

// 获取带宽
export function getBandWidth(params) {
  return request({
    url: `${cdnPrefix}/domains/bandwidth/`,
    method: 'get',
    params
  })
}

// 获取命中率率
export function getHitRate(params) {
  return request({
    url: `${cdnPrefix}/domains/hit_rate/`,
    method: 'get',
    params
  })
}

// 获取流量
export function getTraffic(params) {
  return request({
    url: `${cdnPrefix}/domains/traffic/`,
    method: 'get',
    params
  })
}

// 获取请求数
export function getRequestNum(params) {
  return request({
    url: `${cdnPrefix}/domains/request_num/`,
    method: 'get',
    params
  })
}

// 获取TOP url
export function getTopUrl(params) {
  return request({
    url: `${cdnPrefix}/domains/top_url/`,
    method: 'get',
    params
  })
}

// 日志下载
export function getLogPage(params) {
  return request({
    url: `${cdnPrefix}/domains/log_page/`,
    method: 'get',
    params
  })
}

// 批量给域名设置项目
export function setDomainProject(data) {
  return request({
    url: `${cdnPrefix}/domains/set_project/`,
    method: 'post',
    data
  })
}

// 扩充运营商
export function addDomainSp(data) {
  return request({
    url: `${cdnPrefix}/domains/add_sp/`,
    method: 'post',
    data
  })
}

