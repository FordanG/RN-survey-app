function AS_TextField_ed3cc3bd502a43ac8bec81f0f489819e(eventobject, changedtext) {
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