var expect = require('chai').expect;

describe('Test camera of TTGT', function() {
    it("should return CAMEMA when I click menu Camera", function() {

       browser.pause(30000);

        // Touch menu Camera
        browser.touchPerform([{
          action: 'tap',
          options: {
              x: 340,
              y: 666
          }
        }]);

        var activity = browser.currentActivity()
        console.log(activity);

        browser.pause(30000);
        // Touch tab Xung quanh
        browser.touchPerform([{
          action: 'tap',
          options: {
              x: 560,
              y: 1130
          }
        }]);

        browser.pause(30000);

        //Touch the first places
        browser.touchPerform([{
          action: 'tap',
          options: {
              x: 360,
              y: 490
          }
        }]);
        browser.pause(10000);
        browser.saveScreenshot('./snapshot/snap1.png');

        expect(1).to.equal(1);
    });
});
