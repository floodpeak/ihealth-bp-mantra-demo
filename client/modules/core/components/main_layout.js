import React from 'react'
import { Provider } from 'react-redux'

import store from '../../../configs/reduxContext'

const Layout = ({ content = () => null }) => (
  <Provider store={store()}>
    <div>
      <header>
      <h1>iHealth BP Mantra Demo</h1>
      </header>
      <div>
      {content()}
      </div>
      <footer>
      <small>Built with <a href="/">Home</a> &amp;</small>
      </footer>
    </div>
  </Provider>
)

export default Layout
