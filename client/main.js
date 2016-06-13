import { createStore, combineReducers, compose } from 'redux';
import {createApp} from 'mantra-core';
import initContext from './configs/context';
import reduxStore from './configs/reduxContext'
// INSERT IMPORT

// modules
import coreModule from "./modules/core";
import bpMeasureModule from "./modules/bpMeasure";
import tableDemoModule from "./modules/tableDemo";

// init context
// const context = initContext(reduxStore());  //尝试抛弃mantra传递redux store
const context = initContext()

// create app
const app = createApp(context);
// INSERT MODULE
app.loadModule(coreModule);
app.loadModule(bpMeasureModule);
app.loadModule(tableDemoModule);
app.init();
