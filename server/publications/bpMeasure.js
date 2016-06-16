import { Meteor } from 'meteor/meteor'
import { BPMeasures } from '/lib/collections'

export default function () {
  Meteor.publish('bpList', () =>
    BPMeasures.find({})
  )}
