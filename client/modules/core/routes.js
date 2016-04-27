import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import HomePage from './components/homepage'
import MeasureBloodPressure from './components/measure_blood_pressure'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'homepage',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomePage />)
      });
    }
  });

  FlowRouter.route('/mbp',{
    name:'measureBloodPressure',
    action(){
      mount(MainLayoutCtx,{
        content:()=>(<MeasureBloodPressure />)
      })
    }
  })
}
