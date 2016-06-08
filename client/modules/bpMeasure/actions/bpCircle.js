import BP3L from '../../core/share/bp'
import * as rActions from './rActions/bpCircle'

export default {

  discoveryAndConnect({ ReduxStore }) {

    console.log(ReduxStore);
    console.log(rActions, BP3L)
    ReduxStore.dispatch(rActions.startDiscovery())


    // BP3L.startDiscovery().then((result)=>{
    //
    //   console.log(result, 'discovery success')
    //
    //   rActions.startConnect();
    //
    //   return BP3L.startConnect(result && result.deviceDiscovered.address);
    //
    // }).then((result)=>{
    //
    //   console.log(result, 'Connect success')
    //   rActions.connectSuccess(result.device);
    // })
    // .catch((err)=>{
    //   console.log(`Error: ${err}`);
    //   console.log(err);
    //   if(err.status === 'search_failure') {
    //     rActions.discoveryFailure();
    //   }else {
    //     rActions.connectFailure();
    //   }
    // })
  },
  startMeasure({ Meteor, ReduxStore }) {

    rActions.startMeasure();

    const measuring = (device)=>{
      console.log(device, 'Measuring');
      rActions.startMeasure(device && device.pressure);
    }

    BP3L.startMeasure(device.address, measuring).then((result)=>{
      console.log(result, 'Measure Done')

      rActions.measureDone(0);

      let hp = result && result.device.highpressure;
      let lp = result && result.device.lowpressure;
      let ht = result && result.device.heartrate;

      console.log(Meteor, hp, lp, ht)
      Meteor.call('bpMeasure.insert', hp, lp, ht);

    }).catch((err)=>{
      console.log(err, 'Measure Error')
    })


  }
};
