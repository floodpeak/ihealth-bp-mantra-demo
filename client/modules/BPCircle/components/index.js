import React, { PropTypes, Component } from 'react'

const MAP_STATUS = {
  'disconnect': '点击搜索血压计',
  'searching': '正在搜索血压计',
  'searching_failure': '未找到设备',
  'connecting': '正在连接血压计',
  'ready': '开始测量',
  'connect_failure': '血压计连接失败，请重试',
  'measuring': '血压指数',
  'measureDone': '测量完成'
}

class BPCircle extends Component {

  constructor(props, context) {
    super(props, context);
  }

  getStyle() {
    return {
      circle: {
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        border: '1px solid gray',
        background: '#4078c0'
      }
    };
  }

  renderStatus() {

    const { bpState } = this.props;
    const statusText = {
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: '200px'
    }

    return <div style={{...statusText}}>
      {MAP_STATUS[bpState.status]} {bpState.measureValue ? bpState.measureValue : null}
    </div>

  }

  render() {

    const styles = this.getStyle();
    const { bpState, actions, discoveryAndConnect, startMeasure } = this.props;

    // const BP3LSecret="fa8fe120a6a2551755c720b8f6e805d5"
    // const startDiscovery = ()=>{
    //   actions.startDiscovery()
    //   BpManagerCordova.startDiscovery(function(res){
    //     console.log(res);
    //   }, (err)=>{
    //     console.log(err);
    //   }, BP3LSecret)
    // }
    //
    const stopDiscovery = (bpStatus)=>{
      console.log("======")
      actions.stopDiscovery();
      BpManagerCordova.stopDiscovery(function(res){
        console.log(res);
      }, (err)=>{
        console.log(err);
      }, BP3LSecret)
    }

    const connect = () =>{
      discoveryAndConnect(actions);
    }

    const startMeasureWrrap = ()=> {
      console.log(bpState.device);
      startMeasure(actions, bpState.device)
    }


    const bpHanderClick = {
      disconnect: connect,
      searching_failure: connect,
      searching: stopDiscovery,
      ready: startMeasureWrrap,
      measureDone: startMeasureWrrap
    };

    return <div style={styles.circle} onClick={bpHanderClick[bpState.status]}>
      {this.renderStatus()}
    </div>
  }

}


BPCircle.propTypes = {
  bpState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default BPCircle
