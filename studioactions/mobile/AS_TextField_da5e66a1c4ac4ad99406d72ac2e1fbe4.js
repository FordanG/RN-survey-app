function AS_TextField_da5e66a1c4ac4ad99406d72ac2e1fbe4(eventobject, changedtext) {
    var self = this;
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.FlxLine6Pin6.skin = "FlxLineNormal";
        }, null);
    } else {
        (function() {
            self.view.FlxLine6Pin6.skin = "FlxLineNormal";
        })();
    }
}