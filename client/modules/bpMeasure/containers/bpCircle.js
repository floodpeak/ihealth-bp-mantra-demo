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

  onData(null, { bpState: bpCircle });

  return ReduxStore.subscribe(()=>{
    console.log("subscribe trigger");
    const { bpCircle } = ReduxStore.getState()
    onData(null, { bpState: bpCircle });
  })
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
