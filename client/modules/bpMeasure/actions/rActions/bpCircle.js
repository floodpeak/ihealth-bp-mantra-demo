import * as types from '../../constants/bpCircle'

export function startDiscovery() {
  return {
    type: types.START_DISCOVERY,
  }
}

export function discoveryFailure() {
  return {
    type: types.DISCOVERY_FAILURE,
  }
}

export function startConnect() {
  return {
    type: types.START_CONNECT,
  }
}

export function connectSuccess(device = {}) {
  return {
    type: types.CONNECT_SUCCESS,
    device,
  }
}

export function connectFailure() {
  return {
    type: types.CONNECT_FAILURE,
  }
}

export function disConnect() {
  return {
    type: types.DISCONNECT,
  }
}

export function stopDiscovery() {
  return {
    type: types.STOP_DISCOVERY,
  }
}

export function startMeasure(measureValue = 0) {
  return {
    type: types.START_MEASURE,
    measureValue,
  }
}

export function measureDone(measureValue = 0) {
  return {
    type: types.MEASURE_DONE,
    measureValue,
  }
}
