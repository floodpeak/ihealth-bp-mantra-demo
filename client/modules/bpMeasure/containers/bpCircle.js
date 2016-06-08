import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/bpCircle.jsx';


export const depsMapper = (context, actions) => ({
  ...actions.bpCircle,
  context: () => context
});

export const composer = ({ context }, onData) => {
  const { ReduxStore } = context();
  const { bpCircle } = ReduxStore.getState()

  // TODO: unsubscribe
  const unsubscribe = ReduxStore.subscribe(()=>{
    console.log("=====");
    const { bpCircle } = ReduxStore.getState()
    onData(null, { bpState: bpCircle });
  })

  onData(null, { bpState: bpCircle });
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
