export const START_DISCOVERY = 'START_DISCOVERY'
export const STOP_DISCOVERY = 'STOP_DISCOVERY'
export const DISCOVERY_DONE = 'DISCOVERY_DONE'
export const DISCOVERY_FAILURE = 'DISCOVERY_FAILURE'

export const START_CONNECT = 'START_CONNECT'
export const CONNECT_SUCCESS = 'CONNECT_SUCCESS'
export const CONNECT_FAILURE = 'CONNECT_FAILURE'
export const DISCONNECT = 'DISCONNECT'
export const START_MEASURE = 'START_MEASURE'
export const STOP_MEASURE = 'STOP_MEASURE'
export const MEASURE_DONE = 'MEASURE_DONE'

export const MAP_STATUS = {
  disconnect: '点击搜索血压计',
  searching: '正在搜索血压计',
  searching_failure: '未找到设备',
  connecting: '正在连接血压计',
  ready: '开始测量',
  connect_failure: '血压计连接失败，请重试',
  measuring: '血压指数',
  measureDone: '测量完成',
}
