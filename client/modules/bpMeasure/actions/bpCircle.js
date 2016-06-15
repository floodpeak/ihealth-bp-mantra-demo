import BP3L from '../../core/share/bp'

const discoveryAndConnect = ({ Store }, rActions) => {
  // rActions come from Component

  rActions.startDiscovery()

  BP3L.startDiscovery().then((result) => {
    rActions.startConnect()

    return BP3L.startConnect(result && result.deviceDiscovered.address)
  })
  .then((result) => {
    rActions.connectSuccess(result.device)
  })
  .catch((err) => {
    if (err.status === 'search_failure') {
      rActions.discoveryFailure()
    } else {
      rActions.connectFailure()
    }
  })
}

const startMeasure = ({ Meteor, Store }, rActions) => {
  const { device } = Store.getState().bpCircle

  rActions.startMeasure()

  const measuring = (MeasuringInfo) => {
    rActions.startMeasure(MeasuringInfo && MeasuringInfo.pressure)
  }

  BP3L.startMeasure(device.address, measuring).then((result) => {
    rActions.measureDone(0)

    const hp = result && result.device.highpressure
    const lp = result && result.device.lowpressure
    const ht = result && result.device.heartrate

    Meteor.call('bpMeasure.insert', hp, lp, ht)
  }).catch((err) => {
    console.log(err, 'Measure Error')
  })
}

export default {

  bpEventsHandler(context, rActions) {
    const bpMapper = {
      disconnect: discoveryAndConnect,
      searching_failure: discoveryAndConnect,
      ready: startMeasure,
      measureDone: startMeasure,
    }
    const { Store } = context
    const status = Store.getState().bpCircle.status
    if (bpMapper[status]) {
      bpMapper[status](context, rActions)
    }
  },
}
