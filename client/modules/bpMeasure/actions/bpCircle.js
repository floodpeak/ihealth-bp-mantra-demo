import BP3L from '../../core/share/bp'

const discoveryAndConnect = ({ Store }, rActions) => {
  // rActions come from Component

  rActions.startDiscovery()

  BP3L.startDiscovery().then((result)=>{

    console.log(result, 'discovery success')

    rActions.startConnect();

    return BP3L.startConnect(result && result.deviceDiscovered.address);

  }).then((result)=>{

    console.log(result, 'Connect success')
    rActions.connectSuccess(result.device);
  })
  .catch((err)=>{
    console.log(`Error: ${err}`);
    console.log(err);
    if(err.status === 'search_failure') {
      rActions.discoveryFailure();
    }else {
      rActions.connectFailure();
    }
  })
}

const startMeasure = ({ Meteor, Store },rActions) => {


  const { device } = Store.getState().bpCircle;

  rActions.startMeasure();

  const measuring = (MeasuringInfo)=>{
    rActions.startMeasure(MeasuringInfo && MeasuringInfo.pressure);
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

export default {

  bpEventsHandler(context,rActions){

    const bpMapper = {
      disconnect: discoveryAndConnect,
      searching_failure: discoveryAndConnect,
      ready: startMeasure,
      measureDone: startMeasure
    };
    const {Store} = context
    const status = Store.getState().bpCircle.status
    bpMapper[status] && bpMapper[status](context,rActions)
  }
};
