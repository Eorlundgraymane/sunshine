
<div class = 'fullscreen' id = 'fullscreen'>
</div>
<div id = "newspane" class = "container" >
  <div id = "upperrow" class = "row">
      <div id = "userProfileDiv" ng-app = "userProfileApp" ng-controller = "userProfileCtrl" class= "profileDiv col-xs-0 col-md-3 col-lg-3 col-sm-3">
        <div class = 'img-wrapper'>
          <img id = "profilepic" class = 'profilepic' src = "">
          <div id = "editbutton" class = 'image-upload settings img-overlay'>
            <label title = "Update Profile Picture" id = "labelnewdp" for="newdp">
              <i class="attach-doc fa fa-edit fa-2x" aria-hidden="true"></i>
            </label>
            <input class = "hidden form-control" id = "newdp" type = "file" accept = "image/jpeg,image/x-png" onchange="angular.element(this).scope().deleteDP()" ng-model = "newdp"/>
         </div>
       </div>
      <div id = "userinfo"></div>
      <div id = "followAppDiv" class = "spanel col-xs-0 col-md-12 col-lg-12 col-sm-12">
        <div id = "suggesthead" class = "alert alert-info"><strong>Friend Suggestions <span class = "badge suggests">{{sugcount}}</span></strong></div>
        <ul id = "followlist">
          {{searchlist}}
        </ul>
      </div>
      </div>
      <div id = "newsAppDiv" ng-app = "newsApp" ng-controller = "newsCtrl">
        <div class = "col-xs-12 col-md-6 col-lg-6 col-sm-6">
          <div class = "row">
            <div id = "postpanel" class = "ppanel col-xs-12 col-md-12 col-lg-12 col-sm-12">
              <input id = "newposttext" type = "text" class = "form-control" ng-change = "readyPost()" ng-model = "newposttext" placeholder = "Post...">
              <label title = "Upload Image" class = "btn btn-primary" id = "attach" for="newpostimg">
                <i class="attach-doc fas fa-camera" aria-hidden="true"></i>
              </label>
              <span id = "cancelbadge" class = "badge hidden" onclick = "angular.element(this).scope().cancelUpload()">X</span><img id = "cancelupbtn" class = "hidden upthumb" src = ''>
              <input class = "hidden form-control" id = "newpostimg" type = "file" accept = "image/jpeg,image/x-png" onchange="angular.element(this).scope().uploadPostImg()" ng-model = "newpostimg"/>
              <button id = "sendpostbtn" type = "button" onclick = "angular.element(this).scope().addPost()" class = "btn hidden btn-primary"><strong>Post</strong></button>
            </div>
          </div>
          <div class = "row">
            <div id = "newspanel" class = "npanel col-xs-12 col-md-12 col-lg-12 col-sm-12">
                <ul id = "newsfeed">

                </ul>
            </div>
          </div>
        </div>
      </div>
      <div id = "shinetable" ng-app = "shineTableApp" ng-controller = "shineTableCtrl" class = "col-xs-0 col-md-3 col-lg-3 col-sm-3">
        <div class = "row">
          <div class = "bordered col-xs-8 col-md-8 col-lg-8 col-sm-8">
            <table class = "table shinetable" id = "table">
              <thead><caption><strong>Shine Score</strong></caption></thead>
              <tr class = "row">
                <th class = "col-xs-0 col-md-1 col-lg-1 col-sm-1"><span id = "hshinelabel" title = 'Shine Points gained by gettings Health shines on your posts' class = "label shinelabel label-danger">{{hshine}}</span></th>
                <td  class = "col-xs-0 col-md-11 col-lg-11 col-sm-11">
                  <div class = "row">
                    <div class = "container-fluid col-xs-12 col-md-12 col-sm-12 col-lg-12 ">
                      <div id = "healthprog" class="shineprog progress-bar progress-bar-danger active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class = "row">
                <th class = "col-xs-0 col-md-1 col-lg-1 col-sm-1"><span id = "eshinelabel"  title = 'Shine Points gained by gettings Earth shines on your posts' class = "label shinelabel label-success">{{eshine}}</span></th>
                <td  class = "col-xs-0 col-md-11 col-lg-11 col-sm-11">
                  <div class = "row">
                    <div class = "container-fluid col-xs-12 col-md-12 col-sm-12 col-lg-12 ">
                      <div id = "earthprog" class="shineprog progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class = "row">
                <th class = "col-xs-0 col-md-1 col-lg-1 col-sm-1"><span id = "cshinelabel"  title = 'Shine Points gained by gettings Charity shines on your posts' class = "label shinelabel label-warning">{{cshine}}</span></th>
                <td  class = "col-xs-0 col-md-11 col-lg-11 col-sm-11">
                  <div class = "row">
                    <div class = "container-fluid col-xs-12 col-md-12 col-sm-12 col-lg-12 ">
                      <div id = "charityprog" class="shineprog progress-bar progress-bar-warning active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class = "row">
                <th class = "col-xs-0 col-md-1 col-lg-1 col-sm-1"><span id = "sshinelabel"  title = 'Shine Points gained by gettings Social shines on your posts' class = "label shinelabel label-primary">{{sshine}}</span></th>
                <td  class = "col-xs-0 col-md-11 col-lg-11 col-sm-11">
                  <div class = "row">
                    <div class = "container-fluid col-xs-12 col-md-12 col-sm-12 col-lg-12 ">
                      <div id = "socialprog" class="shineprog progress-bar progress-bar-primary active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div id = "giftboxdiv" class = "bordered col-xs-0 col-md-4 col-lg-4 col-sm-4">
            <ul id = "giftbox">
            </ul>
          </div>
          <div id = "chatApp" class = "hidden col-xs-0 col-md-8 col-lg-8 col-sm-0">
            <button class = "btn btn-danger" ng-click = "chatClose()">X</button>
            <div id = 'chathead' class = "alert alert-info"><strong>Chat App </strong></div>
            <div onload = "scrollChat()" id = "chatbox" class = "alert alert-info">
              <ul id = "chatlog"></ul>
            </div>
            <form onsubmit="angular.element(this).scope().sendChat(document.getElementById('chattext').value,document.getElementById('chatrecid').value);">
              <div class = "form-group">
                <input type = "text" hidden id = "chatrecid"/>
                <input autocomplete="off" ng-required = "true" type = "text" class = "form-control" id = "chattext" placeholder = "Enter message..."/>
                <button id = "sendchat" type = "submit" class = "btn btn-primary">Send</button>
              </div>
            </form>
          </div>
          <div id = "chatlist" class = "spanel col-xs-0 col-md-12 col-lg-12 col-sm-0">
            <div id = "friendshead" class = "alert alert-info"><strong>Friends & Chat <span class = "badge online">{{oncount}}</span></strong></div>
            <ul id = "userlist">
              <div class = "alert alert-info"><i class = "fa fa-spinner fa-spin"></i> <strong>Loading...</strong></div>
            </ul>
          </div>
        </div>
      </div>
  </div>
  <div class = "row">

  <video hidden id = "popwav" preload = "auto" src = "pop.wav"></video>
  <!--<div ng-app = "userProfileApp" ng-controller = "userProfileCtrl" id = "userProfileDiv" class="alert alert-info profile col-xs-12 col-sm-12 col-lg-12 col-md-12">

  </div>
  <div class = "jumbotron update col-xs-12 col-md-12 col-lg-12 col-sm-12">
    <strong>More Coming Soon....</strong>
  </div>-->
  </div>
