import BP3L from '../../core/share/bp'
import * as rActions from './rActions/bpCircle'

export default {

  discoveryAndConnect({ ReduxStore }) {

    const { dispatch } = ReduxStore;

    dispatch(rActions.startDiscovery())

    // BP3L.startDiscovery().then((result)=>{
    //
    //   console.log(result, 'discovery success')
    //
    //   dispatch(rActions.startConnect());
    //
    //   return BP3L.startConnect(result && result.deviceDiscovered.address);
    //
    // }).then((result)=>{
    //
    //   console.log(result, 'Connect success')
    //   dispatch(rActions.connectSuccess(result.device));
    // })
    // .catch((err)=>{
    //   console.log(`Error: ${err}`);
    //   console.log(err);
    //   if(err.status === 'search_failure') {
    //     dispatch(rActions.discoveryFailure());
    //   }else {
    //     dispatch(rActions.connectFailure());
    //   }
    // })
  },
  startMeasure({ Meteor, ReduxStore }) {

    const { dispatch } = ReduxStore;

    const { device } = ReduxStore.getState().bpCircle;

    dispatch(rActions.startMeasure());

    const measuring = (MeasuringInfo)=>{
      console.log(MeasuringInfo, 'Measuring');
      dispatch(rActions.startMeasure(MeasuringInfo && MeasuringInfo.pressure));
    }

    BP3L.startMeasure(device.address, measuring).then((result)=>{
      console.log(result, 'Measure Done')

      dispatch(rActions.measureDone(0));

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
