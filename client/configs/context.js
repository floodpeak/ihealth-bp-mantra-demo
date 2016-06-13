import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';

export default function (Store) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Store,
  };
}
