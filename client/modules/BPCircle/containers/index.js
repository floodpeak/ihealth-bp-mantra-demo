import { Provider, connect } from 'react-redux';
import { useDeps, composeAll } from 'mantra-core';
import BPCircle from '../components';
import * as bpActions from '../actions';
import React from 'react';
import { bindActionCreators } from 'redux';
import { combineReducers, createStore } from 'redux';

export const depsMapper = (context, actions) => ({
  discoveryAndConnect: actions.bpConnect.discoveryAndConnect,
  startMeasure: actions.bpMeasure.startMeasure,
  context: () => context
});

const mapStateToProps = (state) => {
  return {
    bpState: state.bpState
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
    return (
      <Provider store={context().ReduxStore}>
        <Component {...nextProps}>
          {children}
        </Component>
      </Provider>
    );
  };
};

export default composeAll(
  connect(mapStateToProps, mapDispatchToProps),
  provider,
  useDeps(depsMapper)
)(BPCircle);
