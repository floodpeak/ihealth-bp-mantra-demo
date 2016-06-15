import * as utils from './common'
const Appsecret = utils.getAppsecret()

export default function discovery() {

  return new Promise((resolve, reject) => {

    let deviceDiscovered

    BpManagerCordova.startDiscovery((res)=>{

      let device = utils.parseJSON(res)

      if (device.msg == "Discovery") {

				if(!deviceDiscovered){

					deviceDiscovered = device

					BpManagerCordova.stopDiscovery((res)=>{
						console.log(res)
					}, (res)=>{
						console.log(res)
					}, Appsecret)
				}
      }else if (device.msg == "DiscoveryDone") {

        if(deviceDiscovered){
          resolve({deviceDiscovered, msg: 'searching successful~'});
				}else{
          reject({errMsg: 'timeout', status: 'searching_failure'});
				}
      }
    },(err) =>{
      console.log('Cordova Error: ', err);
    }, Appsecret)
  })
}
