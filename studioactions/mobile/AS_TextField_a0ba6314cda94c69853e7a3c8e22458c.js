function AS_TextField_a0ba6314cda94c69853e7a3c8e22458c(eventobject, changedtext) {
    var self = this;
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.FlxLine6Pin6.skin = "FlxLineHighlight";
        }, null);
    } else {
        (function() {
            self.view.FlxLine6Pin6.skin = "FlxLineHighlight";
        })();
    }
}