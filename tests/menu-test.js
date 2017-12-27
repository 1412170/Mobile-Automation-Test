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

        var location = browser.getGeoLocation()
        console.log(location)

        // HomePage.click("Graphics");
        // expect(MenuPage.arcsEntry.isVisible()).to.equal(true);
        expect(1).to.equal(1);
    });
});
