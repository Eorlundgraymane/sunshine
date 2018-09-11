
  <div class = "bodyrow  container">
    <div ng-app = "loginApp" ng-controller = "loginCtrl" id = "logindiv" class = "col-sm-12 col-xs-12 col-lg-12 col-md-12">
      <form  ng-submit = "login()" name = "loginForm" id = "loginform">
        <legend align = "center"><strong>Log In</strong></legend>
        <div class = "col-sm-12 col-xs-12 col-lg-12 col-md-12 form-group">
          <label for = "cc">Country Code</label>
          <input placeholder= "Country Code"ng-model = "user.cc"  ng-required = "true" type = "text" maxlength="3" class = "form-control" id ="cc">
          <label for = "pkey">Mobile</label>
          <input placeholder= "Mobile"ng-model = "user.primarykey" ng-required = "true" type = "text" class = "form-control" id ="pkey">
          <label for = "loginpwd">Password:</label>
          <input ng-model = "user.password" ng-required = "true" type = "password" class = "form-control" id ="loginpwd"><br>
        <!--<div class = "checkbox">
          <label><input type = "checkbox"><strong>Remember me</strong></input></label>
        </div>-->
        <button id = "loginbutton" type = "submit" class = "btn btn-default"><strong>Log In</strong></button>
        <button ng-click = "pwdReset();"id = "resetpwd" type = "button" class = "btn btn-warning"><strong>Forgot Password</strong></button><br><br>
        <button onclick = "goSignUp();" type = "button" class = "btn btn-primary"><strong>Sign Up / OTP</strong></button>
        </div>
      </form>
    </div>
    <div ng-app = "resetPwdApp" ng-controller = "resetPwdCtrl" id = "resetFormDiv" class = "col-sm-12 col-xs-12 col-lg-12 col-md-12">
      <form  ng-submit = "reset()" name = "resetForm" id = "resetForm">
        <legend align = "center"><strong>Reset Password</strong></legend>
        <div class = "col-sm-12 col-xs-12 col-lg-12 col-md-12 form-group">
          <label for = "resetcc">Country Code*:</label>
          <input placeholder= "Counry Code Without + or 0 in front" ng-model = "resetuser.resetcc" ng-required = "true" value = "" type = "text" maxlength = "3" class = "form-control" id ="resetcc">
          <label for = "resetmobile">Mobile*:</label>
          <input placeholder= "Mobile" ng-model = "resetuser.resetmobile" ng-required = "true" value = "" type = "text" class = "form-control" id ="resetmobile">
          <label for = "resetotp">OTP*:</label>
          <input placeholder= "OTP" ng-model = "resetuser.resetotp" ng-required = "true" value = "" type = "text" class = "form-control" id ="resetotp">
          <label for = "resetnewpwd">New Password*:</label>
          <input ng-model = "resetuser.password" ng-required = "true" type = "password" class = "form-control" id ="resetnewpwd">
          <label for = "cnfresetnewpwd">Confirm New Password*:</label><span id = "resetpwdmatch" class = "hidden label label-danger">Passwords don't match</span>
          <input ng-change = "cmprpwd();" ng-model= "resetuser.cnfpassword" ng-required = "true" type = "password" class = "form-control" id ="cnfresetnewpwd"><br>
        <!--<div class = "checkbox">
          <label><input type = "checkbox"><strong>Remember me</strong></input></label>
        </div>-->
          <button id = "rstpwdbtn" type = "submit" class = "btn btn-warning"><strong>Reset Password</strong></button>
        </div>
      </form>
    </div>
    <div ng-app = "signupApp" ng-controller = "signupCtrl" id = "signupdiv" class = "col-sm-12 col-xs-12 col-lg-12 col-md-12">
        <form class = "hidden" ng-submit = "signup()" name = "signupForm" id = "signupform">
          <button onclick = "goindex();" type = "button" class = "btn btn-danger"><strong>Back</strong></button>
          <button onclick = "goOTP();" type = "button" class = "btn btn-primary"><strong>OTP Verify / Resend</strong></button>
          <legend align = "center"><strong>Sign Up</strong></legend>
          <div class = "col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
            <label for = "newcc">Country Code</label>
            <input placeholder= "Country Code"ng-model = "newuser.cc"  ng-required = "true" type = "text" maxlength="3" class = "form-control" id ="newcc">
            <label for = "mobile">Mobile*:</label>
            <input ng-model = "newuser.mobile" ng-required = "true" type = "text" class = "form-control" id ="mobile" placeholder="Mobile">
            <label for = "pwd">Password*:</label>
            <input ng-model = "newuser.password" ng-required = "true" type = "password" class = "form-control" id ="pwd">
            <label for = "cnfpwd">Confirm Password*:</label><span id = "pwdmatch" class = "hidden label label-danger">Passwords don't match</span>
            <input ng-change = "cmprpwd();" ng-model= "newuser.cnfpassword" ng-required = "true" type = "password" class = "form-control" id ="cnfpwd"><br>
            <button id= "signupbutton" type = "submit" class = "btn btn-default"><strong>Sign Up</strong></button><br><br>
          </div>
        </form>
        <form class = "hidden" ng-submit = "otpsubmit()" name = "otpForm" id = "otpForm">
          <button id = "cancelotpbutton" type = "button" onclick = "goSignUp()" class = "btn btn-danger"><strong>Back</strong></button>
          <legend align = "center"><strong>OTP</strong></legend>
          <div class = "form-group">
            <label for = "vercc">Country Code</label>
            <input placeholder= "Country Code"ng-model = "newuser.vericc"  ng-required = "true" type = "text" maxlength="3" class = "form-control" id ="vercc">
            <label for = "otp">Enter Mobile No:</label>
            <input ng-model = "newuser.verimobile" minlength= "10" ng-required = "true" type = "number" class = "form-control" id = "verify_mobile" placeholder="Mobile"><br>
            <label for = "otp">Enter OTP:</label>
            <input ng-model = "newuser.otp" ng-required = "true" type = "text" class = "form-control" id = "otp" placeholder="OTP"><br>
            <button id = "verifybutton" type = "submit" class = "btn btn-primary"><strong>Verify OTP</strong></button>
            <button style = "float:right;" id = "resendbutton" type = "button" ng-click = "resendotp()" class = "btn btn-warning"><strong>Resend OTP</strong></button>
          </div>
        </form>
    </div>
    <div ng-app = "profileApp" ng-controller = "profileCtrl" id = "proupdiv" class = "col-sm-12 col-xs-12 col-lg-12 col-md-12">
      <form class = "hidden" ng-submit = "userSetup(newuser)" name = "proupForm" id = "proupform">
        <button id = "prologoutbutton" ng-click = "logout();" type = "button" class = "btn btn-danger"><strong>Logout</strong>(Setup Later)</button>
        <legend align = "center"><strong>Profile</strong></legend>
        <label for = "first">First Name*:</label>
        <input ng-model = "newuser.firstname" ng-required = "true" type = "text" class = "form-control" id ="first" placeholder="First Name">
        <label for = "last">Last Name*:</label>
        <input ng-model = "newuser.lastname" ng-required = "true" type = "text" class = "form-control" id ="last" placeholder="Surname">
        <label for = "uname">Username*:</label>
        <input ng-model = "newuser.username" ng-required = "true" type = "text" class = "form-control" id ="uname" placeholder="Username">
        <label for = "dob">Date of Birth*:</label>
        <span id = "datevalid" class = "hidden label label-danger">Invalid Date</span>
        <div name = "dob">
          <select ng-change = "showdate();" ng-model = "newuser.day" ng-required = "true">
            <option ng-repeat="d in days">{{d}}</option>
          </select>
          <select ng-change = "showdate();" ng-model = "newuser.month" ng-required = "true">
            <option ng-repeat="m in monthnames" value = "{{m.num}}">{{m.nam}}</option>
          </select>
          <select ng-change = "showdate();" ng-model = "newuser.year" ng-required = "true">
            <option ng-repeat="y in years">{{y}}</option>
          </select>
        </div><br>
        <button id = "proupbutton" type = "submit" class = "btn btn-default">Setup Profile</button>
      </form>
    </div>
  </div>
