import React, { PropTypes, Component } from 'react'

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

    const { bpText } = this.props;
    const statusText = {
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: '200px'
    }

    return <div style={{...statusText}}>
      {/*{MAP_STATUS[bpState.status]} {bpState.measureValue ? bpState.measureValue : null}*/}
      { bpText }
    </div>

  }

  render() {
    const styles = this.getStyle();
    // DATA
    const { bpState, rActions } = this.props;

    // Mantra Actions
    const { bpEventsHandler} = this.props;




    // Todo: 根据现有bpState切换onClick功能,并传递参数给mAction
    return <div style={styles.circle} onClick={()=>bpEventsHandler(rActions)}>
      {this.renderStatus()}
    </div>
  }
}


BPCircle.propTypes = {
  bpState: PropTypes.object.isRequired
}

export default BPCircle
