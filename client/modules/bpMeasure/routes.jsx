
import React from 'react'
import { mount } from 'react-mounter'

import BPCircle from './containers/bpCircle'
import MainLayout from '../core/components/main_layout'
import BPItemList from './containers/bpItemList'
import BPCircle1 from './containers/bpCircle1'


import injectProvider from '../core/share/inject-provider'

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectProvider(injectDeps, MainLayout)
  FlowRouter.route('/bpcircle', {
    name: 'bpcircle.demo',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BPCircle />),
      })
    },
  })

  FlowRouter.route('/bpcircleFromStoryBook', {
    name: 'bpcircle.storybook',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BPCircle1 />),
      })
    },
  })

  FlowRouter.route('/bpList', {
    name: 'bpcircle.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BPItemList />),
      })
    },
  })
}
