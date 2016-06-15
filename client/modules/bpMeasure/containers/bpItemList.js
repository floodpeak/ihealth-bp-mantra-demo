import {
  useDeps, composeWithTracker, composeAll,
} from 'mantra-core'

import Component from '../components/bpItemList.jsx'


export const composer = ({ context, clearErrors }, onData) => {
  const { Meteor, Collections } = context()
  if (Meteor.subscribe('bpList').ready()) {

    const BPMeasures = Collections.BPMeasures.find().fetch()
    onData(null, { BPMeasures })
  } else {
    onData()
  }

  return clearErrors
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component)
