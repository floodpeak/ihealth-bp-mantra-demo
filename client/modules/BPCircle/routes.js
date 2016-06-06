import React from 'react';
import {mount} from 'react-mounter';

import BPCircle from './containers';
import MainLayout from '../core/components/main_layout';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/bpcircle', {
    name: 'bpcircle.demo',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BPCircle />)
      });
    }
  });
}
