import {
  useDeps, composeAll,
} from 'mantra-core'
import Component from '../components/bpCircle.jsx'
import * as bpActions from '../actions/rActions/bpCircle'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MAP_STATUS } from '../constants/bpCircle'

// ***************************
// 组件调用mAction的时候
// 需要传入dispatch和需要用到的rState
// ***************************

export const depsMapper = (context, actions) => ({
  ...actions.bpCircle,
  context: () => context,
})

const mapStateToProps = (state) => ({
  bpState: state.bpCircle,
  bpText: MAP_STATUS[state.bpCircle.status],
})

const mapDispatchToProps = (dispatch) => ({
  rActions: bindActionCreators(bpActions, dispatch),
})


// ***************************
// 载入Meteor Data使用composer
// 并且在props 中获得
// ***************************

// export const composer = ({ context }, onData) => {
//   const { store } = context();
//   const { bpCircle } = store.getState()
//
//   onData(null, { bpState: bpCircle });
//
//   return store.subscribe(()=>{
//     console.log("subscribe trigger");
//     const { bpCircle } = store.getState()
//     onData(null, { bpState: bpCircle });
//   })
// };

export default composeAll(
  // composeWithTracker(composer),
  connect(mapStateToProps, mapDispatchToProps),
  useDeps(depsMapper)
)(Component)
