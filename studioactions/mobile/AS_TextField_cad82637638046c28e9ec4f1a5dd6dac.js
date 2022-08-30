function AS_TextField_cad82637638046c28e9ec4f1a5dd6dac(eventobject, changedtext) {
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