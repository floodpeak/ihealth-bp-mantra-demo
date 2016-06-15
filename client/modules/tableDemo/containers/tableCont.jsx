import {
  useDeps, composeWithTracker, composeAll,
} from 'mantra-core'
import Component from '../components/tableDemoComp.jsx'

export const composer = ({ context, clearErrors, bgColor = 'white' }, onData) => {
  const { Meteor, Collections } = context()
  if (Meteor.subscribe('tableDemoData').ready()) {
    // const options = {
    //  sort: {createdAt: -1}
    // };
    const records = Collections.tableDemoColl.find({}).fetch()
    onData(null, { records })
  } else {
    onData()
  }
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component)
