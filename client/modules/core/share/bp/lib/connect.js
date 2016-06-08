import * as utils from './common'

const Appsecret = utils.getAppsecret();

export default function startConnect(macId){

  return new Promise((resolve, reject) => {

    BpManagerCordova.connectDevice((res)=>{

      let device = utils.parseJSON(res)

      if(device && device.msg === 'Connected') {
        resolve({device, msg:'connect successful~'});
      }else if (device && device.msg === 'Error') {
        console.log(device)
        reject({errMsg: 'Can not connect to device', status: 'connect_failure'})
      }

    }, (err)=>{

      console.log('Cordvoa Error: ', err)

    }, Appsecret, macId)

  })
}
