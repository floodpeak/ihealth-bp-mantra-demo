import * as utils from './common'
const { BpManagerCordova } = global
const Appsecret = utils.getAppsecret()

export default function discovery() {

  return new Promise((resolve, reject) => {

    let deviceDiscovered

    BpManagerCordova.startDiscovery((res) => {

      const device = utils.parseJSON(res)

      if (device.msg === 'Discovery') {
        if (!deviceDiscovered) {
          deviceDiscovered = device
          BpManagerCordova.stopDiscovery(() => {
            // console.log(res)
          }, (err) => {
            console.error(err)
          }, Appsecret)
        }
      } else if (device.msg === 'DiscoveryDone') {
        if (deviceDiscovered) {
          resolve({ deviceDiscovered, msg: 'searching successful~' })
        } else {
          reject({ errMsg: 'timeout', status: 'searching_failure' })
        }
      }
    }, (err) => {
      console.error(`Cordova Error: ${err}`)
    }, Appsecret)
  })
}
