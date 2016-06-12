import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/bpCircle.jsx';
import * as bpActions from '../actions/rActions/bpCircle';
import { bindActionCreators } from 'redux';
import {Provider,connect} from 'react-redux'
import React from 'react'


export const depsMapper = (context, actions) => ({
  ...actions.bpCircle,
  context: () => context
});

const mapStateToProps = (state) => {
  return {
    bpState: state.bpCircle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(bpActions, dispatch)
  };
};

const provider = (Component) => {
  return (props) => {
    const {context, children, ...nextProps} = props;
    console.log(context().store.getState());

    return (
      <div >
        <Component {...nextProps}>
          {children}
        </Component>
      </div>
    );
  };
};

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
  connect(mapStateToProps,mapDispatchToProps),
  // provider,
  useDeps(depsMapper)
)(Component);
