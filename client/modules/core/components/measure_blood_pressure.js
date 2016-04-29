import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow'

class MeasureBloodPressure extends React.Component{
  render(){
    return (
      <div>
        <IconButton linkButton={true} tooltip="Home" href="/">
          <ActionHome />
        </IconButton>
        <div>
          <p>We try BP Cordova Plugin here</p>
          <RaisedButton label="Start"  icon={<AvPlayArrow />} onMouseDown={this.startMeasure}/>
        </div>
      </div>
    )
  }
  startMeasure(){
    console.log("message");

  }
}

export default MeasureBloodPressure
