import {BPMeasures} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'bpMeasure.insert'(hp, lp, ht) {
      console.log("--------")
      check(hp, Number);
      check(lp, Number);
      check(ht, Number);

      const createdAt = new Date();
      BPMeasures.insert({ht, hp, lp, createdAt});
    }
  });
}
