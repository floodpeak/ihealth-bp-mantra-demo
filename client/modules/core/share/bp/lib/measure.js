
import * as utils from './common'

const Appsecret = utils.getAppsecret()

export default function startMeasure(macId, measureDoingCB) {


  return new Promise((resolve, reject) =>{

    BpManagerCordova.startMeasure((res)=>{

      const device = utils.parseJSON(res);

      if(device && device.msg == 'MeasureDoing') {

        // change the state outside
        measureDoingCB(device);

      }else if(device && device.msg == 'MeasureDone') {
        resolve({msg: 'MeasureDone', device });
      }else if(device && device.msg=='Error'){
  		  reject({errMsg: 'Measure failure', status:'measure_failure'})
  		}

    }, (err)=> {

      reject(err);
      console.log('Cordvoa Error: ', err)

    }, Appsecret, macId)
  })

}
