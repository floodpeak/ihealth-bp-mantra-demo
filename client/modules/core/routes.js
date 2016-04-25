import React from 'react';
import {mount} from 'react-mounter';
import RaisedButton from 'material-ui/lib/raised-button';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

import MainLayout from './components/main_layout.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'hello.world',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div>
            Hey, Kevin<Avatar src="https://avatars3.githubusercontent.com/u/1761809?v=3&s=460" />, Let's
            <RaisedButton label="fly" /> from here. <br/>Yes, I am flying with you now

            <List>
              <ListItem primaryText="Measure Blood Pressure" leftIcon={<ContentInbox />} />
              <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            </List>
          </div>
      )
      });
    }
  });
}
