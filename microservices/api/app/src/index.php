<body id = "body" class = "w3-theme-l3">
  <?php
  if($_GET['mode'] === "login" || $_GET['mode'] === "signup" || $_GET['mode'] === "setup" || explode(";",$_GET['mode'])[0] === "otp" || $_GET['mode'] === "resetpassword"){
    require_once 'headerprereq.php';
    require_once 'sitebanner.php';
    require_once 'sunshine.php';
    require_once 'footerprereq.php';
  }
  else if($_GET['mode'] === "home"){
    require_once 'home.php';
  }
?>
<script>
  if(!location.search.split('mode=')[1]){
      window.location = "/?mode=login";
  }
  if(location.search.split('mode=')[1] === "signup"){
    signupFormUp();
  }
  if(location.search.split('mode=')[1].split(";")[0] === "otp"){
    otpBootUp();
    if(location.search.split('mode=')[1].split(";")[1]!= null && location.search.split('mode=')[1].split(";")[1]!= "undefined" && location.search.split('mode=')[1].split(";")[1]!= "")
    {document.getElementById("otp").value = location.search.split('mode=')[1].split(";")[1];}
  }
  if(location.search.split('mode=')[1] === "resetpassword"){
    resetPwdFormUp();
  }
  if(location.search.split('mode=')[1] === "login"){
    loginFormUp();
      if(checkCookie('auth_token') == 1){
      gohome();
    }
  }
  if(location.search.split('mode=')[1] === "setup"){
    proupFormUp();
  }
</script>
</body>
