import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {BPMeasures} from '/lib/collections';

export default function () {
  console.log("publish functio called");
  Meteor.publish('bpList', function () {

    return BPMeasures.find({});
  });
}