</div>
<div ng-app = "mchatApp" ng-controller = "mchatCtrl" id = "mchatApp" class = "hidden col-xs-8 col-md-0 col-lg-0 col-sm-8">
  <button class = "btn btn-danger" ng-click = "chatClose()">X</button>
  <div id = 'mchathead' class = "alert alert-info"><strong>MChat App </strong></div>
  <div onload = "scrollChat()" id = "mchatbox" class = "alert alert-info">
    <ul id = "mchatlog"></ul>
  </div>
  <form onsubmit="angular.element(this).scope().sendChat(document.getElementById('mchattext').value,document.getElementById('mchatrecid').value);">
    <div class = "form-group">
      <input type = "text" hidden id = "mchatrecid"/>
      <input autocomplete="off" ng-required = "true" type = "text" class = "form-control" id = "mchattext" placeholder = "Enter message..."/>
      <button id = "msendchat" type = "submit" class = "btn btn-primary">Send</button>
    </div>
  </form>
</div>
<div ng-app = "mchatListApp" ng-controller = "mchatListCtrl" id = "mchatlist" class = "hidden spanel col-xs-12 col-md-0 col-lg-0 col-sm-12">
  <div id = 'mfriendshead' class = "alert alert-info"><strong>Friends & Chat <span class = "badge">{{oncount}}</span></strong></div>
  <ul id = "muserlist">
    <div class = "alert alert-info"><i class = "fa fa-spinner fa-spin"></i> <strong>Loading...</strong></div>
  </ul>
