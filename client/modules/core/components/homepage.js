import React from 'react'
import Avatar from 'material-ui/lib/avatar';
import RaisedButton from 'material-ui/lib/raised-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';

// import Button from 'BPCircle';
// import BPCircle from 'BPCircle/components/bpCircle'


const HomePage = ({})=> (
      <div>
        Hey, Kevin<Avatar src="https://avatars3.githubusercontent.com/u/1761809?v=3&s=460" />, Let's
        <RaisedButton label="fly" /> from here. <br/>Yes, I am flying with you now

        <List>
          <ListItem primaryText="Measure Blood Pressure" leftIcon={<ContentInbox />} href="/mbp"/>
          <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        </List>

        
        {/*<BPCircle />*/}
      </div>
    )


export default HomePage
