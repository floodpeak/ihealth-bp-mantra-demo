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
    // DATA
    const { bpState, actions, dispatch } = this.props;

    // Mantra Actions
    const { discoveryAndConnect, startMeasure } = this.props;

    // const startMeasureWrrap = ()=> {
    //
    //   startMeasure(bpState.device)
    // }

    const bpMapper = {
      disconnect: discoveryAndConnect,
      searching_failure: discoveryAndConnect,
      ready: startMeasure,
      measureDone: startMeasure
    };

    const mActionMapper = (bpState) => {
      bpState in ['disconnect','searching_failure'] ? discoveryAndConnect() : startMeasure()
    }

    // Todo: 根据现有bpState切换onClick功能,并传递参数给mAction
    return <div style={styles.circle} onClick={() => discoveryAndConnect({store: {bpState},dispatch})}>
      {this.renderStatus()}
    </div>
  }
}


BPCircle.propTypes = {
  bpState: PropTypes.object.isRequired
}

export default BPCircle
