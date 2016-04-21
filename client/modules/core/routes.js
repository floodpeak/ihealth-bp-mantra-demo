import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'hello.world',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div>
            Hey, Kevin, Let's fly from here
          </div>
      )
      });
    }
  });
}
