import { createStore, combineReducers, compose } from 'redux'
import { createApp } from 'mantra-core'
import initContext from './configs/context'
// INSERT IMPORT

// modules
import coreModule from './modules/core'
import bpMeasureModule from './modules/bpMeasure'
import tableDemoModule from './modules/tableDemo'


const reducer = combineReducers({
  ...coreModule.reducers,
  ...bpMeasureModule.reducers,
})


const reduxStore = function configureStore() {
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}

// init context
const context = initContext(reduxStore())

// create app
const app = createApp(context)
// INSERT MODULE
app.loadModule(coreModule)
app.loadModule(bpMeasureModule)
app.loadModule(tableDemoModule)
app.init()
