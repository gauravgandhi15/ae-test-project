exports.config = {

  specs: [
    './test/spec/Demo.e2e.js'
  ],
 
  maxInstances: 10,
  
  capabilities: [{
   
    maxInstances: 5,
    //
    browserName: 'chrome' // options: chrome || firefox || phantomjs
  }],

  sync: true,
 
  logLevel: 'verbose',
 
  coloredLogs: true,
 
  screenshotPath: './errorShots/', 
  baseUrl: 'http://localhost',
  waitforTimeout: 60000,  
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  
  services: ['selenium-standalone'],
 
  framework: 'mocha',
 
  reporters: ['spec'],
 
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register'],
	 timeout: 60000
    //require: ['./test/helpers/common.js']
  },
  
  before: function (capabilities, specs) {  
    var chai = require('chai')  
    global.fetch = require('node-fetch')

    chai.config.includeStack = true
    global.expect = chai.expect
    global.AssertionError = chai.AssertionError
    global.Assertion = chai.Assertion
    global.assert = chai.assert
    chai.Should()
  }
  
}