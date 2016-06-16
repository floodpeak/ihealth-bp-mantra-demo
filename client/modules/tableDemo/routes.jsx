import React from 'react'
import { mount } from 'react-mounter'

import MainLayout from './components/tableDemoComp.jsx'


export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/table', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />),
      })
    },
  })
}
