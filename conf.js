var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
 
  multiCapabilities: [{
    //browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './tests/reports'
        })
      );
}}