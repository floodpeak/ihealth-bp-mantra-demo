import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow'

const MeasureBloodPressure = ({})=>(
  <div>
    <IconButton linkButton={true} tooltip="Home" href="/">
      <ActionHome />
    </IconButton>
    <div>
      <p>We try BP Cordova Plugin here</p>
      <RaisedButton label="Start"  icon={<AvPlayArrow />} onClick={console.log("message")}/>
    </div>
  </div>
)

export default MeasureBloodPressure
