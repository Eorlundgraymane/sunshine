<?php
require_once 'headerprereq.php';
require_once 'sitebanner.php';
require_once 'content.php';
require_once 'footerprereq.php';
date_default_timezone_set("UTC");
?>
<script>
  if(window.location.href.split("sundev").length === 2 || window.location.href.split("localhost").length === 2){
      document.getElementById("sitetitle").innerHTML = "Sunshine Developers";
      console.log("Developer Mode");
  }
  if(checkCookie('auth_token') === 0){
    alert("Please log in first");
    clearCookies();
  }
</script>
