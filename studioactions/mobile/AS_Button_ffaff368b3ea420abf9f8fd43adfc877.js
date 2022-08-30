function AS_Button_ffaff368b3ea420abf9f8fd43adfc877(eventobject) {
    var self = this;

    function SHOW_ALERT_h58c6a1f5cc1402991a21a0938373e28_True() {
        var ntf = new voltmx.mvc.Navigation("frmTodolistTableList");
        ntf.navigate();
    }
    function SHOW_ALERT_e0aba2aa51394634a814326109762aad_True() {}
    function INVOKE_IDENTITY_SERVICE_f73881904ca84a1e8e489f5bdbe3a317_Success(response) {
        voltmx.application.dismissLoadingScreen();

        function SHOW_ALERT_h58c6a1f5cc1402991a21a0938373e28_Callback() {
            SHOW_ALERT_h58c6a1f5cc1402991a21a0938373e28_True();
        }
        voltmx.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": null,
            "noLabel": null,
            "alertIcon": null,
            "message": "You have successfully logged in.",
            "alertHandler": SHOW_ALERT_h58c6a1f5cc1402991a21a0938373e28_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
    function INVOKE_IDENTITY_SERVICE_f73881904ca84a1e8e489f5bdbe3a317_Failure(error) {
        voltmx.application.dismissLoadingScreen();

        function SHOW_ALERT_e0aba2aa51394634a814326109762aad_Callback() {
            SHOW_ALERT_e0aba2aa51394634a814326109762aad_True();
        }
        voltmx.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": null,
            "noLabel": null,
            "alertIcon": null,
            "message": "Login failed. Please try again.",
            "alertHandler": SHOW_ALERT_e0aba2aa51394634a814326109762aad_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
    voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    if (login_inputparam == undefined) {
        var login_inputparam = {};
    }
    login_inputparam["serviceID"] = "userlogin$login";
    login_inputparam["operation"] = "login";
    login_inputparam["userid"] = self.view.tbxuserid.text;
    login_inputparam["password"] = self.view.tbxpassword.text;
    userlogin$login = mfidentityserviceinvoker("userlogin", login_inputparam, INVOKE_IDENTITY_SERVICE_f73881904ca84a1e8e489f5bdbe3a317_Success, INVOKE_IDENTITY_SERVICE_f73881904ca84a1e8e489f5bdbe3a317_Failure);
}