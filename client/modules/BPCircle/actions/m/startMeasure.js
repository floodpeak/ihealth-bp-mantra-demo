import BP3L from '../../module'

export default {

  startMeasure({Meteor}, rActions, device) {

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


  },

};
