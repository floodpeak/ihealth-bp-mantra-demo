import BP3L from '../../module'

export default {

  discoveryAndConnect({}, rActions) {

    rActions.startDiscovery();

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
  },

};
