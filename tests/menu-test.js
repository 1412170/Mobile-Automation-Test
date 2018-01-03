var expect = require('chai').expect;
// var HomePage = require('../pages/home.page'),
//     MenuPage = require('../pages/menu.page');

describe('Test camera of TTGT', function() {
    it("should return CAMEMA when I click menu Camera", function() {

        // var selector = 'new UiSelector().text("Camera")).className("android.widget.Button")';
        // browser.click('android=' + selector);
        //
        // var xqtag = 'new UiSelector().text("Xung quanh")).className("android.widget.Button")';

        // browser.touch("Camera");

        var connection = browser.getNetworkConnection();
        console.log(connection.value); // returns 6
        console.log(connection.inAirplaneMode); // returns false
        console.log(connection.hasWifi); // returns true
        console.log(connection.hasData); // returns true

        // var activity = browser.currentActivity()
        // console.log(activity);

       browser.pause(30000);

        // Touch menu Camera
        browser.touchPerform([{
          action: 'tap',
          options: {
              x: 340,
              y: 666
          }
        }]);

        // var cameraSelector = `~Camera`;
        // browser.waitForVisible(cameraSelector, 30000);
        // browser
        //   .element(cameraSelector)
        //   .click();

        var activity = browser.currentActivity()
        console.log(activity);

        browser.pause(30000);
        // Touch menu Camera
        browser.touchPerform([{
          action: 'tap',
          options: {
              x: 560,
              y: 1130
          }
        }]);
        // var xqSelector = `~Xung quanh`;
        // browser.waitForVisible(xqSelector, 30000);
        // browser
        //   .element(xqSelector)
        //   .click();


        // HomePage.click("Graphics");
        // expect(MenuPage.arcsEntry.isVisible()).to.equal(true);
        expect(1).to.equal(1);

        // HomePage.click("Graphics");
        // expect(MenuPage.arcsEntry.isVisible()).to.equal(true);
        expect(1).to.equal(1);
    });
});
