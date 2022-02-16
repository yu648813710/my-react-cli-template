import http from './http'
import { getRechargeTableDataUrl } from './url'

export const getRechargeTableData = (params) => http(getRechargeTableDataUrl, {
  method: 'GET',
  params,
})
