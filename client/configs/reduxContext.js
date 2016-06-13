/**
 * Created by walter on 16/6/12.
 */
import { createStore, combineReducers, compose } from 'redux';
import initContext from './context';

import coreModule from "../modules/core";
import bpMeasureModule from "../modules/bpMeasure";
import tableDemoModule from "../modules/tableDemo";

const reducer = combineReducers({
  ...coreModule.reducers,
  ...bpMeasureModule.reducers
});


const reduxStore = function configureStore() {
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
// init context
export default reduxStore