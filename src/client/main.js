import {createApp} from 'mantra-core';
import tableDemoModule from "./modules/tableDemo";
import initContext from './configs/context';
// INSERT IMPORT

// modules
import coreModule from "./modules/core";

// init context
const context = initContext();

// create app
const app = createApp(context);
// INSERT MODULE
app.loadModule(coreModule);
app.loadModule(tableDemoModule);
app.init();
