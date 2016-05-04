import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow'
import AvStop from 'material-ui/lib/svg-icons/av/stop'

class MeasureBloodPressure extends React.Component{
  render(){
    return (
      <div>
        <IconButton linkButton={true} tooltip="Home" href="/">
          <ActionHome />
        </IconButton>
        <div>
          <p>We try BP Cordova Plugin here</p>
          <p><RaisedButton label="Start"  icon={<AvPlayArrow />} onMouseDown={this.startMeasure}/></p>
          <p><RaisedButton label="Stop"  icon={<AvStop />} onMouseDown={this.stopMeasure}/></p>
        </div>
      </div>
    )
  }
  startMeasure(){
    const BP3LSecret="fa8fe120a6a2551755c720b8f6e805d5"
    console.log(':)start Discovery')
		BpManagerCordova.startDiscovery(function(res){
      console.log("in callback");

			//var device = BP3L.parseJSON(res)
      console.log(res);

			// if (device.address && device.name && device.name === "BP3L") {
      //
			// 	Meteor.clearTimeout(self.discoveryTimeoutTimer)
      //
      //
			// 	//发现一个设备 停止发现
			// 	BpManagerCordova.stopDiscovery((res)=>{
			// 		console.log(res)
			// 	}, (res)=>{
			// 		console.log(res)
			// 	}, BP3L.appsecret)
      //
      //
			// 	callback(null, device)
			// }

		}, function(err){
			// callback(err)
			console.log(err);

		}, BP3LSecret)


  }
  stopMeasure(){
    const BP3LSecret="fa8fe120a6a2551755c720b8f6e805d5"
    console.log(":)stop Discovery")
    BpManagerCordova.stopDiscovery((res)=>{
							console.log(res)
						}, (err)=>{
							console.log(err)
						}, BP3LSecret)

  }
}

export default MeasureBloodPressure
