// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.ihealthlabs.bp.mantra.demo.android',
  // id: 'com.ihealthlabs.bp.mantra.demo.ios',
  name: 'iHealth',
  description: 'iHealth BP Mantra Demo',
  author: 'iHealthLabs',
  website: 'http://www.ihealthlabs.com.cn',
  version: '0.0.1',
  buildNumber: '1'
})

App.accessRule('*');
// App.accessRule("blob:*");
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#008CE0');
App.setPreference('orientation', 'portrait');
App.setPreference('SplashScreenDelay', 15);

App.configurePlugin('com.ihealth.plugin.bp.bpmanagercordova', {
  APP_ID: '2015042803',
  API_KEY: 'supersecretapikey',
  APP_NAME: 'BpManagerCordova'
});
