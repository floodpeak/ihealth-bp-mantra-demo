import * as utils from './common'
const { BpManagerCordova } = global
const Appsecret = utils.getAppsecret()

export default function startConnect(macId) {

  return new Promise((resolve, reject) => {

    BpManagerCordova.connectDevice((res) => {

      const device = utils.parseJSON(res)

      if (device && device.msg === 'Connected') {
        resolve({ device, msg: 'connect successful~' })
      } else if (device && device.msg === 'Error') {
        reject({ errMsg: 'Can not connect to device', status: 'connect_failure' })
      }
    }, (err) => {

      console.error('Cordvoa Error: ', err)

    }, Appsecret, macId)
  })
}
