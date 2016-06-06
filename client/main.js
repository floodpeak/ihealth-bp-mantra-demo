import { createApp } from 'mantra-core';
import initContext from './configs/context';
import { combineReducers, createStore } from 'redux';


// modules
import coreModule from "./modules/core";
import tableDemoModule from "./modules/tableDemo";
import BPCircleModule from "./modules/BPCircle";

// init context
const context = initContext();

// create app
const app = (() => {
  const proto = createApp(context);

  // const appWithRedux = Object.create(proto, { _reducers: {} });

  const appWithRedux = Object.create(proto, {
    _reducers: {
      value: {}
    }
  });

  appWithRedux.loadModule = function (module) {
    this._checkForInit();

    // Load Redux reducers
    if (module.reducers) {
      const reducers = module.reducers;

      if (typeof reducers !== 'object') {
        const message = `Module's reducers field should be a map of reducers.`;
        throw new Error(message);
      }

      Object.assign(this._reducers, reducers);
    }

    Object.getPrototypeOf(this).loadModule(module);
  };

  appWithRedux.loadModules = function (...modules) {
    modules.forEach((m) => {
      this.loadModule(m);
    });
  };

  appWithRedux.init = function () {
    this._checkForInit();

    // Create Redux store in the context
    const reducers = this._reducers;
    if (Object.keys(reducers).length > 0) {
      const combined = combineReducers(reducers);
      this.context.ReduxStore = createStore(combined);
    }

    Object.getPrototypeOf(this).init();
  };

  return appWithRedux;
})();

// INSERT MODULE
app.loadModules(coreModule, BPCircleModule, tableDemoModule);
app.init();
