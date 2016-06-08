import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import HomePage from './components/homepage'
import MeasureBloodPressure from './components/measure_blood_pressure'
import TableDemoCont from '../tableDemo/containers/tableCont.jsx'

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
  });

  FlowRouter.route('/table',{
    name:'tableDemo',
    action(){
      mount(MainLayoutCtx,{
        content:()=>(<TableDemoCont bgColor='white'/>)
      })
    }
  })
}
