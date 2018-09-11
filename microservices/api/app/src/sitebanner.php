    <div class = "row container sitebanner w3-theme-l2">
    <?php
    if(($_GET["mode"]) == "home"){
      ?>
      <div id = "sitename" class = "col-sm-0 col-xs-0 col-lg-3 col-md-3">
        <strong onclick = "goindex();">Sunshine <span style = "font-size:10px">Beta</span></strong>
      </div>
      <div id = "sitename" class = "col-sm-2 col-xs-2 col-lg-0 col-md-0">
        <strong onclick = "goindex();">S <span style = "font-size:10px">Beta</span></strong>
      </div>
      <div id = "search" ng-app = "searchApp" ng-controller = "searchCtrl"  class = "form-inline col-sm-6 col-xs-6 col-lg-6 col-md-6">
        <input ng-change = "searchUsers();" id = "searchip" ng-model = "searchip" class = "form-control" type = "text" placeholder = "Search by Name..."/>
         <!--<button id = "searchbutton" class = "btn btn-default" type = "button"><strong><i class = "fas fa-search"></i></strong></button>-->
        <ul id = "searchresults" class = "searchresults">
        </ul>
      </div>
      <div id = "userDiv" ng-app = "userApp" ng-controller = "userCtrl" class = "inline col-sm-3 col-xs-0 col-lg-3 col-md-3">
        <button type = "button" id = "user_commands" class = "user_commands btn btn-default dropdown-toggle" data-toggle = "dropdown">
        </button>
        <ul class = "dropdown-menu dpmenu dropdown-menu-right">
          <li class = "util_button"><button id = "logoutbutton" type = "button" class = "btn btn-default" ng-click="logout();">Logout</button></li>
        </ul>
      </div>
      <div id = "muserDiv" ng-app = "muserApp" ng-controller = "muserCtrl" class = "inline col-sm-4 col-xs-4 col-lg-0 col-md-0">
        <div class = "row">
          <div class = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button id = "reqbutton" ng-click = "chatPaneUp();" type = "button" class = "muser_commands btn btn-default"><i id = "chatbutton" class = "fas fa-user-plus"></i><span id = "reqcount" class="badge">{{reqcount}}</span>
            </button>
          </div>
          <div class = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button ng-click = "proPaneUp();" type = "button" id = "muser_commands" class = "muser_commands btn btn-default">
            </button>
          </div>
        </div>
      </div>
    <?php
    }
    else{
      ?>
      <div id = "sitename" class = "col-sm-12 col-xs-12 col-lg-12 col-md-12">
         <strong onclick = "goindex();">Sunshine</strong>
      </div>
      <?php
      }
    ?>
    <div class = "row container-fluid">
      <div id = "loggydiv" class="hidden alert alert-warning col-sm-12 col-xs-12 col-lg-12 col-md-12">
        <strong></strong>
      </div>
    </div>
    <div class="row">
      <div class = "container-fluid col-xs-12 col-md-12 col-sm-12 col-lg-12 ">
        <div id = "proggydiv" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </div>
  <script>
  if(window.location.href.split("sundev").length === 2 || window.location.href.split("localhost").length === 2){
      document.getElementById("sitetitle").innerHTML = "Sunshine Developers";
      console.log("Developer Mode");
  }
  else{
    console.log("User Mode");
  }
  </script>
