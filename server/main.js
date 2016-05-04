import { Meteor } from 'meteor/meteor';

import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initData.js';

publications();
methods();
addInitialData();

Meteor.startup(() => {
  // code to run on server at startup

});