</div>
<div class = "row">
  <div id = "mshinetable" ng-app = "mshineTableApp" ng-controller = "mshineTableCtrl" class = " bordered hidden col-xs-12 col-sm-12 col-lg-0 col-md-12">
    <div class = "row">
      <div class = "col-xs-9 col-md-0 col-lg-0 col-sm-9">
        <table class = "table shinetable" id = "table">
          <thead><caption><strong>Shine Score</strong></caption></thead>
          <tr class = "row">
            <th class = "col-xs-1 col-md-1 col-lg-0 col-sm-1"><span class = "label shinelabel label-danger">{{hshine}}</span></th>
            <td  class = "col-xs-11 col-md-11 col-lg-0 col-sm-11">
              <div id = "hshine" class="shineprog progress-bar progress-bar-danger active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </td>
          </tr>
          <tr class = "row">
            <th class = "col-xs-1 col-md-1 col-lg-0 col-sm-1"><span class = "label shinelabel label-success">{{eshine}}</span></th>
            <td  class = "col-xs-11 col-md-11 col-lg-0 col-sm-11">
              <div id = "eshine" class="shineprog progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </td>
          </tr>
          <tr class = "row">
            <th class = "col-xs-1 col-md-1 col-lg-0 col-sm-1"><span class = "label shinelabel label-warning">{{cshine}}</span></th>
            <td  class = "col-xs-11 col-md-11 col-lg-0 col-sm-11">
              <div id = "cshine" class="shineprog progress-bar progress-bar-warning active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </td>
          </tr>
          <tr class = "row">
            <th class = "col-xs-1 col-md-1 col-lg-0 col-sm-1"><span class = "label shinelabel label-primary">{{sshine}}</span></th>
            <td class = "col-xs-11 col-md-11 col-lg-0 col-sm-11">
              <div id = "sshine" class="shineprog progress-bar progress-bar-primary active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </td>
          </tr>
        </table>
      </div>
      <div id = "mgiftboxdiv" class = "hidden bordered col-xs-3 col-md-3 col-lg-0 col-sm-3">
        <ul id = "mgiftbox">
        </ul>
      </div>
    </div>
  </div>
</div>
<div id = "profilepane" ng-app = "muserProfileApp" ng-controller = "muserProfileCtrl"  class = "hidden row">
  <div class = "propane col-xs-12 col-sm-12 col-lg-0 col-md-12">
    <img id = "mprofilepic" class = 'profilepic' src = "" alt = "Could'nt find Pic"></img>
    <div id = "muserinfo"></div>
    <div id = "meditbutton" class = 'image-upload msettings'>
      <label id = "labelmnewdp" for="mnewdp">
        <i class="attach-doc fa fa-edit fa-2x" aria-hidden="true"></i>
      </label>
      <input class = "hidden form-control" id = "mnewdp" type = "file" accept = "image/jpeg,image/x-png" onchange = "angular.element(this).scope().deleteDP();" ng-model = "mnewdp"/>
   </div><br>
   <button id = "mlogoutbutton" type = "button" class = "btn btn-default" ng-click="logout();"><strong>Logout</strong></button>
  </div>
</div>
