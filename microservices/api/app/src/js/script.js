var notif = 0;
function notifyMe(tit,msg) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else{
    var notification = new Notification(tit, {
      icon: "/favicon.ico",
      body: msg,
      image:"/css/propic.png"
    });
  }
}
var loggingout = 0;
var blinkcount = 0;
var full = 0;
function fullscreen(url){
  if(full === 0){
      document.getElementById("fullscreen").innerHTML = "<img class = 'fullimg' src = '"+url+"'>";
      document.getElementById("fullscreen").setAttribute("onclick","fullscreen('"+url+"')");
      document.getElementById("fullscreen").classList.add("fullopen");
      full = 1;
  }else{
    document.getElementById("fullscreen").classList.remove("fullopen");
    full = 0;
    document.getElementById("fullscreen").innerHTML = "";
  }
}
var poppy = 0;
function blinkTitle(name){
  if(blinkcount < 2){
    if(document.getElementById("sitetitle").innerHTML === "Sunshine"){
      blinkcount++;
      document.getElementById("sitetitle").innerHTML = name+" Messaged you";
      var aAudio = document.getElementById("popwav");
      if(poppy == 0){
          aAudio.play();
          poppy = 1;
      }
      setTimeout(function () {
        blinkTitle(name);
      }, 1000);
    }else{
      blinkcount++;
      document.getElementById("sitetitle").innerHTML = "Sunshine";
      setTimeout(function () {
        blinkTitle(name);
      }, 1000);
    }
  }else{
    document.getElementById("sitetitle").innerHTML = "Sunshine";
    blinkcount = 0;
  }
}
function chat_ago(time) {
  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = 'ago',
    list_choice = 1;

  if (seconds == 0) {
    return 'Just now'
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    list_choice = 2;
  }
  var i = 0,
    format;
  while (format = time_formats[i++])
    if (seconds < format[0]) {
      if (typeof format[2] == 'string')
        return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
    }
  return time;
}
var chatopen = 0;
var prevdataid = 0;
function scrollChat(){
  if(chatopen === 1){
    document.getElementById("chatlog").scrollTop = document.getElementById("chatlog").scrollHeight;
    document.getElementById("mchatlog").scrollTop = document.getElementById("mchatlog").scrollHeight;
  }else{
    prevdataid = 0;
  }
}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
function chat_time(time) {
  var now = new Date(getCookie("mytime"));
  var check = new Date(time);
  return (check.getHours()+":"+check.getMinutes()+":"+check.getSeconds());
}
function time_ago(time) {
  var now = new Date(getCookie("mytime"));
  var check = new Date(time);
  var gaph = Math.abs(now.getHours() - check.getHours());
  var gapm = Math.abs(now.getMinutes() - check.getMinutes());
  var gaps = Math.abs(now.getSeconds() - check.getSeconds());
  if(gaph === 0){
    if(gapm === 0){
      return 1;
    }
    else{
      return 0;
    }
  }else{
  }
  return 0;
}
//Hashing Code
for(each of document.getElementsByClassName('noshow')){
  each.classList.remove("hidden");
}
function SHA256(s){
 var chrsz  = 8;
 var hexcase = 0;
 function safe_add (x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
 }
 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
 function core_sha256 (m, l) {
 var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
 var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 var W = new Array(64);
 var a, b, c, d, e, f, g, h, i, j;
 var T1, T2;
 m[l >> 5] |= 0x80 << (24 - l % 32);
 m[((l + 64 >> 9) << 4) + 15] = l;
 for ( var i = 0; i<m.length; i+=16 ) {
 a = HASH[0];
 b = HASH[1];
 c = HASH[2];
 d = HASH[3];
 e = HASH[4];
 f = HASH[5];
 g = HASH[6];
 h = HASH[7];
 for ( var j = 0; j<64; j++) {
 if (j < 16) W[j] = m[j + i];
 else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
 T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
 T2 = safe_add(Sigma0256(a), Maj(a, b, c));
 h = g;
 g = f;
 f = e;
 e = safe_add(d, T1);
 d = c;
 c = b;
 b = a;
 a = safe_add(T1, T2);
 }
 HASH[0] = safe_add(a, HASH[0]);
 HASH[1] = safe_add(b, HASH[1]);
 HASH[2] = safe_add(c, HASH[2]);
 HASH[3] = safe_add(d, HASH[3]);
 HASH[4] = safe_add(e, HASH[4]);
 HASH[5] = safe_add(f, HASH[5]);
 HASH[6] = safe_add(g, HASH[6]);
 HASH[7] = safe_add(h, HASH[7]);
 }
 return HASH;
 }

 function str2binb (str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for(var i = 0; i < str.length * chrsz; i += chrsz) {
 bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
 }
 return bin;
 }
 function Utf8Encode(string) {
 string = string.replace(/\r\n/g,"\n");
 var utftext = "";
 for (var n = 0; n < string.length; n++) {
 var c = string.charCodeAt(n);
 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 }
 return utftext;
 }
 function binb2hex (binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for(var i = 0; i < binarray.length * 4; i++) {
 str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
 hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
 }
 return str;
 }
 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

//End of Hashing Code

function proggy(per){
  if(per === 0){
    document.getElementById("proggydiv").style = "width:0;height:0;";
  }
  else{
    document.getElementById("proggydiv").style = "width:"+per+"%;height:3px;";
  }
}
//
function notifyCookie(){
  if(checkCookie("cookie_permit") == 0){
    alert("We use cookies in our site. It is only to provide you a better user experience. Many of the site's features won't work without cookies.By pressing the 'Ok' button you consent the usage of cookies in your browser");
    setCookie("cookie_permit","permitted",10);
  }
}

function setCookie(cname, cvalue) {
    var d = new Date();
    exdays = 10;
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie(cname) {
    var cook = getCookie(cname);
    if (cook != "") {
        return 1;
    } else {
        return 0;
    }
}
function deleteCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime());
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}
function clearCookies(){
  var cookies = document.cookie.split(';');
    for(cookie of cookies){
      deleteCookie(cookie.split('=')[0]);
      goindex();
    }
}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
Element.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
},false;
Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
},false;
function postDown(){
  document.getElementById("postpanel").classList.add("postopen");
}
var level = "";
var prevfeed = "";
var newsApp = angular.module("newsApp",[]);
newsApp.controller("newsCtrl",function($scope,$http){
  document.getElementById("newposttext").addEventListener("keyup",function(){
    if(document.getElementById("newposttext").value === "" || document.getElementById("newposttext").value === null){
      document.getElementById("sendpostbtn").classList.add("hidden");
    }
  });
  $scope.readyPost = function(){
    if(document.getElementById("newposttext").value != null || document.getElementById("newposttext").value != ""){
      document.getElementById("sendpostbtn").classList.remove("hidden");
    }else{
      document.getElementById("sendpostbtn").classList.add("hidden");
    }
  }
  $scope.deleteImg = function(url){
    $http({
      method : "DELETE",
      url : url,
      withCredentials : true,
      headers:{
      'Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      $scope.getFeed();
    },function myError(response){
      console.log(response);
    });
  }
  $scope.deleteComments = function(id,url){
    var deleteData = {};
    deleteData["type"] = "delete";
    deleteData["args"] = {};
    deleteData["args"]["table"] = "comments";
    deleteData["args"]["where"] = {};
    deleteData["args"]["where"]["post_id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(deleteData),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      $scope.deletePost(id,url);
    },function myError(response){
      console.log(response);
      sunNotify("Post Delete Failed","alert-danger");
    });
  }
  $scope.deletePost = function(id,url){
    var deleteData = {};
    deleteData["type"] = "delete";
    deleteData["args"] = {};
    deleteData["args"]["table"] = "posts";
    deleteData["args"]["where"] = {};
    deleteData["args"]["where"]["post_id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(deleteData),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      sunNotify("Post Deleted","alert-info");
      $scope.deleteImg(url);
    },function myError(response){
      console.log(response);
      sunNotify("Post Delete Failed","alert-danger");
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");


    return text;
  }
  $scope.addPost = function(){
    var posttext = document.getElementById('newposttext').value;
    var postData = {};
    postData["type"] = "insert";
    postData["args"] = {};
    postData["args"]["table"] = "posts";
    postData["args"].objects = [{
      "id":getCookie("hasura_id"),
      "posttext":$scope.smilify(posttext),
      "postimg":upfileurl
    }];
    console.log(postData);
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(postData),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      document.getElementsByClassName("ppanel")[0].style = "height : 65px";
      console.log(response);
      $scope.postimg = null;
      $scope.filename = "";
      document.getElementById("cancelupbtn").classList.add("hidden");
      document.getElementById("cancelbadge").classList.add("hidden");
      document.getElementById("attach").classList.remove("hidden");
      document.getElementById("cancelupbtn").src = "";
      document.getElementById("newpostimg").value = "";
      document.getElementById('newposttext').value = "";
      upfileurl = "";
      $scope.getFeed();
      sunNotify("Posted Successfully","alert-success");
    },function myError(response){
      console.log(response);
      $scope.cancelUpload();
      document.getElementById('newposttext').value = "";
      sunNotify("Posted Failed","alert-danger");
    });
  }
  $scope.filename = "";
  $scope.cancelUpload = function(){
    $http({
      method : "DELETE",
      url : upfileurl,
      withCredentials : true,
      headers:{
      'Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      document.getElementsByClassName("ppanel")[0].classList.remove("postopen");
      sunNotify("<strong>Upload Cancelled</strong>","alert-info");
      $scope.postimg = null;
      $scope.filename = "";
      document.getElementById("cancelupbtn").classList.add("hidden");
      document.getElementById("cancelbadge").classList.add("hidden");
      document.getElementById("attach").classList.remove("hidden");
      document.getElementById("cancelupbtn").src = "";
      document.getElementById("newpostimg").value = "";
      upfileurl = "";
    },function myError(response){
      sunNotify("<strong>Cancel Failed</strong>","alert-danger");
    });
  }
  var upfileurl = "";
  $scope.uploadPostImg = function(){
    document.getElementById("attach").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i>";
    var file = document.getElementById("newpostimg").files[0];
    var newimg  = $scope.newpostimg;
    var date = new Date();
    var dpurl = "https://filestore.unluckily34.hasura-app.io/v1/file/"+JSON.parse(getCookie("userdata"))[0].hasura_id+"-"+date.getTime();
      ////console.log(dpurl);
      $http({
        method : "POST",
        url : dpurl,
        data: file,
        withCredentials : true,
        headers:{
          'Content-type' : 'image/jpg','Authorization' : 'Bearer '+getCookie("auth_token")
        }
      }).then(function mySuccess(response){
        document.getElementsByClassName("ppanel")[0].classList.add("postopen");
        document.getElementById("attach").innerHTML = '<i class="attach-doc fas fa-camera" aria-hidden="true"></i>';
        upfileurl = dpurl;
        sunNotify("<strong>Image Ready to Post</strong>","alert-success");
        if(newimg != null || newimg != ""){
          var pathlength = document.getElementById("newpostimg").value.split('\\').length;
          $scope.filename = document.getElementById("newpostimg").value.split('\\')[pathlength-1];
          document.getElementById("cancelupbtn").classList.remove("hidden");
          document.getElementById("cancelbadge").classList.remove("hidden");
          document.getElementById("cancelupbtn").src = upfileurl;
          document.getElementById("attach").classList.add("hidden");
          postDown();
        }
      },function myError(response){
        document.getElementById("attach").innerHTML = '<i class="attach-doc fas fa-camera" aria-hidden="true"></i>';
        sunNotify("<strong>Image Upload Failed</strong>","alert-danger");
      });

  }
  $scope.deleteLikes = function(id,url){
    var deleteData = {};
    deleteData["type"] = "delete";
    deleteData["args"] = {};
    deleteData["args"]["table"] = "likes";
    deleteData["args"]["where"] = {};
    deleteData["args"]["where"]["id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(deleteData),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      $scope.deleteComments(id,url);
    },function myError(response){
      console.log(response);
    });
  }

  $scope.likeZone = function(id){
    for(each of document.getElementsByClassName("likezone")){
      each.classList.add("hidden");
    }
    document.getElementById("like"+id).classList.remove("hidden");
  }
  $scope.zoneOut = function(id){
    for(each of document.getElementsByClassName("likezone")){
      each.classList.add("hidden");
    }
  }
  $scope.addLike = function(id,shine){
    document.getElementById("likeme"+id).innerHTML = "<i class = 'fas fa-spinner fa-spin'></i>";
    var usedata = {};
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "likes";
    usedata["args"].objects =  [{
        "id": id,
        "liker_id":getCookie("hasura_id"),
        "shine":shine
      }];
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      switch(shine){
        case "health":
        shinecol = "danger";
        shinebut = "heart";
        break;
        case "social":
        shinecol = "primary";
        shinebut = "globe";
        break;
        case "charity":
        shinecol = "warning";
        shinebut = "gift";
        break;
        case "earth":
        shinecol = "success";
        shinebut = "leaf";
        break;
        default:console.log("invalid shine");
      }
      document.getElementById("likeme"+id).classList.remove("btn-default");
      document.getElementById("likeme"+id).classList.add('btn-'+shinecol);
      document.getElementById("likeme"+id).innerHTML = '<i class = "fa fa-'+shinebut+'"></i>';
      document.getElementById("likeme"+id).removeAttribute("data-toggle");
      document.getElementById("likeme"+id).setAttribute("onclick","angular.element(this).scope().unLike("+id+")");
      $scope.getPost(id);
    },function myError(response){
      console.log(response);
    });
  }
  $scope.unLike = function(id){
    document.getElementById("likeme"+id).innerHTML = "<i class = 'fas fa-spinner fa-spin'></i>";
    var usedata = {};
    usedata["type"] = "delete";
    usedata["args"] = {};
    usedata["args"]["table"] = "likes";
    usedata["args"]["where"] = {};
    usedata["args"]["where"]["id"] = id;
    usedata["args"]["where"]["liker_id"] = getCookie("hasura_id");
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      document.getElementById("likeme"+id).classList.remove("btn-danger");
      document.getElementById("likeme"+id).classList.remove("btn-warning");
      document.getElementById("likeme"+id).classList.remove("btn-primary");
      document.getElementById("likeme"+id).classList.remove("btn-success");
      document.getElementById("likeme"+id).classList.add("btn-default");
      document.getElementById("likeme"+id).classList.add("dropdown-toggle");
      document.getElementById("likeme"+id).innerHTML = "<strong>Like</strong>";
      document.getElementById("likeme"+id).setAttribute("data-toggle","dropdown");
      var newele = document.createElement('div');
      newele.innerHTML = '<span class = "dropdown-menu"><button type = "button" class = "btn btn-danger" onclick = "angular.element(this).scope().addLike('+id+',\'health\')" ><i class = "fa fa-heart"></i></button> <button type = "button" class = "btn btn-success" onclick = "angular.element(this).scope().addLike('+id+',\'earth\')"><i class = "fa fa-leaf"></i></button> <button type = "button" class = "btn btn-warning" onclick = "angular.element(this).scope().addLike('+id+',\'charity\')"><i class = "fa fa-gift"></i></button> <button type = "button" class = "btn btn-primary" onclick = "angular.element(this).scope().addLike('+id+',\'social\')"><i class = "fa fa-globe"></i></button></span>';
      var divenclose = document.createElement('div');
      divenclose.classList.add("dropdown");
      var parent = document.getElementById("likeme"+id).parentNode;
      divenclose.appendChild(document.getElementById("likeme"+id).cloneNode(true));
      document.getElementById("likeme"+id).appendChild(newele);
      parent.replaceChild(divenclose,document.getElementById("likeme"+id));
      newele.appendAfter(document.getElementById("likeme"+id));
      document.getElementById("likeme"+id).removeAttribute("onclick");
      $scope.getPost(id);
    },function myError(response){
      console.log(response);
    });
  }
  $scope.deleteComment = function(id,pid){
    var sav = document.getElementById("cmtbtn"+pid).innerHTML;
    document.getElementById("cmtbtn"+pid).innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Deleting Comments";
    var usedata = {};
    usedata["type"] = "delete";
    usedata["args"] = {};
    usedata["args"]["table"] = "comments";
    usedata["args"]["where"] = {};
    usedata["args"]["where"]["id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      $scope.refcomment(pid);
    },function myError(response){
      document.getElementById("cmtbtn"+pid).innerHTML = sav;
      sunNotify("<strong>"+response+"</strong>","alert-danger");
    });
  }
  $scope.refcomment = function(id){
    var sav = document.getElementById("cmtbtn"+id).innerHTML;
    document.getElementById("cmtbtn"+id).innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Getting Comments";
    var cmtdata = {};
    cmtdata["type"] = "select";
    cmtdata["args"] = {};
    cmtdata["args"]["table"] = "comments";
    cmtdata["args"]["columns"] = ["*"];
    cmtdata["args"]["columns"][1] = {};
    cmtdata["args"]["columns"][2] = {};
    cmtdata["args"]["columns"][1]["name"] = "commentor";
    cmtdata["args"]["columns"][1]["columns"] = ["*"];
    cmtdata["args"]["columns"][2]["name"] = "post";
    cmtdata["args"]["columns"][2]["columns"] = ["*"];
    cmtdata["args"]["where"] = {};
    cmtdata["args"]["where"]["post_id"] = id;
    cmtdata["args"]["order_by"] = "-id";
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(cmtdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      document.getElementById("cmtbtn"+id).innerHTML = sav;
      document.getElementById("cmtbtn"+id).innerHTML = "<strong>"+response.data.length+" Comments</strong>";
      document.getElementById("newcmt"+id).value = '';
      document.getElementById("cmtul"+id).innerHTML = "";
      var del = "";
      var ccount = 0;
      for(each of response.data){
        ccount++;
        if(""+each.commentor.id === getCookie("hasura_id")){
          del = "<div class = 'dropdown cmtops'><button type = 'button' class = 'cmtdelbtn btn btn-default dropdown-toggle' data-toggle = 'dropdown'>...</button><div class = 'dropdown-menu dropdown-menu-right cmtmenu'><button type = 'button' title = 'Delete Comment' class = 'deletebtn btn btn-danger' onclick = 'angular.element(this).scope().deleteComment("+each.id+","+each.post_id+");' ><strong>Delete</strong></button></div></div>";
        }else{
          del = "";
        }
        document.getElementById("cmtul"+id).innerHTML+= "<li class = 'comment' id = "+each.id+"><img src = '"+each.commentor.proimg+"' title = '"+each.commentor.username+"' class = 'cmtdp'> "+each.comment+" "+del+"<div class = 'cmtts'>"+chat_ago(each.created)+"</div> </li><br>";
      }
      document.getElementById('cmtbtn'+id).innerHTML = "<strong>"+ccount+" Comments</strong>";
    },function myError(response){
      document.getElementById("cmtbtn"+id).innerHTML = sav;
      console.log(response);
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");


    return text;
  }
  $scope.comment = function(id){
    console.log(document.getElementById("newcmt"+id).value);
    if(document.getElementById("newcmt"+id).value != "" || document.getElementById("newcmt"+id).value != null){
      var cmtdata = {};
      cmtdata["type"] = "insert";
      cmtdata["args"] = {};
      cmtdata["args"]["table"] = "comments";
      cmtdata["args"].objects =  [{
          "id":parseInt(getCookie("hasura_id")),
          "post_id":id,
          "comment":$scope.smilify(document.getElementById("newcmt"+id).value)
        }];
        $http({
          method : "POST",
          url : "https://data.unluckily34.hasura-app.io/v1/query",
          data : JSON.stringify(cmtdata),
          withCredentials : true,
          headers : {
            'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
          }
        }).then(function mySuccess(response){
          $scope.refcomment(id);
        },function myError(response){
        });
      }
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");


    return text;
  }
  $scope.getComments = function(id){
    var sav = document.getElementById("cmtbtn"+id).innerHTML;
    document.getElementById("cmtbtn"+id).innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Getting Comments";
    var cmtdata = {};
    cmtdata["type"] = "select";
    cmtdata["args"] = {};
    cmtdata["args"]["table"] = "comments";
    cmtdata["args"]["columns"] = ["*"];
    cmtdata["args"]["columns"][1] = {};
    cmtdata["args"]["columns"][2] = {};
    cmtdata["args"]["columns"][1]["name"] = "commentor";
    cmtdata["args"]["columns"][1]["columns"] = ["*"];
    cmtdata["args"]["columns"][2]["name"] = "post";
    cmtdata["args"]["columns"][2]["columns"] = ["*"];
    cmtdata["args"]["order_by"] = "-created";
    cmtdata["args"]["where"] ={};
    cmtdata["args"]["where"]["post_id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(cmtdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      var del = "";
      var ccount = 0;
      var cmtele = document.createElement("div");
      cmtele.classList.add("cmtbox");
      cmtele.innerHTML = "<form action = 'javascript:void(0)' onsubmit = 'angular.element(this).scope().comment("+id+")'><div class = 'form-group'><input autocomplete = 'off' placeholder = 'Comment...' class = 'form-control' type = 'text' id = newcmt"+id+"></div></form><ul id = 'cmtul"+id+"'></ul>";
      if(document.getElementById("cmtlist"+id).childNodes.length === 1){
        document.getElementById("cmtlist"+id).appendChild(cmtele);
        for(each of response.data){
          ccount++;
          if(""+each.commentor.id === getCookie("hasura_id")){
            del = "<div class = 'dropdown cmtops'><button type = 'button' class = 'cmtdelbtn btn btn-default dropdown-toggle ' data-toggle = 'dropdown'>...</button><div class = 'dropdown-menu dropdown-menu-right cmtmenu'><button type = 'button' title = 'Delete Comment' class = 'deletebtn btn btn-danger' onclick = 'angular.element(this).scope().deleteComment("+each.id+","+each.post_id+");' ><strong>Delete</strong></button></div></div>";
          }else{
            del = "";
          }
          document.getElementById("cmtul"+id).innerHTML+= "<li class = 'comment' id = "+each.id+"><img src = '"+each.commentor.proimg+"' title = '"+each.commentor.username+"' class = 'cmtdp'> "+$scope.smilify(each.comment)+" "+del+"<div class = 'cmtts'>"+chat_ago(each.created)+"</div></li><br>";
        }
        document.getElementById('cmtbtn'+id).innerHTML = "<strong>"+ccount+" Comments</strong>";
      }else{
        document.getElementById("cmtlist"+id).removeChild(document.getElementById("cmtlist"+id).childNodes[1]);
        document.getElementById('cmtbtn'+id).innerHTML = sav;
      }
    },function myError(response){
      document.getElementById("cmtbtn"+id).innerHTML = sav;
      console.log(response);
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");


    return text;
  }
  $scope.getPost = function(id){
    var newlist = "";
    var feedData = {};
    feedData["type"] = "select";
    feedData["args"] = {};
    feedData["args"]["table"] = "posts";
    feedData["args"]["columns"] = ["*"];
    feedData["args"]["columns"][1] = {};
    feedData["args"]["columns"][1]["name"] = "author";
    feedData["args"]["columns"][1]["columns"] = ["*"];
    feedData["args"]["columns"][2] = {};
    feedData["args"]["columns"][2]["name"] = "likers";
    feedData["args"]["columns"][2]["columns"] = ["*"];
    feedData["args"]["columns"][2]["columns"][1] = {};
    feedData["args"]["columns"][2]["columns"][1]["name"] = "liker";
    feedData["args"]["columns"][2]["columns"][1]["columns"] = ["*"];
    feedData["args"]["columns"][3] = {};
    feedData["args"]["columns"][3]["name"] = "comments";
    feedData["args"]["columns"][3]["columns"] = ["*"];
    feedData["args"]["where"] = {};
    feedData["args"]["where"]["post_id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(feedData),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      var postimg = "";
      var meshined = "";
      var liked = "";
      var shinecol = "";
      var shinebut = "";
      var likersmore = 0;
      var likerscount = 0;
      var liketext = "";
      newslist = "";
      var deletetext = "";
      for(each of response.data){
        likerscount = 0;
        var liked = "";
        var ilike = 0;
        for(each1 of each.likers){
          var youshined = each1.shine;
          switch(youshined){
            case "health":
            shinecol = "danger";
            shinebut = "heart";
            break;
            case "social":
            shinecol = "primary";
            shinebut = "globe";
            break;
            case "charity":
            shinecol = "warning";
            shinebut = "gift";
            break;
            case "earth":
            shinecol = "success";
            shinebut = "leaf";
            break;
            default:console.log("invalid shine");
          }
          if(likerscount <=5){
            likerscount++;
            liked += "<div class = 'shinecont'><img src = '"+each1.liker.proimg+"' class = 'likedp shineim' title = '"+each1.liker.username+"'><div class = 'shinein'><span class = 'label label-"+shinecol+" likelabel'><i class = 'fas fa-"+shinebut+"'></i></span></div></div>";
            likersmore = 0;
          }else{
            likersmore = 1;
          }
          if(""+each1.liker_id === getCookie("hasura_id")){
            ilike = 1;
            meshined = each1.shine;
          }
        }
        if(each.likers.length > 0){
          liked += " liked this post";
        }
        if(likersmore === 1){
          liked += "and others ";
        }
        if(ilike === 0 && (""+each.author.id != getCookie("hasura_id"))){
          liketext = '<div class = "dropdown"><button id = "likeme'+each.post_id+'" type = "button" title = "Give a shine for this post"  class = "likebutton btn btn-default dropdown-toggle" data-toggle = "dropdown"><strong>Shine</strong></button><span class = "dropdown-menu"><button type = "button" class = "btn btn-danger" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'health\')" ><i class = "fa fa-heart"></i></button> <button type = "button" class = "btn btn-success" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'earth\')"><i class = "fa fa-leaf"></i></button> <button type = "button" class = "btn btn-warning" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'charity\')"><i class = "fa fa-gift"></i></button> <button type = "button" class = "btn btn-primary" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'social\')"><i class = "fa fa-globe"></i></button></span></div><br>';
        }else if(""+each.author.id != getCookie("hasura_id")){
          switch(meshined){
            case "health":
            shinecol = "danger";
            shinebut = "heart";
            break;
            case "social":
            shinecol = "primary";
            shinebut = "globe";
            break;
            case "charity":
            shinecol = "warning";
            shinebut = "gift";
            break;
            case "earth":
            shinecol = "success";
            shinebut = "leaf";
            break;
            default:console.log("invalid shine");
          }
          liketext = '<div class = "unlikediv"><button id = "likeme'+each.post_id+'" onclick = "angular.element(this).scope().unLike('+each.post_id+')" title = "Remove '+meshined+' Shine" type = "button" class = "likebutton btn btn-'+shinecol+'" ><i class = "fa fa-'+shinebut+'"></i></button></div><br>';
        }else{
          liketext = "";
        }
        if(each.postimg === null || each.postimg === ""){
          postimg = "";
        }else{
          postimg = "<img src = '"+each.postimg+"' onclick = \"fullscreen('"+each.postimg+"')\" class = 'postimg' alt ='Image not Found'>";
        }
        if(""+each.author.id === getCookie("hasura_id")){
          deletetext = "<div class = 'dropdown postops'><button type = 'button' class = 'btn btn-default dropdown-toggle postops' data-toggle = 'dropdown'>...</button><div class = 'dropdown-menu dropdown-menu-right postmenu'><button type = 'button' title = 'Delete Post' class = 'deletebtn btn btn-danger' onclick = 'angular.element(this).scope().deleteLikes("+each.post_id+",\""+each.postimg+"\");' ><strong>Delete</strong></button></div></div>";
        }else{
          deletetext = "";
        }
        newlist += "<li id = 'postid"+each.post_id+"' class = 'post'>"+deletetext+"<img src = '"+each.author.proimg+"' class = 'authdp'><span class = 'badge label label-warning level'>"+each.author.level+"</span><p class = 'author'><strong>"+each.author.username+"</strong></p><p class = 'postago'><strong>"+chat_ago(each.created)+"</strong></p><h6 class = 'postimgdiv'>"+postimg+"</h6><p2 class = 'posttext'>"+$scope.smilify(each.posttext)+"</p2><br><br>"+liketext+"<div id = 'liked"+each.post_id+"' class = 'likedlist'>"+liked+" </div><br><div class = 'cmtsctn' id = 'cmtlist"+each.post_id+"'><button id = 'cmtbtn"+each.post_id+"'type = 'button' onclick = 'angular.element(this).scope().getComments("+id+");' title = 'View Comments' class = 'btn btn-default cmtbtn'><strong>"+each.comments.length+" Comments</strong></button></div></li>";
      }
      $('#postid'+id).replaceWith(newlist);
      $
    },function myError(response)    {
      sunNotify(response,"alert-danger");
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    return text;
  }
  $scope.getFeed = function(){
    var newlist = "";
    var feedData = {};
    feedData["type"] = "select";
    feedData["args"] = {};
    feedData["args"]["table"] = "posts";
    feedData["args"]["columns"] = ["*"];
    feedData["args"]["columns"][1] = {};
    feedData["args"]["columns"][1]["name"] = "author";
    feedData["args"]["columns"][1]["columns"] = ["*"];
    feedData["args"]["columns"][2] = {};
    feedData["args"]["columns"][2]["name"] = "likers";
    feedData["args"]["columns"][2]["columns"] = ["*"];
    feedData["args"]["columns"][2]["columns"][1] = {};
    feedData["args"]["columns"][2]["columns"][1]["name"] = "liker";
    feedData["args"]["columns"][2]["columns"][1]["columns"] = ["*"];
    feedData["args"]["columns"][3] = {};
    feedData["args"]["columns"][3]["name"] = "comments";
    feedData["args"]["columns"][3]["columns"] = ["*"];
    feedData["args"]["order_by"] = "-post_id";
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(feedData),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      var news = document.getElementById("newsfeed");
      var postimg = "";
      var meshined = "";
      var liked = "";
      var shinecol = "";
      var shinebut = "";
      var likersmore = 0;
      var likerscount = 0;
      var liketext = "";
      newslist = "";
      var deletetext = "";
      for(each of response.data){
        likerscount = 0;
        var liked = "";
        var ilike = 0;
        for(each1 of each.likers){
          var youshined = each1.shine;
          switch(youshined){
            case "health":
            shinecol = "danger";
            shinebut = "heart";
            break;
            case "social":
            shinecol = "primary";
            shinebut = "globe";
            break;
            case "charity":
            shinecol = "warning";
            shinebut = "gift";
            break;
            case "earth":
            shinecol = "success";
            shinebut = "leaf";
            break;
            default:console.log("invalid shine");
          }
          if(likerscount <=5){
            likerscount++;
            liked += "<div class = 'shinecont'><img src = '"+each1.liker.proimg+"' class = 'likedp shineim' title = '"+each1.liker.username+"'><div class = 'shinein'><span class = 'label label-"+shinecol+" likelabel'><i class = 'fas fa-"+shinebut+"'></i></span></div></div>";
            likersmore = 0;
          }else{
            likersmore = 1;
          }
          if(""+each1.liker_id === getCookie("hasura_id")){
            ilike = 1;
            meshined = each1.shine;
          }
        }
        if(each.likers.length > 0){
          liked += " liked this post";
        }
        if(likersmore === 1){
          liked += "and others ";
        }
        if(ilike === 0 && (""+each.author.id != getCookie("hasura_id"))){
          liketext = '<div class = "dropdown"><button id = "likeme'+each.post_id+'" title = "Give a shine for this post" type = "button" class = "likebutton btn btn-default dropdown-toggle" data-toggle = "dropdown"><strong>Shine</strong></button><span class = "dropdown-menu"><button type = "button" class = "btn btn-danger" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'health\')" ><i class = "fa fa-heart"></i></button> <button type = "button" class = "btn btn-success" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'earth\')"><i class = "fa fa-leaf"></i></button> <button type = "button" class = "btn btn-warning" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'charity\')"><i class = "fa fa-gift"></i></button> <button type = "button" class = "btn btn-primary" onclick = "angular.element(this).scope().addLike('+each.post_id+',\'social\')"><i class = "fa fa-globe"></i></button></span></div><br>';
        }else if(""+each.author.id != getCookie("hasura_id")){
          switch(meshined){
            case "health":
            shinecol = "danger";
            shinebut = "heart";
            break;
            case "social":
            shinecol = "primary";
            shinebut = "globe";
            break;
            case "charity":
            shinecol = "warning";
            shinebut = "gift";
            break;
            case "earth":
            shinecol = "success";
            shinebut = "leaf";
            break;
            default:console.log("invalid shine");
          }
          liketext = '<div class = "unlikediv"><button id = "likeme'+each.post_id+'" onclick = "angular.element(this).scope().unLike('+each.post_id+')" title = "Remove '+meshined+' Shine" type = "button" class = "likebutton btn btn-'+shinecol+'" ><i class = "fa fa-'+shinebut+'"></i></button></div><br>';
        }else{
          liketext = "";
        }
        if(each.postimg === null || each.postimg === ""){
          postimg = "";
        }else{
          postimg = "<img onclick = \"fullscreen('"+each.postimg+"')\" src = '"+each.postimg+"' class = 'postimg' alt ='Image not Found'>";
        }
        if(""+each.author.id === getCookie("hasura_id")){
          deletetext = "<div class = 'dropdown postops'><button type = 'button' class = 'btn btn-default dropdown-toggle postops' data-toggle = 'dropdown'>...</button><div class = 'dropdown-menu dropdown-menu-right postmenu'><button type = 'button' title = 'Delete Post' class = 'deletebtn btn btn-danger' onclick = 'angular.element(this).scope().deleteLikes("+each.post_id+",\""+each.postimg+"\");' ><strong>Delete</strong></button></div></div>";
        }else{
          deletetext = "";
        }
        newlist += "<li id = 'postid"+each.post_id+"' class = 'post'>"+deletetext+"<img src = '"+each.author.proimg+"' class = 'authdp'><span class = 'badge label label-warning level'>"+each.author.level+"</span><p class = 'author'><strong>"+each.author.username+"</strong></p><p class = 'postago'><strong>"+chat_ago(each.created)+"</strong></p><h6 class = 'postimgdiv'>"+postimg+"</h6><p2 class = 'posttext'>"+$scope.smilify(each.posttext)+"</p2><br><br>"+liketext+"<div id = 'liked"+each.post_id+"' class = 'likedlist'>"+liked+" </div><br><div class = 'cmtsctn' id = 'cmtlist"+each.post_id+"'><button id = 'cmtbtn"+each.post_id+"' type = 'button' onclick = 'angular.element(this).scope().getComments("+each.post_id+");' title = 'View Comments' class = 'btn btn-default cmtbtn'><strong>"+each.comments.length+" Comments</strong></button></div></li>";
      }
      if(newlist !=  prevfeed){
        news.innerHTML = newlist;
        prevfeed = newlist;
      }
    },function myError(response){
      console.log(response);
    });
  }
  $scope.getFeed();
});
var muserApp = angular.module("muserApp",[]);
muserApp.controller("muserCtrl",function($scope,$http){
  $scope.chatClose = function(){
    chatopen = 0;
    scrollChat();
    var chatlist = document.getElementById("mchatlist");
    var chatApp = document.getElementById("mchatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    if(!chatlist.classList.contains("col-sm-12","col-xs-12")){
      document.getElementById("mchathead").innerHTML = "<strong>"+name+"</strong>";
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
      chatApp.classList.add("hidden");
      chatlist.classList.remove("col-sm-4","col-xs-4");
      chatlist.classList.add("col-sm-12","col-xs-12");
    }
    else{
      document.getElementById("mchathead").innerHTML = "";
      document.getElementById("chathead").innerHTML = "";
    }
  }
  $scope.chatPaneUp = function(){
    if(document.getElementById("mchatlist").classList.contains("hidden")){
      document.getElementById("chatbutton").classList.remove("fa-user-plus");
      document.getElementById("chatbutton").classList.add("fa-home");
      document.getElementById("mchatlist").classList.remove("hidden");
      document.getElementById("newspane").classList.add("hidden");
      document.getElementById("mshinetable").classList.add("hidden");
      document.getElementById("profilepane").classList.add("hidden");
    }
    else{
      $scope.chatClose();
      document.getElementById("mchatlist").classList.add("hidden");
      document.getElementById("chatbutton").classList.remove("fa-home");
      document.getElementById("chatbutton").classList.add("fa-user-plus");
      document.getElementById("mshinetable").classList.add("hidden");
      document.getElementById("newspane").classList.remove("hidden");
    }
  }
  $scope.proPaneUp = function(){
    $scope.hshine = 0;
    $scope.sshine = 0;
    $scope.eshine = 0;
    $scope.cshine = 0;
    document.getElementById('hshine').style = "width : "+$scope.hshine+"%;";
    document.getElementById('cshine').style = "width : "+$scope.cshine+"%;";
    document.getElementById('eshine').style = "width : "+$scope.eshine+"%;";
    document.getElementById('sshine').style = "width : "+$scope.sshine+"%;";
    if(document.getElementById("profilepane").classList.contains("hidden")){
      $scope.chatClose();
      document.getElementById("profilepane").classList.remove("hidden");
      document.getElementById("mshinetable").classList.remove("hidden");
      document.getElementById("mgiftboxdiv").classList.remove("hidden");
      document.getElementById("newspane").classList.add("hidden")
      document.getElementById("mchatlist").classList.add("hidden")
    }
    else{
      document.getElementById("mgiftboxdiv").classList.add("hidden");
      document.getElementById("mshinetable").classList.add("hidden");
      document.getElementById("profilepane").classList.add("hidden");
      document.getElementById("newspane").classList.remove("hidden");
    }
  }
  $scope.logout = function(){
    alert("called");
    proggy(30);
    document.getElementById("muser_commands").innerHTML += "<i class = 'fa fa-spinner fa-spin'></i>";
    //////console.log("Sent Logout request...waiting");
    sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out please wait</strong>","alert-warning");
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(100);
      //////console.log("Logged Out");
      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out</strong>","alert-info");
      setTimeout(function(){
        setTimeout(clearCookies(),3000);
      },3000);
    },function myError(response){
      proggy(100);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
        setTimeout(function(){
          clearCookies();
        },3000);
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
  $scope.getUserProfile = function(){
    var hasura_id = getCookie("hasura_id");
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    //////console.log(getCookie("hasura_id"));
    userdata["args"]["table"] = "users";
    userdata["args"]["columns"] = [];
    userdata["args"]["columns"]=["*"];
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "profile";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
    //////console.log(JSON.stringify(userdata));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      //////console.log(response);
      var dob = new Date(response.data[0].profile[0].dob);
      days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var template =  "<img class = 'profilepic' src = '"+getCookie("proimage")+"'></img>"+
                      "<br>User ID : "+response.data[0].id+
                      "<br>Username : "+response.data[0].username+
                      "<br>Name : "+response.data[0].profile[0].fname+" "+response.data[0].profile[0].lname+
                      "<br>Email : "+response.data[0].email+
                      "<br>Birthday : "+days[dob.getDay()]+" "+dob.getDate()+"/"+mons[dob.getMonth()]+"/"+dob.getFullYear();
      sunNotify("<strong>"+template+"</strong>","alert-info");
    },function myError(response){
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
});
var userApp = angular.module("userApp",[]);
userApp.controller("userCtrl",function($scope,$http){
  $scope.addFriend = function(id){
    var usedata = {};
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"].objects =  [{
        "reqid":parseInt(getCookie("hasura_id")),
        "recid":id,
      }];
    //////console.log(JSON.stringify(usedata));

    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      sunNotify("<strong>Request Sent !!!</strong>","alert-success");
      document.getElementById("searchip").value = "";
      document.getElementById("searchresults").innerHTML = "";
      document.getElementById("searchresults").style = "height : 0";
    },function myError(response){
      ////console.log(response);
    });
  }
  $scope.logout = function(){
    loggingout = 1;
    proggy(30);
    document.getElementById("user_commands").innerHTML += "<i class = 'fa fa-spinner fa-spin'></i>";
    //////console.log("Sent Logout request...waiting");
    sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out please wait</strong>","alert-warning");
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(100);
      //////console.log("Logged Out");
      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out</strong>","alert-info");
      setTimeout(function(){
        setTimeout(clearCookies(),3000);
      },3000);
    },function myError(response){
      proggy(100);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
        setTimeout(function(){
          clearCookies();
        },3000);
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response)+"</strong>","alert-danger");
      }
    });
  }
  $scope.getUserProfile = function(){
    var hasura_id = getCookie("hasura_id");
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    //////console.log(getCookie("hasura_id"));
    userdata["args"]["table"] = "users";
    userdata["args"]["columns"] = [];
    userdata["args"]["columns"]=["*"];
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "profile";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
    //////console.log(JSON.stringify(userdata));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      //////console.log(response);
      var dob = new Date(response.data[0].profile[0].dob);
      days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var template =  "<img class = 'profilepic' src = '"+getCookie("proimage")+"'></img>"+
                      "<br>User ID : "+response.data[0].id+
                      "<br>Username : "+response.data[0].username+
                      "<br>Name : "+response.data[0].profile[0].fname+" "+response.data[0].profile[0].lname+
                      "<br>Email : "+response.data[0].email+
                      "<br>Birthday : "+days[dob.getDay()]+" "+dob.getDate()+"/"+mons[dob.getMonth()]+"/"+dob.getFullYear();
      sunNotify("<strong>"+template+"</strong>","alert-info");
    },function myError(response){
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
});
function testlogout(){
  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.readyState == 4 && x.status == 200){
      console.log(x.responseText);
      clearCookies();
      }
      else {
        proggy(70);
        if(x.readyState === 4){
          console.log("error "+x.responseText);
        }
      }
    }
      x.open('POST','https://auth.unluckily34.hasura-app.io/v1/user/logout',true);
      x.setRequestHeader("Authorization", "Bearer "+getCookie("auth_token"));
      x.send();
}
function gohome(){
  if(checkCookie('hasura_id') == 1){
    window.location = "/?mode=home";
  }
  else{
    alert("Please Log in first");
    goindex();
  }
}
function showpic(){
  document.getElementById('propic').src = getCookie("proimage");
  //////console.log(getCookie('proimage'));
}
function goindex(){
  window.location = "/?mode=login";
}
function goSignUp(){
  window.location = "/?mode=signup";
}
function goOTP(){
  window.location = "/?mode=otp";
}
 function resetPwdFormUp(){
  document.getElementById("resetFormDiv").classList.remove("hidden");
  document.getElementById("signupform").classList.add("hidden")
  document.getElementById("logindiv").classList.add("hidden");
  document.getElementById("rstpwdbtn").innerHTML = "<strong>Set New Password</strong>";
  document.getElementById("rstpwdbtn").disabled = "";
}
 function signupFormUp(){
  document.getElementById("signupform").classList.remove("hidden")
  document.getElementById("logindiv").classList.add("hidden");
  document.getElementById("resetFormDiv").classList.add("hidden");
  document.getElementById("signupbutton").value = "Sign Up";
  document.getElementById("signupbutton").disabled = "";
}
function proupFormUp(){
  document.getElementById("proupform").classList.remove("hidden");
  document.getElementById("logindiv").classList.add("hidden");
  document.getElementById("resetFormDiv").classList.add("hidden");
  document.getElementById("signupform").classList.add("hidden")
  document.getElementById("proupbutton").innerHTML = "<strong>Setup Profile</strong>";
  document.getElementById("proupbutton").disabled = "";
}
function loginFormUp(){
  document.getElementById("signupform").classList.add("hidden");
  document.getElementById("proupform").classList.add("hidden");
  document.getElementById("resetFormDiv").classList.add("hidden");
  document.getElementById("logindiv").classList.remove("hidden");
  document.getElementById("loginbutton").innerHTML= "<strong>Log In</strong>";
  document.getElementById("loginbutton").disabled = "";
}
function clearAlert(){
  document.getElementById("loggydiv").classList.remove("alert-info");
  document.getElementById("loggydiv").classList.remove("alert-success");
  document.getElementById("loggydiv").classList.remove("alert-warning");
  document.getElementById("loggydiv").classList.remove("alert-danger");
}
function sunNotify(msg,typ){
  document.getElementById("loggydiv").classList.remove("hidden");
  document.getElementById("loggydiv").innerHTML = msg;
  clearAlert();
  document.getElementById("loggydiv").classList.add(typ);
  setTimeout(function(){
    document.getElementById("loggydiv").classList.add("hidden");
    document.getElementById("loggydiv").classList.remove(typ);
  },3000);
}
var resetPwdApp = angular.module("resetPwdApp",[]);
resetPwdApp.controller = resetPwdApp.controller("resetPwdCtrl",function($scope,$http){
  $scope.resetuser = {};
  $scope.reset = function(){
    document.getElementById('rstpwdbtn').innerHTML = "<strong><i class = 'fas fa-spinner fa-spin'></i> Changing Password...</strong>"
    var preset = {};
    preset["otp"] = $scope.resetuser.resetotp;
    preset["password"] = SHA256($scope.resetuser.password);
    preset["country_code"] = $scope.resetuser.resetcc;
    preset["mobile"] = $scope.resetuser.resetmobile;
    setTimeout(function(){
      $http({
        method : "POST",
        url : "https://auth.unluckily34.hasura-app.io/v1/providers/mobile-password/reset-password",
        data: JSON.stringify(preset),
        withCredentials : true,
        headers:{
          'Content-type' : 'application/json'
        }
      }).then(function mySuccess(response){
        document.getElementById('rstpwdbtn').innerHTML = "<strong>Reset Password</strong>"
        sunNotify("<strong>"+response.data.message+"</strong>","alert-success");
        setTimeout(function () {
          goindex();
        }, 3000);
      },function myError(response){if(response.message === "invalid authorization token"){
      if(loggingout === 0){
        sunNotify("<strong>Please Relogin</strong>","alert-danger");
        $scope.logout();
      }
    }else{
        document.getElementById('rstpwdbtn').innerHTML = "<strong>Reset Password</strong>"
        sunNotify("<strong>"+response.data.message+"</strong>","alert-danger");
      }
      });
    },3000);
    }
    $scope.cmprpwd = function(){
      if($scope.resetuser.cnfpassword != $scope.resetuser.password){
        document.getElementById('resetpwdmatch').classList.remove("hidden");
        document.getElementById("rstpwdbtn").disabled = "disabled";
      }
      else{
        document.getElementById('resetpwdmatch').classList.add("hidden");
        document.getElementById("rstpwdbtn").disabled = "";
      }
    }
});
var profileApp = angular.module("profileApp",[]);
profileApp.controller("profileCtrl",function($scope,$http){
  var hasura_id = getCookie("hasura_id");
  $scope.newuser = {};
  $scope.days = [];
  for(var i = 1;i<=31;i++){
    $scope.days[i-1] = i;
  }
  $scope.months = [31,28,31,30,31,30,31,31,30,31,30,31];
  $scope.monthnames = [{"num":1,"nam":"January"},{"num":2,"nam":"February"},{"num":3,"nam":"March"},{"num":4,"nam":"April"},{"num":5,"nam":"May"},{"num":6,"nam":"June"},{"num":7,"nam":"July"},{"num":8,"nam":"August"},{"num":9,"nam":"September"},{"num":10,"nam":"October"},{"num":11,"nam":"November"},{"num":12,"nam":"December"}];
  $scope.years = [];
  for(var i = 0;i<62;i++){
    $scope.years[i] = (2000-i);
  }
  $scope.profileSetup = function(newuser){
    proggy(90);
    document.getElementById("proupbutton").innerHTML = "<strong><i class = 'fa fa-spinner fa-spin'></i> Setting Up Profile...</strong>";
    document.getElementById("proupbutton").classList.remove("btn-info");
    document.getElementById("proupbutton").classList.add("btn-warning");
    var prodata = {};
    prodata["type"] = "insert";
    prodata["args"] = {};
    setTimeout(function(){
      prodata["args"]["table"] = "profile";
      prodata["args"].objects = [{
        "id" : parseInt(getCookie("hasura_id")),
        "fname" : newuser.firstname,
        "lname" : newuser.lastname,
        "username" : newuser.username,
        "dob":(""+newuser.year+"/"+newuser.month+"/"+newuser.day),
        "earthshine" : 0,
        "healthshine" : 0,
        "charityshine" : 0,
        "socialshine" : 0,
        "shine" : 0,
        "level" : 0,
        "proimg" : getCookie("proimage")
      }];
      //////console.log(JSON.stringify(prodata));
      //Call JSON API for signup
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data: JSON.stringify(prodata),
        withCredentials : true,
        headers:{
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
        }
      }).then(function mySuccess(response){
        proggy(100);
        document.getElementById("proupbutton").innerHTML = "<strong>Profile Updated!!!</strong>";
        document.getElementById("proupbutton").classList.remove("btn-warning");
        document.getElementById("proupbutton").classList.add("btn-success");
        sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Account Ready !!! Logging you in<strong>","alert-success");
        //////console.log(response);
        setTimeout(function () {
          window.location = "/?mode=home";
        }, 3000);
      },function myError(response){
        proggy(0);
        alert("Trouble setting up profile "+response.data.message);
        //////console.log(response);
      });
    },5000);
  }
  $scope.getPicLink = function(newuser){
    var x = new XMLHttpRequest();
    x.onreadystatechange = function(){
      if(x.readyState == 4 && x.status == 200){
        proggy(70);
        var doc = x.responseText;
        piclink =(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[1]).concat(":",(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[2])).replace(/"/g,"").replace(/}/g,"");
        //////console.log(piclink);
        setCookie("proimage",piclink);
        $scope.profileSetup(newuser);
        //document.getElementById('picbutton').display = "none";
        }
        else {
          proggy(70);
          if(x.readyState === 4){
            sunNotify("<strong>Could'nt get your Google profile picture. We'll try again the next time you log in..</strong>","alert-danger");
            setCookie("proimage","css/propic.png");
            $scope.profileSetup(newuser);
          }
        }
      }
        x.open('GET','https://picasaweb.google.com/data/entry/api/user/'.concat((getCookie("email")).split("@")[0],"?alt=json"),true);
        x.send();
  }
  $scope.userSetup = function(newuser){
    proggy(30);
    document.getElementById("proupbutton").innerHTML = "<strong><i class = 'fa fa-spinner fa-spin'></i>Setting Up User Account...</strong>";
    document.getElementById("proupbutton").disabled = "disabled";
    document.getElementById("proupbutton").classList.remove("btn-default");
    document.getElementById("proupbutton").classList.add("btn-info");
    var usedata = {};
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "users";
    usedata["args"].objects =  [{
        "hasura_id":parseInt(getCookie("hasura_id")),
        "mobile" : getCookie("mobile")
      }];
    //////console.log(JSON.stringify(usedata));

    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(50);
      document.getElementById('verifybutton').value = "Verified!! User added to Database!! Creating Profile...";
      //////console.log(response);
      setCookie("proimage","css/propic.png");
      $scope.profileSetup(newuser);
    },function myError(response){
      if(response.data["error"].split(".")[0] === "Uniqueness violation"){
        sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> User Account already setup...Setting up Profile</strong>","alert-info");
        $scope.getPicLink(newuser);
        //////console.log(response);
      }
      else{
        sunNotify("Trouble setting up account..."+response.data);
        $scope.logout();
      }
      //$scope.logout();
    });
  }
  $scope.logout = function(){
    sunNotify("<strong>Logging Out please wait</strong>","alert-warning");
    document.getElementById('prologoutbutton').innerHTML = "<strong>Logging Out...</strong>";
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      //////console.log(response.data);

      document.getElementById("loginbutton").classList.remove("hidden");
      document.getElementById('loggydiv').classList.add("yesshow");
      setTimeout(clearCookies,3000);
      clearCookies();
    },function myError(response){
      document.getElementById('loggydiv').innerHTML = "Trouble Logging Out";
      document.getElementById('loggydiv').classList.add("yesshow");
      setTimeout(function(){
        document.getElementById('loggydiv').classList.remove("yesshow");
        setTimeout(function(){
          clearCookies();
        },3000);
      },3000);
      document.getElementById('logoutbutton').innerHTML = "Log Out";
      //////console.log(JSON.stringify(response));
    });
  }
  $scope.leapyear = function(year){
    if(year % 400 == 0){
      return true;
    }
    else if(year % 100 == 0){
      return false;
    }
    else if(year % 4 == 0){
      return true;
    }
    else{
      return false;
    }
  }
  $scope.showdate = function(){
    if($scope.newuser.day > 28 && $scope.newuser.month == 2){
      if($scope.leapyear($scope.newuser.year) && $scope.newuser.day == 29){
        document.getElementById("proupbutton").disabled = "";
        document.getElementById("datevalid").classList.add("hidden");
      }
      else{
        document.getElementById("proupbutton").disabled = "disabled";
        document.getElementById("datevalid").classList.remove("hidden");
      }
    }
    else if($scope.newuser.day > $scope.months[$scope.newuser.month -1]){
      document.getElementById("proupbutton").disabled = "disabled";
      document.getElementById("datevalid").classList.remove("hidden");
    }
    else{
      document.getElementById("proupbutton").disabled = "";
      document.getElementById("datevalid").classList.add("hidden");
    }
    //////console.log("\n"+$scope.newuser.day+"/"+$scope.newuser.month+"/"+$scope.newuser.year);
  }
});
var loginmodule = angular.module("loginApp",[]);
loginmodule.controller("loginCtrl",function($scope,$http){
$scope.user = {};
$scope.pwdReset = function(){
  proggy(30);
  if($scope.user.primarykey != "" || $scope.user.primarykey != null){
    proggy(60);
    document.getElementById("resetpwd").innerHTML = "<strong><i class = 'fas fa-spinner fa-spin'></i> Sending token to Email...</strong>";
    var preset = {};
    preset["mobile"] = $scope.user.primarykey;
    if($scope.user.cc.includes("+")){
        preset["country_code"] = $scope.user.cc.split("+")[1];
    }else{
      preset["country_code"] = $scope.user.cc;
    }
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/providers/mobile-password/forgot-password",
      data: JSON.stringify(preset),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(function mySuccess(response){
      proggy(100);
      document.getElementById("resetpwd").innerHTML = "<strong>Forgot Password</strong>";
      sunNotify("<strong>"+response.data.message+"</strong>","alert-success");
      setTimeout(function () {
        proggy(0);
        window.location = "/?mode=resetpassword";
      }, 1000);
    },function myError(response){
      proggy(0);
      document.getElementById("resetpwd").innerHTML = "<strong>Forgot Password</strong>";
      sunNotify("<strong>"+response.data.message+"</strong>","alert-danger");
    });
  }
}
$scope.profileUpdate = function(field,value){
  var proupdata = {};
  proupdata["type"] = "update";
  proupdata["args"] = {};
  proupdata["args"]["table"] = "profile";
  proupdata["args"]["$set"] = {};
  proupdata["args"]["$set"][field] = value;
  proupdata["args"]["where"] = {"id" : getCookie("hasura_id")};
    /*"table" : "profile",
    "$set" : {field : value},
    "where" : {"id" : getCookie("hasura_id")}
  };*/
  //////console.log([proupdata]);
  $http({
    method : "POST",
    url : "https://data.unluckily34.hasura-app.io/v1/query",
    data: JSON.stringify(proupdata),
    withCredentials : true,
    headers:{
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
    }
  }).then(function mySuccess(response){
    sunNotify("<strong>Your profile picture was updated!!! Logging you In...</strong>","alert-success");
    $scope.getUserProfile();
  },function myError(response){
    sunNotify("Couldn't Update your profile picture Logging you In...</strong>","alert-danger");
    setTimeout(function(){gohome();},3000);
  })
};
$scope.updateDP = function(){
  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.readyState == 4 && x.status == 200){
      var doc = x.responseText;
      piclink =(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[1]).concat(":",(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[2])).replace(/"/g,"").replace(/}/g,"");
      //////console.log(piclink);
      $scope.profileUpdate("proimage",piclink);
      }
      else {
        if(x.readyState === 4){
          sunNotify("<strong>Could'nt get your Google profile picture. We'll try again the next time you log in..</strong>","alert-danger");
          setCookie("proimage","");
          setTimeout(function () {
            sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Preparing your page...</strong>","alert-info");
            setTimeout(function () {
              window.location = "/home.php?mode=home";
            }, 3000);
          }, 3000);

        }
      }
    }
      x.open('GET','https://picasaweb.google.com/data/entry/api/user/'.concat((getCookie("email")).split("@")[0],"?alt=json"),true);
      x.timeout = 10000;
      x.ontimeout = function(e){
        alert("Couldn'nt connect to server. Please check if you have a working internet connection and refresh the page");
      }
      x.send();
}
$scope.getUserInfo = function(){
  console.log(getCookie("auth_token"));
  $http({
    method : "GET",
    url : "https://auth.unluckily34.hasura-app.io/v1/user/info",
    withCredentials : true,
    headers : {
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
    }
  }).then(function mySuccess(response){
    proggy(100);
    //////console.log(response.data.username);
    setCookie("mobile",response.data.mobile);
    setTimeout(function () {
      window.location="/?mode=setup";
    }, 3000);
  },function myError(response){
    sunNotify("<strong>response</strong>","danger");
    setTimeout(function () {
      $scope.logout();
    }, 3000);
  });
}
$scope.getUserProfile = function(){
  proggy(90);
  var hasura_id = getCookie("hasura_id");
  var userdata = {};
  userdata["type"] = "select";
  userdata["args"] = {};
  //////console.log(getCookie("hasura_id"));
  userdata["args"]["table"] = "users";
  userdata["args"]["columns"] = [];
  userdata["args"]["columns"]=["*"];
  userdata["args"]["columns"][1]={};
  userdata["args"]["columns"][1]["name"] = "profile";
  userdata["args"]["columns"][1]["columns"] = ["*"];
  userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
  //////console.log(JSON.stringify(userdata));
  $http({
    method : "POST",
    url : "https://data.unluckily34.hasura-app.io/v1/query",
    data : JSON.stringify(userdata),
    withCredentials : true,
    headers : {
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
    }
  }).then(function mySuccess(response){
    //////console.log(response);
    proggy(100);
    //////console.log(response);
      if(response.data.length === 0 || response.data[0]["profile"].length === 0 ){
        sunNotify("<strong>Welcome!! Let's quickly setup your Profile</strong>","alert-info");
        $scope.getUserInfo();
      }
      else{
        setCookie("email",response.data[0].email);
        setCookie("userdata",JSON.stringify(response.data));
        //////console.log(getCookie("userdata"));
        //////console.log(getCookie("email"));
        //////console.log(response.data[0]["profile"][0].proimg);
        if(response.data[0]["profile"][0].proimg === "" && getCookie("email").split("@")[1] === "gmail.com"){
        sunNotify("<strong>No profile picture saved, Looks like you have a gmail ID, we will add your Google Profile photo as your Sunshine profile photo...hang on</strong> ","alert-info");
        setTimeout(function(){
          $scope.updateDP();
        },3000);
        }
        else{
          setCookie("proimage",response.data[0]["profile"][0].proimg);
          sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Loading Page...</strong>","alert-warning");
          setTimeout(function(){
            window.location = "/?mode=home";
          },3000);
        }
      }


  },function myError(response){
    proggy(50);
    sunNotify(response.data.message,"alert-danger");
    setTimeout(function () {
      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i>Reconnecting...","alert-danger");
        $scope.getUserProfile();
    }, 3000);
  });
}
  var logindata = {};

    $scope.login = function(){
    proggy(10);
    document.getElementById('loginbutton').innerHTML = "<strong><i class = 'fa fa-spinner fa-spin'></i> Logging In...</strong>";
    document.getElementById('loginbutton').disabled = "disabled";
    var pkeyfield;
    logindata.provider = "mobile-password";
    logindata.data = {};
    logindata.data.mobile = $scope.user.primarykey;
    pkeyfield = "mobile";
    if($scope.user.cc.includes("+")){
        logindata.data.country_code = $scope.user.cc.split("+")[1];
    }else{
      logindata.data.country_code = $scope.user.cc;
    }
    logindata.data.password = SHA256($scope.user.password);
    //make API Request Data package
    //////console.log(JSON.stringify(logindata));
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/login",
      data: JSON.stringify(logindata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(function mySuccess(response){
      ////console.log(response);
      proggy(50);
      setCookie("pkeyfield",pkeyfield);
      setCookie(pkeyfield,$scope.user.primarykey);
      sunNotify("<strong> Successfully Logged In !!!</strong>","alert-success");
      //notifyCookie();
      setCookie("password",logindata.password);
      setCookie('hasura_id',response.data.hasura_id);
      setCookie('auth_token',response.data.auth_token);
      setTimeout(function () {
        proggy(70);
        $scope.getUserProfile();
      }, 3000);
      //Retrieve profile Info
      //////console.log(response.data);
      //setTimeout(function(){
        //
      //},3000);
    },function myError(response){
      proggy(0);
      errmsg = "";
      if(!response.data){
        errmsg = "Please check your internet connection";
      }
      else{
        errmsg = JSON.stringify(response.data.message);
      }
      sunNotify("<strong>Trouble Logging in....."+errmsg+"</strong>","alert-danger");
      document.getElementById('loginbutton').disabled = "";

      document.getElementById("loginbutton").classList.remove("hidden");
      document.getElementById('loginbutton').innerHTML = "<strong>Log In</strong>";
    });
  }
  $scope.logout = function(){
    proggy(30);
    sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out please wait</strong>","alert-warning");
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(60);
      //////console.log(response.data);

      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out</strong>","alert-info");
      setTimeout(function(){
        document.getElementById('loggydiv').classList.remove("yesshow");
        document.getElementById("loginbutton").classList.remove("hidden");
      },6000);
      document.getElementById("logindiv").classList.remove("hidden");
      document.getElementById('logoutbutton').innerHTML = "Log Out";
      clearCookies();
    },function myError(response){
      sunNotify("<strong>Trouble Logging Out !!</strong>","alert-danger");
      setTimeout(function(){
        document.getElementById('loggydiv').classList.remove("yesshow");
      },3000);
      document.getElementById('logoutbutton').innerHTML = "Log Out";
      //////console.log(JSON.stringify(response));
      clearCookies();

    });
  }
});

var itcApp = angular.module('itcApp',[]);
itcApp.controller("itcCtrl" , function($scope){
  $scope.loggy = function(){
    alert("Called");
    //////console.log($scope.file);
  }
});
function signupPicLink(mail){

  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.readyState == 4 && x.status == 200){
      var doc = x.responseText;
      piclink =(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[1]).concat(":",(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[2])).replace(/"/g,"").replace(/}/g,"");
      //////console.log(piclink);
      setCookie('piclink',piclink);
      //document.getElementById('picbutton').display = "none";
      }
      else {
        if(x.readyState === 4){
          //////console.log(x.responseText);
          alert("Could'nt get your Google pic  ");
        }
      }
    }
      x.open('GET','https://picasaweb.google.com/data/entry/api/user/'.concat((mail).split("@")[0],"?alt=json"),true);
      x.timeout = 10000;
      x.ontimeout = function(e){
        alert("Couldn'nt connect to server. Please check if you have a working internet connection and refresh the page");
        document.getElementById('shinelay').classList.remove("showshine");
      }
      x.send();
}
function otpBootUp(){
  document.getElementById('otpForm').classList.remove("hidden");
  document.getElementById('verifybutton').classList.remove("btn-success");
  document.getElementById('verifybutton').classList.add("btn-primary");
  document.getElementById('verifybutton').value = "Verify OTP";
  document.getElementById("signupform").classList.add("hidden");
  document.getElementById("loginform").classList.add("hidden");
  document.getElementById("resetForm").classList.add("hidden");
}
function otpShutDown(){
  document.getElementById('otpForm').classList.add("hidden");
  document.getElementById('verifybutton').classList.remove("btn-success");
  document.getElementById('verifybutton').classList.add("btn-primary");
  document.getElementById('verifybutton').value = "Verify OTP";
  document.getElementById("signupform").classList.add("hidden");
}
function waitForEmail(em,pwd,$http){
  signupFormDown();
  var setupLoginData = {};
  setupLoginData.email = em;
  setupLoginData.password = pwd;
  //////console.log("Logging in to check email verification");
  //////console.log(JSON.stringify(setupLoginData));
  $http({
    method : "POST",
    url : "https://auth.unluckily34.hasura-app.io/login",
    data: JSON.stringify(setupLoginData),
    withCredentials : true,
    headers:{
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
    }
  }).then(function mySuccess(response){
},function myError(response){
  if(response.data["error-code"] != "verify-mobile"){
      //////console.log("Not verified");
      sunNotify("<strong>Waiting for EMAIL VERIFICATION</strong>","alert-info")
      //////console.log(response.data["error-code"]);
      //////console.log("Waiting for a bit till we recheck");
      setTimeout(function(){
        waitForEmail(em,pwd,$http);
      },3000);
  }
  else if(response.data["error-code"] === "verify-mobile"){
    setTimeout(function () {
      //////console.log("Email verified");
      //////console.log(response.data["error-code"]);
      otpBootUp();
    }, 3000);
  }
});
}
var muserProfileApp = angular.module('muserProfileApp',[]);
muserProfileApp.controller("muserProfileCtrl",function($scope,$http){
  $scope.mnewdp = {};
  $scope.profileUpdate = function(field,value){
    sunNotify("<i class = 'fa fa-spinner fa-spin'></i><strong> Updating Profile</strong>","alert-info");
    ////console.log("uploading");
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "profile";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"][field] = value;
    proupdata["args"]["where"] = {"id" : getCookie("hasura_id")};
    //////console.log([proupdata]);
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      document.getElementById("newdp").value = "";
      $scope.changeDP();
      proggy(80);
      sunNotify("<strong>Your profile picture was updated!!! </strong>","alert-success");
      document.getElementById('meditbutton').innerHTML = '<label id = "labelmnewdp" for="mnewdp"><i class="attach-doc fa fa-edit fa-2x" aria-hidden="true"></i></label><input class = "hidden form-control" id = "mnewdp" type = "file" accept = "image/gif,image/jpeg,image/x-png" onchange="angular.element(this).scope().deleteDP()" ng-model = "mnewdp"/>';
      document.getElementById("meditbutton").classList.add("msettings");
      $scope.getUserProfile();
    },function myError(response){
      sunNotify("Couldn't Update your profile picture</strong>","alert-danger");
      setTimeout(function(){gohome();},3000);
    })
  };
  $scope.uploadDP = function(file){
  sunNotify("<i class = 'fa fa-spinner fa-spin'></i> <strong>Uploading...</strong>","alert-warning");
  for(i = 0;i<100;i++){
    proggy(30+(i/1000));
  }
  var date = new Date();
  var dpurl = "https://filestore.unluckily34.hasura-app.io/v1/file/"+JSON.parse(getCookie("userdata"))[0].hasura_id+"-"+date.getTime();
    ////console.log(dpurl);
    $http({
      method : "POST",
      url : dpurl,
      data: file,
      withCredentials : true,
      headers:{
        'Content-type' : 'image/jpg','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(60);
      ////console.log(response);
      $scope.profileUpdate("proimg",dpurl);
    },function myError(response){
      proggy(0);
      ////console.log(response);
      sunNotify("<Strong>Couldn't Update your profile picture"+response.data.message+"</strong>","alert-danger");
    });
  //  $scope.profileUpdate("proimage",response);
  }
  $scope.deleteDP = function(){
    var file = document.getElementById("mnewdp").files[0];
    if(file.size < 4*1024*1024){
      if(document.getElementById("mnewdp").value!= "" || document.getElementById("mnewdp").value != null){
        sunNotify("<i class = 'fa fa-spinner fa-spin'></i> <strong>Preparing Upload...</strong>","alert-info");
        proggy(10);
        document.getElementById("meditbutton").classList.remove("msettings");
        document.getElementById('labelmnewdp').innerHTML = "<i class = 'fa fa-spinner fa-spin'></i>";
        var dpurl = JSON.parse(getCookie("userdata"))[0].profile[0].proimg;
        $http({
          method : "DELETE",
          url : dpurl,
          withCredentials : true,
          headers:{
          'Authorization' : 'Bearer '+getCookie("auth_token")
          }
        }).then(function mySuccess(response){
          proggy(30);
          setTimeout(function () {
            $scope.uploadDP(file);
          }, 3000);
        },function myError(response){
          ////console.log(response);
          if( response.data === null || response.data.code === "not_found"){
            proggy(30);
              sunNotify("<strong>Hey it's your first Upload !!! </strong>","alert-warning");
              setTimeout(function () {
                $scope.uploadDP(file);
              }, 3000);
          }
          else{
            proggy(0);
              sunNotify("<strong>Hey it's your first Upload !!! </strong>","alert-warning");
              setTimeout(function () {
                $scope.uploadDP(file);
              }, 3000);
          }
        });
      }
      else{
        alert("no change");
      }
    }
    else{
      sunNotify("<strong>File size too large...</strong>","alert-danger");
    }
  }
  $scope.changeDP = function(){
    var newdp = document.getElementById("mnewdp");
    if(newdp.classList.contains("hidden")){
      newdp.classList.remove("hidden");
    }
    else{
      newdp.classList.add('hidden');
    }
  }
  $scope.logout = function(){
    proggy(30);
    document.getElementById("user_commands").innerHTML += "<i class = 'fa fa-spinner fa-spin'></i>";
    document.getElementById("mlogoutbutton").innerHTML = "<i class = 'fa fa-spinner fa-spin'></i><strong> Logging Out... </strong>";
    //////console.log("Sent Logout request...waiting");
    sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out please wait</strong>","alert-warning");
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(100);
      //////console.log("Logged Out");
      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out</strong>","alert-info");
      setTimeout(function(){
        setTimeout(clearCookies(),3000);
      },3000);
    },function myError(response){
      proggy(30);
      ////console.log(response);
      if(response.data.message === "invalid authorization token"){
        setTimeout(function(){
          clearCookies();
        },3000);
      }
      else{
        //////console.log("Not Logged Out Properly");
        sunNotify("<strong>Trouble logging out","alert-danger");
        setTimeout(function(){
          setTimeout(clearCookies(),6000);
        },3000);
        //////console.log(JSON.stringify(response));
      }
    });
  }
  $scope.getUserProfile = function(){
    proggy(90);
    var hasura_id = getCookie("hasura_id");
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    //////console.log(getCookie("hasura_id"));
    userdata["args"]["table"] = "users";
    userdata["args"]["columns"] = [];
    userdata["args"]["columns"]=["*"];
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "profile";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
    //////console.log(JSON.stringify(userdata));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(100);
      setTimeout(function () {
        proggy(0);
      }, 1000);
      ////console.log(response.data);
      //////console.log(response);
      var dob = new Date(response.data[0].profile[0].dob);
      days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      document.getElementById("profilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("mprofilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("user_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      document.getElementById("muser_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      if(response.data[0].profile[0].proimg === "" || response.data[0].profile[0].proimg === null){
          document.getElementById("user_commands").style = "background-image : url('/css/propic.png');";
      }
      setCookie("userdata",JSON.stringify(response.data));
      var template = "<strong><h3><span class = 'badge level'>Level "+response.data[0].profile[0].level+"</span></h3><h4><span class = 'badge shine'>Shine "+response.data[0].profile[0].shine+"</span></h4><p>"+response.data[0].profile[0].username+"<br></p></strong>";
      document.getElementById("userinfo").innerHTML=template;
      document.getElementById("muserinfo").innerHTML=template;
      document.getElementById("user_commands").title = response.data[0].profile[0].username;
    },function myError(response){
      proggy(0);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
  //$scope.getUserProfile();
});
var userProfileApp = angular.module('userProfileApp',[]);
userProfileApp.controller("userProfileCtrl",function($scope,$http){
  $scope.cancelRequest = function(id){
    var usedata = {};
    usedata["type"] = "delete";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"]["where"] = {};
    usedata["args"]["where"]["recid"] = id;
    usedata["args"]["where"]["reqid"] = getCookie("hasura_id");
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      $scope.sugcount = "";
      ////console.log("Cancelled Request");
      $scope.searchUsers();
    },function myError(response){
      ////console.log("Failed to Cancel Request");
    });
  }
  $scope.addFriend = function(id){
    var usedata = {};
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"].objects =  [{
        "reqid":parseInt(getCookie("hasura_id")),
        "recid":id,
      }];
    //////console.log(JSON.stringify(usedata));

    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      $scope.sugcount = "";
      sunNotify("<strong>Request Sent !!!</strong>","alert-success");
      $scope.searchUsers();
      document.getElementById("searchip").value = "";
    },function myError(response){
      ////console.log(response);
    });
  }
  $scope.checkRequests = function(id,each,searchlist){
      if(each.profile.length > 0){
        if(each.profile[0].requests.length === 1){
          searchlist += "<li class = 'follows alert alert-info'><button onclick = 'angular.element(this).scope().cancelRequest("+each.profile[0].id+");' title = 'Cancel Request' class ='btn btn-info btn-sm' type = 'button'><i class='fas fa-minus-circle'></i></button> <img src= '"+each.profile[0].proimg+"' alt = 'No Image' class = 'chatdp'/> <strong>"+each.profile[0].username+"</strong></li>";
          document.getElementById("followlist").innerHTML += searchlist;
        }
        else if(each.profile[0].requests.length === 0){
          $scope.sugcount++;
          searchlist += "<li class = 'follows alert alert-info'><button onclick = 'angular.element(this).scope().addFriend("+each.profile[0].id+");' title = 'Add friend' class = 'btn btn-info btn-sm' type = 'button'><i class = 'fas fa-user-plus'></i></button> <img src= '"+each.profile[0].proimg+"' alt = 'No Image' class = 'chatdp'/><strong>"+each.profile[0].username+"</strong> </li>";
          document.getElementById("followlist").innerHTML += searchlist;
        }
      }
  }
  $scope.checkFriend = function(id,each,searchlist){
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "profile"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["columns"][1] = {};
    userdata["args"]["columns"][1]["name"] = "myfriends";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["id"] = getCookie("hasura_id");
    userdata["args"]["where"]["myfriends"] = {};
    userdata["args"]["where"]["myfriends"]["friend_id"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      if(response.data.length > 0){
        if(response.data[0].myfriends.length > 0){
        }
        else{
          $scope.checkRequests(id,each,searchlist);
        }
      }
      else{
        $scope.checkRequests(id,each,searchlist);
      }
    },function myError(response){
    })
  }
  $scope.sugcount = "";
  $scope.searchUsers = function(){
    $scope.sugcount = "";
      var searchlist = "";
      var userdata = {};
      userdata["type"] = "select";
      userdata["args"] = {};
      userdata["args"]["table"] = "users";
      userdata["args"]["limit"] = 5;
      userdata["args"]["order_by"] = "-hasura_id";
      userdata["args"]["columns"] = ["*"];
      userdata["args"]["columns"][1] = {};
      userdata["args"]["columns"][1]["name"] = "profile";
      userdata["args"]["columns"][1]["columns"] = ["*"];
      userdata["args"]["columns"][1]["columns"][1] = {};
      userdata["args"]["columns"][1]["columns"][1]["name"] = "myfriends";
      userdata["args"]["columns"][1]["columns"][1]["columns"] = ["*"];
      userdata["args"]["columns"][1]["columns"][2] = {};
      userdata["args"]["columns"][1]["columns"][2]["name"] = "requests";
      userdata["args"]["columns"][1]["columns"][2]["columns"] = ["*"];
      userdata["args"]["columns"][1]["columns"][2]["where"] = {};
      userdata["args"]["columns"][1]["columns"][2]["where"]["reqid"] = getCookie("hasura_id");
      userdata["args"]["where"] = {};
      userdata["args"]["where"]["$and"] = [{}];
      userdata["args"]["where"]["$and"][0] = {};
      userdata["args"]["where"]["$and"][1] = {};
      userdata["args"]["where"]["$and"][2] = {};
      userdata["args"]["where"]["$and"][0]["hasura_id"] = {};
      userdata["args"]["where"]["$and"][0]["hasura_id"]["$neq"] = getCookie("hasura_id");
      userdata["args"]["where"]["$and"][1]["$not"] = {};
      userdata["args"]["where"]["$and"][1]["$not"]["profile"] = {};
      userdata["args"]["where"]["$and"][1]["$not"]["profile"]["myfriends"] = {};
      userdata["args"]["where"]["$and"][1]["$not"]["profile"]["myfriends"]["friend_id"] = getCookie("hasura_id");

      //////console.log(JSON.stringify(userdata));
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(userdata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
        }
      }).then(function mySuccess(response){
        var userlist = response.data;
        if(userlist.length === 0){
          searchlist = "<li class = 'follows alert alert-info'>No Suggestions for now</li>";
          document.getElementById("followlist").innerHTML = searchlist;
        }
        else{
          document.getElementById("followlist").innerHTML = "";
          for(each of userlist)
          {
            $scope.checkRequests(each.id,each,searchlist);
          }
        }
        if($scope.sugcount === 0 || $scope.sugcount === ""){
          $scope.sugcount = "";
        }else{
          $scope.sugcount = "+ "+$scope.sugcount;
        }
      },function myError(response){
        if(response.data === null){
          document.getElementById("followlist").innerHTML = "";
          sunNotify("<strong>Check your internet connection</strong>","alert-danger");
        }
        else if(response.data.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
          document.getElementById("followlist").innerHTML = "";
        }
        else{
          document.getElementById("followlist").innerHTML = "";
          sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
        }
      });
  }
  document.getElementById("followlist").innerHTML = "<li class = 'alert alert-info'><strong><i class = 'fa fa-spinner fa-spin'></i> Loading...</strong><li>";
  $scope.searchUsers();
  $scope.newdp = {};
  $scope.profileUpdate = function(field,value){
    ////console.log("uploading");
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "profile";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"][field] = value;
    proupdata["args"]["where"] = {"id" : getCookie("hasura_id")};
    //////console.log([proupdata]);
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      document.getElementById("newdp").value = "";
      $scope.changeDP();
      proggy(80);
      sunNotify("<strong>Your profile picture was updated!!! </strong>","alert-success");
      document.getElementById('editbutton').innerHTML = '<label id = "labelnewdp" for="newdp"><i class="attach-doc fa fa-edit fa-2x" aria-hidden="true"></i></label><input class = "hidden form-control" id = "newdp" type = "file" accept = "image/gif,image/jpeg,image/x-png" onchange="angular.element(this).scope().deleteDP()" ng-model = "newdp"/>';
      document.getElementById("editbutton").classList.add("settings");
      $scope.getUserProfile();
    },function myError(response){
      sunNotify("Couldn't Update your profile picture</strong>","alert-danger");
      setTimeout(function(){gohome();},3000);
    })
  };
  $scope.uploadDP = function(file){
    console.log("entered method");
    sunNotify("<i class = 'fa fa-spinner fa-spin'></i> <strong>Uploading...</strong>","alert-warning");
    var date = new Date();
    var dpurl = "https://filestore.unluckily34.hasura-app.io/v1/file/"+JSON.parse(getCookie("userdata"))[0].hasura_id+"-"+date.getTime();
      ////console.log(dpurl);
      console.log("waiting for response");
      $http({
        method : "POST",
        url : dpurl,
        data: file,
        withCredentials : true,
        headers:{
          'Content-type' : 'image/jpg','Authorization' : 'Bearer '+getCookie("auth_token")
        }
      }).then(function mySuccess(response){
        console.log("success");
        console.log(response);
        proggy(60);
        ////console.log(response);
        $scope.profileUpdate("proimg",dpurl);
      },function myError(response){
        console.log("fail");
        proggy(0);
        console.log(response);
        sunNotify("<Strong>Couldn't Update your profile picture"+JSON.stringify(response)+"</strong>","alert-danger");
      })
  //  $scope.profileUpdate("proimage",response);
  }
  $scope.deleteDP = function(){
    var file = document.getElementById("newdp").files[0];
    if(file.size < 4*1024*1024){
      if(document.getElementById("newdp").value!= "" || document.getElementById("newdp").value != null){
        sunNotify("<i class = 'fa fa-spinner fa-spin'></i> <strong>Preparing Upload...</strong>","alert-info");
        proggy(10);
        document.getElementById("editbutton").classList.remove("settings");
        document.getElementById('labelnewdp').innerHTML = "<i class = 'fa fa-spinner fa-spin'></i>";
        var dpurl = JSON.parse(getCookie("userdata"))[0].profile[0].proimg;
        $http({
          method : "DELETE",
          url : dpurl,
          withCredentials : true,
          headers:{
          'Authorization' : 'Bearer '+getCookie("auth_token")
          }
        }).then(function mySuccess(response){
          proggy(30);
          setTimeout(function () {
            $scope.uploadDP(file);
          }, 3000);
        },function myError(response){
          ////console.log(response);
          if( response.data === null || response.data.code === "not_found"){
            proggy(30);
              sunNotify("<strong>Hey it's your first Upload !!! </strong>","alert-warning");
              setTimeout(function () {
                $scope.uploadDP(file);
              }, 3000);
          }
          else{
            proggy(0);
              sunNotify("<strong>Hey it's your first Upload !!! </strong>","alert-warning");
              setTimeout(function () {
                $scope.uploadDP(file);
              }, 3000);
          }
        })
      }
      else{
        alert("no change");
      }
  }
  else{
    sunNotify("<strong>File size too large...</strong>","alert-danger");
  }
  }
  $scope.changeDP = function(){
    var mnewdp = document.getElementById("newdp");
    if(newdp.classList.contains("hidden")){
      newdp.classList.remove("hidden");
    }
    else{
      newdp.classList.add('hidden');
    }
  }
  $scope.logout = function(){
    proggy(30);
    document.getElementById("user_commands").innerHTML += "<i class = 'fa fa-spinner fa-spin'></i>";
    //////console.log("Sent Logout request...waiting");
    sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out please wait</strong>","alert-warning");
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(100);
      //////console.log("Logged Out");
      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out</strong>","alert-info");
      setTimeout(function(){
        setTimeout(clearCookies(),3000);
      },3000);
    },function myError(response){
      proggy(30);
      ////console.log(response);
      if(response.data.message === "invalid authorization token"){
        setTimeout(function(){
          clearCookies();
        },3000);
      }
      else{
        //////console.log("Not Logged Out Properly");
        sunNotify("<strong>Trouble logging out","alert-danger");
        setTimeout(function(){
          setTimeout(clearCookies(),6000);
        },3000);
        //////console.log(JSON.stringify(response));
      }
    });
  }
  $scope.getUserProfile = function(){
    proggy(90);
    var hasura_id = getCookie("hasura_id");
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    //////console.log(getCookie("hasura_id"));
    userdata["args"]["table"] = "users";
    userdata["args"]["columns"] = [];
    userdata["args"]["columns"]=["*"];
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "profile";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
    //////console.log(JSON.stringify(userdata));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      proggy(100);
      setTimeout(function () {
        proggy(0);
      }, 1000);
      ////console.log(response.data);
      //////console.log(response);
      var dob = new Date(response.data[0].profile[0].dob);
      days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      document.getElementById("profilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("mprofilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("user_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      document.getElementById("muser_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      setCookie("userdata",JSON.stringify(response.data));
      var template = "<strong><h3><span class = 'badge level'>Level "+response.data[0].profile[0].level+"</span></h3><h4><span class = 'badge shine'>Shine "+response.data[0].profile[0].shine+"</span></h4><p>"+response.data[0].profile[0].username+"<br></p></strong>";
      document.getElementById("userinfo").innerHTML=template;
      document.getElementById("muserinfo").innerHTML=template;
      document.getElementById("user_commands").title = response.data[0].profile[0].username;
    },function myError(response){
      proggy(0);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
  $scope.getUserProfile();
});
var signupmodule = angular.module("signupApp",[]);
signupmodule.controller("signupCtrl",function($scope,$http){
  var globotp;
  $scope.newuser = {};
  if(location.search.split('mode=')!=""){
    if(location.search.split('mode=')[1].split(';')[0] === "otp"){
      signupFormUp();
      otpBootUp();
      $scope.newuser.otp = parseInt(location.search.split('mode=')[1].split(';')[1]);
    }
  }
  var data = {};
  $scope.setUpLogin = function(){
    var setupLoginData = {};
    setupLoginData.email = $scope.newuser.email;
    setupLoginData.password = SHA256($scope.newuser.password);
    //////console.log("Logging in to setup account");
    //////console.log(JSON.stringify(setupLoginData));
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/login",
      data: JSON.stringify(setupLoginData),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      //////console.log(response);
      setCookie("hasura_id",response.data.hasura_id);
      setCookie("auth_token",response.data.auth_token);
      document.getElementById('verifybutton').value = "Verified!! Accessing Database...";
      userSetup($scope,$scope.newuser,$http);
  },function myError(response){
    alert("Troule logging in to set up user profile");
    //////console.log(response);
  });
}

$scope.logout = function(){
  sunNotify("<strong>Logging Out please wait</strong>","alert-warning");
  document.getElementById("user_commands").innerHTML += "<i class = 'fa fa-spinner fa-spin'></i>";
  //Call JSON API for signup
  $http({
    method : "POST",
    url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
    withCredentials : true,
    headers : {
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
    }
  }).then(function mySuccess(response){
    //////console.log(response.data);

    document.getElementById("loginbutton").classList.remove("hidden");
    document.getElementById('loggydiv').classList.add("yesshow");
    setTimeout(clearCookies,3000);
    document.getElementById('logoutbutton').innerHTML = "Log Out";
    otpShutDown();
    loginFormUp();
  },function myError(response){
    document.getElementById("user_commands").innerHTML = '<img class = "img propic" src = "'+getCookie("proimage")+'" id = "propic" alt = "Could not Find your Pic"/>';
    document.getElementById('loggydiv').innerHTML = "Trouble Logging Out..."+response.message;
    document.getElementById('loggydiv').classList.add("yesshow");
    setTimeout(function(){
      document.getElementById('loggydiv').classList.remove("yesshow");
      setTimeout(function(){
        clearCookies();
      },3000);
    },3000);
    document.getElementById('logoutbutton').innerHTML = "Log Out";
    //////console.log(JSON.stringify(response));
  });
}
  $scope.cmprpwd = function(){
    if($scope.newuser.cnfpassword != $scope.newuser.password){
      document.getElementById('pwdmatch').classList.remove("hidden");
      document.getElementById("signupbutton").disabled = "disabled";
    }
    else{
      document.getElementById('pwdmatch').classList.add("hidden");
      document.getElementById("signupbutton").disabled = "";
    }
  }
  $scope.signup = function(){
    proggy(20);
    document.getElementById('loggydiv').classList.remove("hidden");
    document.getElementById('loggydiv').classList.add("blinkshow");
    document.getElementById('loggydiv').innerHTML = "<strong>Generating OTP</strong>";
    document.getElementById('loggydiv').classList.remove("alert-danger");
    document.getElementById('loggydiv').classList.add("alert-warning");
    document.getElementById('loggydiv').classList.remove("alert-success");
    document.getElementById('signupbutton').innerHTML = "<strong><i class = 'fa fa-spinner fa-spin'></i> Signing Up...</strong>";
    //get Form Values
    //////console.log(JSON.stringify($scope.newuser));

    //make API Request Data package
    data.provider = "mobile-password";
    data.data = {};
    data.data.mobile = $scope.newuser.mobile;
    if($scope.newuser.cc.includes("+")){
        data.data.country_code = $scope.newuser.cc.split("+")[1];
    }else{
      data.data.country_code = $scope.newuser.cc;
    }
    data.data.password = SHA256($scope.newuser.password);
    console.log(data);
  //////console.log(JSON.stringify(data));
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/signup",
      data: JSON.stringify(data),
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(function mySuccess(response){
      proggy(50);
      document.getElementById('loggydiv').classList.remove("blinkshow");
      //////console.log(response.data);
      document.getElementById("loggydiv").classList.add("alert-warning");
      document.getElementById('loggydiv').classList.add("yesshow");
      document.getElementById("loggydiv").innerHTML = "<strong>Please verify OTP</strong>";
      document.getElementById("loggydiv").classList.remove("alert-success");
      document.getElementById("loggydiv").classList.remove("alert-danger");
      setTimeout(function(){
        document.getElementById("loggydiv").classList.remove("yesshow");
      },3000);
      setTimeout(function(){
        sunNotify("<strong>Email Sent to "+data.data.mobile+" Click on the link in your sms to verify your mobile!!! </strong>","alert-info");
        proggy(70);
      },6000);
      setTimeout(function(){
        sunNotify("<strong>Your account is registered!!! Please Verify your OTP</strong>","alert-success");
        proggy(80);
      },9000);
      setTimeout(function(){
        window.location = "/?mode=otp";
      },12000);
      document.getElementById('signupbutton').innerHTML = "<strong>Sign Up</strong>";
      //Ready the OTP Service

    },function myError(response){
      document.getElementById('loggydiv').classList.remove("blinkshow");
      document.getElementById("loggydiv").classList.add("yesshow");
      document.getElementById("loggydiv").classList.add("alert-danger");
      console.log(response);
      document.getElementById("loggydiv").innerHTML = "<strong>Trouble Signing up ... "+response.data.detail.message.split(".")[0]+"</strong>";
      document.getElementById("loggydiv").classList.remove("alert-success");
      document.getElementById("loggydiv").classList.remove("alert-warning");
      document.getElementById('signupbutton').innerHTML = "<strong>Sign Up</strong>";
      setTimeout(function(){
        document.getElementById('loggydiv').classList.remove("yesshow");
      },3000);
      //////console.log(JSON.stringify(response));
      document.getElementById('signupbutton').value = "Sign Up";
    });
  }
  //OTP Service
  $scope.otpsubmit = function(){
    proggy(30);
    document.getElementById('verifybutton').innerHTML = "<strong><i class = 'fa fa-spinner fa-spin'></i> Verifying...</strong>";
    document.getElementById('verifybutton').disabled = "disabled";
    data.otp = $scope.newuser.otp;
    data.mobile = $scope.newuser.verimobile;
    var otpdata = {};
    otpdata.mobile = data.mobile+"";
    otpdata.otp = data.otp+"";
    if($scope.newuser.vericc.includes("+")){
        otpdata.country_code = $scope.newuser.vericc.split("+")[1];
    }else{
      otpdata.country_code = $scope.newuser.vericc;
    }
    //////console.log(JSON.stringify(otpdata));
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/providers/mobile-password/verify-otp",
      data : JSON.stringify(otpdata),
      headers : {
        'Content-type' : 'application/json'
      }
    }).then(function mySuccess(response){
      proggy(100);
      document.getElementById('verifybutton').classList.remove("btn-primary");
      document.getElementById('verifybutton').classList.add("btn-info");
      sunNotify("<strong>"+response.data["message"]+"</strong>","alert-success");
      //////console.log(JSON.stringify(response));
      setTimeout(function () {
        goindex();
      }, 2000);
    },function myError(response){
      proggy(0);
      sunNotify("Sorry OTP verification failed, <strong>"+response.data["message"]+"</strong>","alert-danger");
      document.getElementById('verifybutton').innerHTML = "<strong>Verify OTP</strong>";
      document.getElementById('verifybutton').disabled = "";
      //////console.log(JSON.stringify(response));
    });
  }
  $scope.resendotp = function(){
    proggy(30);
    document.getElementById('resendbutton').innerHTML = "<strong><i class = 'fa fa-spinner fa-spin'></i> Resending OTP</strong>";
    var resend = {};
    resend.mobile = ""+$scope.newuser.verimobile;
    if($scope.newuser.vericc.includes("+")){
        resend.country_code = $scope.newuser.vericc.split("+")[1];
    }else{
      resend.country_code = $scope.newuser.vericc;
    }
    //////console.log(resend);
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/providers/mobile-password/resend-otp",
      data : JSON.stringify(resend),
      headers : {
        'Content-type' : 'application/json'
      }
    }).then(function mySuccess(response){
      proggy(100);
      document.getElementById('resendbutton').innerHTML = "<strong>Resend OTP</strong>";
      sunNotify("<strong>"+response.data["message"]+"</strong>","alert-info");
      setTimeout(function () {
        proggy(0);
      }, 1000);
      //////console.log(JSON.stringify(response));
    },function myError(response){
      proggy(0);
      document.getElementById('resendbutton').innerHTML = "<strong>Resend OTP</strong>";
      sunNotify("<strong>"+response.data["message"]+"</strong>","alert-danger");
      //////console.log(JSON.stringify(response));
    });
  }
});
var shineTableApp = angular.module("shineTableApp",[]);
shineTableApp.controller("shineTableCtrl",function($scope,$http){
  $scope.oncount = "";
  $scope.newcount = "";
  $scope.checkChat = function(newchats){
    for(each of newchats){
      var newchaties = document.getElementsByClassName("newchat_"+each.friend_profile.id);
      if(each.friend_profile.sent.length != 0){
        if(document.getElementById("chathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" || document.getElementById("mchathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" ){
          $scope.getChats(each.friend_profile.id);
        }
        for(news of newchaties){
          news.innerHTML = each.friend_profile.sent.length;
          if(each.friend_profile.sent.length > 0){
            blinkTitle(each.friend_profile.fname);
          }
        }
      }else{
        if(document.getElementById("chathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" || document.getElementById("mchathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" ){
          $scope.getChats(each.friend_profile.id);
        }
        for(news of newchaties){
          news.innerHTML = "";
        }
      }
    }
    setTimeout(function () {
      $scope.online();
    }, 3000);
  }
  $scope.setSeen = function(id){
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "chats";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"]["seen"] = getCookie("mytime");
    proupdata["args"]["where"] = {"id" : id};
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      poppy = 0;
    },function myError(response){
      console.log("response");
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    return text;
  }
  $scope.getChats = function(id){

    var newchaties = document.getElementsByClassName("newchat_"+id);
    var userdata = {};
    var chatloglist = "";
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "chats"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["$or"] = [{}];
    userdata["args"]["where"]["$or"][0] = {};
    userdata["args"]["where"]["$or"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"] = [{}];
    userdata["args"]["where"]["$or"][0]["$and"][0] = {};
    userdata["args"]["where"]["$or"][0]["$and"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"][0]["id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][0]["$and"][1]["friend_id"] = id;
    userdata["args"]["where"]["$or"][1]["$and"] = [{}];
    userdata["args"]["where"]["$or"][1]["$and"][0] = {};
    userdata["args"]["where"]["$or"][1]["$and"][1] = {};
    userdata["args"]["where"]["$or"][1]["$and"][0]["friend_id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][1]["$and"][1]["id"] = id;
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "sender";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["columns"][2]={};
    userdata["args"]["columns"][2]["name"] = "recepient";
    userdata["args"]["columns"][2]["columns"] = ["*"];
    userdata["args"]["order_by"] = "-created";
    userdata["args"]["limit"] = "50";
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
        document.getElementById("sendchat").innerHTML = "Send";document.getElementById("msendchat").innerHTML = "Send";
        document.getElementById("chatlog").innerHTML = "";
        document.getElementById("mchatlog").innerHTML = "";
        if(response.data.length > 0){
          for(each of response.data.reverse()){
            if(each.sender.id === parseInt(getCookie("hasura_id")) && each.seen === null){
              chatloglist+="<li class = 'mychat'><strong>"+$scope.smilify(each.text)+"</strong><br>"+chat_ago(each.created)+"<br>Sent</li>";
            }else if(each.sender.id === parseInt(getCookie("hasura_id"))){
              chatloglist+="<li class = 'mychat'><strong>"+$scope.smilify(each.text)+"</strong><br>"+chat_ago(each.created)+"<br>Seen </li>";
            }else{
              chatloglist+="<li class = 'youchat'><strong>"+$scope.smilify(each.text)+"</strong><br>"+chat_ago(each.created)+"<br></li>";
              if(each.seen === null){
                $scope.setSeen(each.id);
              }
            }
          }
        document.getElementById("chatlog").innerHTML = chatloglist;
        document.getElementById("mchatlog").innerHTML = chatloglist;
        if(response.data[0].id != prevdataid){
          scrollChat();
          prevdataid = response.data[0].id;
      }
    }
    },function myError(response){
      sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      document.getElementById("userlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";
      document.getElementById("muserlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";////console.log(response);
      $scope.getRequests();
    });
  }
  $scope.maintainChat = function(){
    var chatlist = document.getElementById("chatlist");
    var chatApp = document.getElementById("chatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    var mchatlist = document.getElementById("mchatlist");
    var mchatApp = document.getElementById("mchatApp");
    if(chatlist.classList.contains("col-lg-4")){
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
    }
    else if(mchatlist.classList.contains("col-xs-4")){
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
    }
    else{
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
    }
}
  $scope.deleteRequest = function(id){
    var usedata = {};
    usedata["type"] = "delete";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"]["where"] = {};
    usedata["args"]["where"]["reqid"] = id;
    usedata["args"]["where"]["recid"] = getCookie("hasura_id");
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      //console.log("Accepted");
      $scope.getRequests();
    },function myError(response){
      ////console.log(response);
    });
  }
  $scope.acceptRequest = function(id1,id2){
    var acceptdata = {};
    acceptdata["type"] = "insert";
    acceptdata["args"] = {};
    acceptdata["args"]["table"] = "friends";
    acceptdata["args"].objects =  [{
        "id":id1,
        "friend_id":id2,
      }];
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(acceptdata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
        }
      }).then(function mySuccess(response){
        $scope.acceptRequest(id2,id1);
      },function myError(response){
        $scope.deleteRequest(id2);
      });
  }
  $scope.addonline = function(){
    var usedata = {};
    ////console.log(t);
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "status";
    usedata["args"].objects =  [{
        "id":parseInt(getCookie("hasura_id")),
        "status":"online",
      }];
      usedata["args"]["returning"] = ["created"];
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(usedata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
        }
      }).then(function mySuccess(response){
          setCookie("mytime",response.data.returning[0].created);
          $scope.getRequests();
        ////console.log("Added Online Status");
      },function myError(response){
        if(response.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
      }else{
        setTimeout(function () {
          $scope.addonline();
        }, 3000);
      }
        ////console.log("Failed to Add online");
        //console.log(response);
      });
  }
  $scope.online = function(){
    var statdata = {};
    statdata["type"] = "delete";
    statdata["args"] = {};
    statdata["args"]["table"] = "status";
    statdata["args"]["where"] = {"id" : getCookie("hasura_id")};
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(statdata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
        }
      }).then(function mySuccess(response){
        ////console.log(response);
        $scope.addonline();
      },function myError(response){
        if(response.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
      }else{
          setTimeout(function () {
            $scope.online();
          }, 3000);
        }
        ////console.log(response);
      });
  }
  var curlist = document.getElementById("userlist").innerHTML;
  $scope.getRequests = function(){
    var reqcount = 0;
    var newlist = "";
    ////console.log("\ngetting requests\n");
    var reqdata = {};
    reqdata["type"] = "select";
    reqdata["args"] = {};
    reqdata["args"]["table"] = "requests";
    reqdata["args"]["columns"]=["*"];
    reqdata["args"]["columns"][1] = {};
    reqdata["args"]["columns"][1]["name"] = "requester";
    reqdata["args"]["columns"][1]["columns"] = ["*"];
    reqdata["args"]["where"] = {};
    reqdata["args"]["where"]["recid"] = getCookie("hasura_id");
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(reqdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      document.getElementById("reqcount").innerHTML = "";
      list = "";
      for(each of response.data){
        document.getElementById("reqcount").innerHTML = ++reqcount;
        list += each.requester.fname+" ";
        newlist += "<li class = 'alert alert-info users' title = 'Accept Request from "+each.requester.fname+"'><span class = 'badge level'>"+each.requester.level+"</span><button onclick = 'angular.element(this).scope().acceptRequest("+each.recid+","+each.reqid+");' type = 'button' class = 'btn btn-primary btn-sm'><strong>Accept</strong></button> <button onclick = 'angular.element(this).scope().deleteRequest("+each.reqid+");' type = 'button' class = 'btn btn-danger btn-sm' title = 'Delete Request from "+each.requester.fname+"'><strong>Delete</strong></button> <img src = '"+each.requester.proimg+"' class = 'chatdp'/> <strong>"+each.requester.fname+"</strong></li><br>"
      }
      //console.log("\nrequests : "+reqcount+"\n notified : "+notif);
      if(reqcount > notif && reqcount > 0){
          $scope.getFriendsList(newlist);
          notifyMe("You have friend requests from "+list);
          notif = reqcount;
      }else if(reqcount < notif && reqcount > 0){
        $scope.getFriendsList(newlist);
          notifyMe("You have friend requests from "+list);
          notif = reqcount;
      }else{
          $scope.getFriendsList(newlist);
      }
    },function myError(response){
      if(response.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
    }else{
    }
      ////console.log(response);
    });
  }
  $scope.chatFunction = function(name,id){
    chatopen = 1;
    document.getElementById("chatlog").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> <strong>Getting Chats</strong>";
    document.getElementById("mchatlog").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> <strong>Getting Chats</strong>";
    var chatlist = document.getElementById("chatlist");
    var chatApp = document.getElementById("chatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    document.getElementById("chathead").innerHTML = "<strong>"+name+"</strong>";
    document.getElementById("chatrecid").value = id
    if(chatlist.classList.contains("col-md-12","col-lg-12","col-sm-12")){

      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
      chatApp.classList.remove("hidden");
      chatlist.classList.remove("col-md-12","col-lg-12","col-sm-12");
      chatlist.classList.add("col-md-4","col-lg-4","col-sm-4");
      $scope.getChats(id);
    }
    else{
      document.getElementById("chatbox").innerHTML = "";
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
      chatApp.classList.add("hidden");
      chatlist.classList.add("col-md-12","col-lg-12","col-sm-12");
      chatlist.classList.remove("col-md-4","col-lg-4","col-sm-4");
    }
  }
  var curlist = document.getElementById("muserlist").innerHTML;
  $scope.checkstatus = function(each,newlist,iterator,users){
      //console.log(each);
      //console.log(users);
      each = JSON.parse(each);
      users = JSON.parse(users);
      //console.log(users);
      var limit = users.length;
      //console.log("Adding "+each.friend_profile.id+"\n");
        ////console.log("Info of "+each.friend_profile.id+"\n");
        ////console.log(response);
        if(each.friend_profile.online.length > 0){
          ////console.log(each.friend_profile.id+" is offline");
            var cr = each.friend_profile.online[0].created
            ////console.log(cr);
            if(time_ago(cr) === 1){
              newlist = "<li class = 'alert alert-info users' title = '"+each.friend_profile.fname+"'> <i class = 'green fas fa-circle'></i> <img src = '"+each.friend_profile.proimg+"' class = 'chatdp'/><span class = 'badge level'>"+each.friend_profile.level+"</span><span class = 'badge newchat newchat_"+each.friend_profile.id+"'></span> <strong class = 'fname'>"+each.friend_profile.fname+"  <button onclick = 'angular.element(this).scope().chatFunction(\""+each.friend_profile.fname+"\","+each.friend_profile.id+")' type = 'button' class = 'chatbtn btn btn-success' title = 'Reply chat to "+each.friend_profile.fname+"'  ><i class = 'fa fa-comment'></i></button></strong></li>" + newlist;
              $scope.newcount ++;
            }
            else{
            newlist += "<li class = 'alert alert-info users' title = '"+each.friend_profile.fname+" online "+chat_ago(cr)+"'> <i class = 'red far fa-circle'></i> <img src = '"+each.friend_profile.proimg+"' class = 'chatdp'/><span class = 'badge level'>"+each.friend_profile.level+"</span><span class = 'badge newchat newchat_"+each.friend_profile.id+"'></span> <strong class = 'fname'>"+each.friend_profile.fname+" <button onclick = 'angular.element(this).scope().chatFunction(\""+each.friend_profile.fname+"\","+each.friend_profile.id+")' type = 'button' class = 'chatbtn btn btn-info' title = 'Send chat to "+each.friend_profile.fname+"'><i class = 'fa fa-comment'></i></button></strong></li>";
            }
        }
        else{
        newlist += "<li class = 'alert alert-info users' title = '"+each.friend_profile.fname+"'> <i class = 'red far fa-circle'></i> <img src = '"+each.friend_profile.proimg+"' class = 'chatdp'/> <span class = 'badge level'>"+each.friend_profile.level+"</span><span class = 'badge newchat newchat_"+each.friend_profile.id+"'></span> <strong class = 'fname'>"+each.friend_profile.fname+" <button onclick = 'angular.element(this).scope().chatFunction(\""+each.friend_profile.fname+"\","+each.friend_profile.id+")' type = 'button' class = 'chatbtn btn btn-info' title = 'Send chat to "+each.friend_profile.fname+"' ><i class = 'fa fa-comment'></i></button></strong></li>";
        }
      //console.log(JSON.stringify(users));
        if(iterator+1 < limit){
          $scope.checkstatus(JSON.stringify(users[iterator+1]),newlist,iterator+1,JSON.stringify(users));
        }
        else{
          if($scope.newcount != $scope.oncount){
            if($scope.newcount != 0){
              $scope.oncount = $scope.newcount+" Online";
            }
            else{
              $scope.oncount = "";
            }
          }
          //console.log(newlist);
          if(curlist != newlist){
              document.getElementById("userlist").innerHTML = newlist;
              document.getElementById("muserlist").innerHTML = newlist;
              $scope.maintainChat();
              curlist = newlist;
          }
          $scope.checkChat(users);
        }
  }
  $scope.getFriendsList = function(newlist){
    var chatdata = {};
    chatdata["type"] = "select";
    chatdata["args"] = {};
    chatdata["args"]["table"] = "profile";
    chatdata["args"]["columns"]=["*"];
    chatdata["args"]["where"] = {};
    chatdata["args"]["where"]["id"] = getCookie("hasura_id");
    chatdata["args"]["columns"][1]={};
    chatdata["args"]["columns"][1]["name"] = "myfriends";
    chatdata["args"]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["order_by"] = "friend_id";
    chatdata["args"]["columns"][1]["columns"][1] = {};
    chatdata["args"]["columns"][1]["columns"][1]["name"] = "friend_profile";
    chatdata["args"]["columns"][1]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][1] = {}
    chatdata["args"]["columns"][1]["columns"][1]["columns"][1]["name"] = "online";
    chatdata["args"]["columns"][1]["columns"][1]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2] = {}
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["name"] = "sent";
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"] = {};
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"] = [{}];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][0] = {};
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][1] = {};
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][0]["friend_id"] = getCookie("hasura_id");
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][1]["seen"] = null;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(chatdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      if(response.data.length > 0 && response.data[0].myfriends.length > 0 ){
        var user  = JSON.stringify(response.data[0]);
        var each = JSON.stringify(response.data[0].myfriends[0]);
        /*for(each of response.data[0].myfriends){
          $scope.checkstatus(each,newlist);
        }*/
          $scope.newcount = "";
          $scope.checkstatus(JSON.stringify(response.data[0].myfriends[0]),newlist,0,JSON.stringify(response.data[0].myfriends));
      }else{
        if(curlist != newlist){
            document.getElementById("userlist").innerHTML = newlist;
            document.getElementById("muserlist").innerHTML = newlist;
            $scope.maintainChat();
            curlist = newlist;
        }
      }
    },function myError(response){
      document.getElementById("userlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";
      document.getElementById("muserlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";////console.log(response);
      $scope.getRequests();
    });
  }
  $scope.online();
  $scope.setSeen = function(id){
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "chats";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"]["seen"] = getCookie("mytime");
    proupdata["args"]["where"] = {"id" : id};
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){

    },function myError(response){
      console.log("response");
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    return text;
  }
  $scope.getChats = function(id){
    var newchaties = document.getElementsByClassName("newchat_"+id);
    var userdata = {};
    var chatloglist = "";
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "chats"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["$or"] = [{}];
    userdata["args"]["where"]["$or"][0] = {};
    userdata["args"]["where"]["$or"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"] = [{}];
    userdata["args"]["where"]["$or"][0]["$and"][0] = {};
    userdata["args"]["where"]["$or"][0]["$and"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"][0]["id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][0]["$and"][1]["friend_id"] = id;
    userdata["args"]["where"]["$or"][1]["$and"] = [{}];
    userdata["args"]["where"]["$or"][1]["$and"][0] = {};
    userdata["args"]["where"]["$or"][1]["$and"][1] = {};
    userdata["args"]["where"]["$or"][1]["$and"][0]["friend_id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][1]["$and"][1]["id"] = id;
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "sender";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["columns"][2]={};
    userdata["args"]["columns"][2]["name"] = "recepient";
    userdata["args"]["columns"][2]["columns"] = ["*"];
    userdata["args"]["order_by"] = "-created";
    userdata["args"]["limit"] = "50";
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      document.getElementById("sendchat").innerHTML = "Send";document.getElementById("msendchat").innerHTML = "Send";
      document.getElementById("chatlog").innerHTML = "";
      document.getElementById("mchatlog").innerHTML = "";
      if(response.data.length > 0){
        for(each of response.data.reverse()){
          if(each.sender.id === parseInt(getCookie("hasura_id")) && each.seen === null){
            chatloglist+="<li class = 'mychat'><strong>"+$scope.smilify(each.text)+"</strong><br>"+chat_ago(each.created)+"<br>Sent</li>";
          }else if(each.sender.id === parseInt(getCookie("hasura_id"))){
            chatloglist+="<li class = 'mychat'><strong>"+$scope.smilify(each.text)+"</strong><br>"+chat_ago(each.created)+"<br>Seen </li>";
          }else{
            chatloglist+="<li class = 'youchat'><strong>"+$scope.smilify(each.text)+"</strong><br>"+chat_ago(each.created)+"<br></li>";
            if(each.seen === null){
              $scope.setSeen(each.id);
            }
          }
        }
      document.getElementById("chatlog").innerHTML = chatloglist;
      document.getElementById("mchatlog").innerHTML = chatloglist;
      if(response.data[0].id != prevdataid){
        scrollChat();
        prevdataid = response.data[0].id;
    }
  }
    },function myError(response){
      sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      document.getElementById("userlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";
      document.getElementById("muserlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>"
      $scope.getRequests();
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");


    return text;
  }
  $scope.sendChat = function(chat,id){
    if(chat != ""){
      document.getElementById("chattext").value = "";
      document.getElementById("sendchat").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Sending...";document.getElementById("msendchat").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Sending...";
      var chatData = {};
      chatData["type"] = "insert";
      chatData["args"] = {};
      chatData["args"]["table"] = "chats";
      chatData["args"].objects =  [{
          "id":getCookie("hasura_id"),
          "friend_id":id,
          "text":$scope.smilify(chat),
        }];
        $http({
          method : "POST",
          url : "https://data.unluckily34.hasura-app.io/v1/query",
          data : JSON.stringify(chatData),
          withCredentials : true,
          headers : {
            'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
          }
        }).then(function mySuccess(response){
          console.log(chat+" sent to "+id);
          prevdataid = 1;
          $scope.getChats(id);
        },function myError(response){
          console.log(response);
        });
    }
  }
  $scope.chatClose = function(){
    chatopen = 0;
    scrollChat();
    var chatlist = document.getElementById("chatlist");
    var chatApp = document.getElementById("chatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    if(chatlist.classList.contains("col-md-12","col-lg-12","col-sm-12")){
      document.getElementById("chathead").innerHTML = "<strong>"+name+"</strong>";
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
      chatApp.classList.remove("hidden");
      chatlist.classList.remove("col-md-12","col-lg-12","col-sm-12");
      chatlist.classList.add("col-md-4","col-lg-4","col-sm-4");
    }
    else{
      document.getElementById("mchathead").innerHTML = "";
      document.getElementById("chathead").innerHTML = "";
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
      chatApp.classList.add("hidden");
      chatlist.classList.add("col-md-12","col-lg-12","col-sm-12");
      chatlist.classList.remove("col-md-4","col-lg-4","col-sm-4");
    }
  }
  $scope.profileUpdate = function(field,value){
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "profile";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"][field] = value;
    proupdata["args"]["where"] = {"id" : getCookie("hasura_id")};
      /*"table" : "profile",
      "$set" : {field : value},
      "where" : {"id" : getCookie("hasura_id")}
    };*/
    //////console.log([proupdata]);
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      $scope.getUserProfile();
    },function myError(response){
      sunNotify("Check your internet connection...","alert-danger");
    })
  }
  $scope.setShine = function(e,s,c,h){
    var addpoint = {};
    addpoint["type"] = "update";
    addpoint["args"] = {};
    addpoint["args"]["table"] = "profile";
    addpoint["args"]["where"] = {};
    addpoint["args"]["where"]["id"] = getCookie("hasura_id");
    addpoint["args"]["$set"] = {};
    addpoint["args"]["$set"]["shine"] = e+s+c+h;
    addpoint["args"]["returning"] = ["shine","level"];
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(addpoint),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      if((response.data.returning[0].shine - 100*(response.data.returning[0].level-1))>= (100 * response.data.returning[0].level)){
        console.log("Level Up");
        $scope.profileUpdate("level",response.data.returning[0].level+1);
      }else if(response.data.returning[0].shine <= (100 * (response.data.returning[0].level-1))){
        level = response.data.returning[0].level-1;
        sunNotify("<strong>Level Down!!!</strong>","alert-danger");
        $scope.profileUpdate("level",response.data.returning[0].level-1);
      }
    },function myError(response){
      if(response.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
    });
  }
  $scope.getUserProfile = function(){
    var hasura_id = getCookie("hasura_id");
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    //////console.log(getCookie("hasura_id"));
    userdata["args"]["table"] = "users";
    userdata["args"]["columns"] = [];
    userdata["args"]["columns"]=["*"];
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "profile";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
    //////console.log(JSON.stringify(userdata));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      $scope.getShines();
      ////console.log(response.data);
      //////console.log(response);
      var dob = new Date(response.data[0].profile[0].dob);
      days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      document.getElementById("profilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("mprofilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("user_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      document.getElementById("muser_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      setCookie("userdata",JSON.stringify(response.data));
      var template = "<strong><h3><span class = 'badge level'>Level "+response.data[0].profile[0].level+"</span></h3><h4><span title = '"+((100 * response.data[0].profile[0].level) - (response.data[0].profile[0].shine - 100*(response.data[0].profile[0].level-1)))+" more points for next level' class = 'badge shine'>Shine "+response.data[0].profile[0].shine+"</span></h4><p>"+response.data[0].profile[0].username+"<br></p></strong>";
      document.getElementById("userinfo").innerHTML=template;
      document.getElementById("muserinfo").innerHTML=template;
      document.getElementById("user_commands").title = response.data[0].profile[0].username;
    },function myError(response){
      proggy(0);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
  $scope.addShine = function(shine,points){
    document.getElementById('giftbox').innerHTML = "<div class = 'alert alert-info'><i class ='fas fa-spinner fa-spin'></i><strong>Adding "+shine+" Points</strong></div> ";
    var addpoint = {};
    addpoint["type"] = "update";
    addpoint["args"] = {};
    addpoint["args"]["table"] = "profile";
    addpoint["args"]["where"] = {};
    addpoint["args"]["where"]["id"] = getCookie("hasura_id");
    addpoint["args"]["$inc"] = {};
    addpoint["args"]["$inc"][shine] = points;
    addpoint["args"]["$set"] = {};
    addpoint["args"]["$set"][shine.split("shine")[0]+"modified"] = getCookie("mytime");
    addpoint["args"]["returning"] = ["healthshine","earthshine","charityshine","socialshine"];
    console.log(JSON.stringify(addpoint));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(addpoint),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      if(shine === "healthshine"){
        button = "danger";
      }
      if(shine === "earthshine"){
        button = "success";
      }
      if(shine === "charityshine"){
        button = "warning";
      }
      if(shine === "socialshine"){
        button = "info";
      }
      sunNotify("<strong>"+shine+" changed by "+points+"</strong>","alert-"+button);
      console.log(response);
      $scope.setShine(response.data.returning[0].earthshine,response.data.returning[0].socialshine,response.data.returning[0].charityshine,response.data.returning[0].healthshine);
    },function myError(response){
      sunNotify(response.data);
    });

  }
  var giftlist = "";
  var newgifts = "";
  $scope.claimPoints = function(shine,points){
    var sign = "";
    if(shine === "healthshine"){
      button = "danger";
      icon = '<i class="fas fa-heart"></i>';
    }
    if(shine === "earthshine"){
      button = "success";
      icon = '<i class="fas fa-leaf"></i>';
    }
    if(shine === "charityshine"){
      button = "warning";
      icon = '<i class="fas fa-gift"></i>';
    }
    if(shine === "socialshine"){
      button = "primary";
      icon = '<i class="fas fa-globe"></i>';
    }
    if(points > 0){
      sign = "+";
      newgifts += "<li class = 'gift gift"+shine.split('shine')[0]+"'><button onclick = 'angular.element(this).scope().addShine(\""+shine+"\","+points+");' type = 'button' title = 'New points YAY!!!' class = 'giftbtn btn btn-"+button+"'><strong>"+icon+" "+sign+points+"</strong></button></li>";
    }else if(points < 0){
      sign = "";
      newgifts += "<li class = 'gift gift"+shine.split('shine')[0]+"'><button onclick = 'angular.element(this).scope().addShine(\""+shine+"\","+points+");' type = 'button' title = 'New points YAY!!!' class = 'giftbtn btn btn-"+button+"'><strong>"+sign+points+"</strong></button></li>";
    }else if(points === 0){
      newgifts += "<li class = 'gift gift "+shine.split('shine')[0]+"'><button type = 'button' class = 'btn btn-"+button+" nogift ' title = 'No New points yet'><strong>"+icon+"</strong></button></li>";
    }
  }
  $scope.hshine = 0;
  $scope.sshine = 0;
  $scope.eshine = 0;
  $scope.cshine = 0;
  document.getElementById('healthprog').style = "width : "+$scope.hshine+"%;";
  document.getElementById('charityprog').style = "width : "+$scope.cshine+"%;";
  document.getElementById('earthprog').style = "width : "+$scope.eshine+"%;";
  document.getElementById('socialprog').style = "width : "+$scope.sshine+"%;";
  $scope.getShines = function(){
  var hshine = 0;
  var sshine = 0;
  var eshine = 0;
  var cshine = 0;
  var shineData = {};
  shineData["type"] = "select";
  shineData["args"] = {};
  shineData["args"]["table"] = "profile";
  shineData["args"]["columns"] = ["*"];
  shineData["args"]["where"] = {};
  shineData["args"]["where"]["id"] = getCookie("hasura_id");
  shineData["args"]["columns"][1] = {};
  shineData["args"]["columns"][2] = {};
  shineData["args"]["columns"][1]["name"] = "posts";
  shineData["args"]["columns"][2]["name"] = "myfriends";
  shineData["args"]["columns"][1]["columns"] = ["*"];
  shineData["args"]["columns"][2]["columns"] = ["*"];
  shineData["args"]["columns"][1]["columns"][1] = {};
  shineData["args"]["columns"][1]["columns"][1]["name"] = "likers";
  shineData["args"]["columns"][1]["columns"][1]["columns"] = ["*"];
  $http({
    method : "POST",
    url : "https://data.unluckily34.hasura-app.io/v1/query",
    data : JSON.stringify(shineData),
    withCredentials : true,
    headers : {
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
    }
  }).then(function mySuccess(response){
    newgifts = "";
    for(each of response.data[0].posts){
      for(each of each.likers){
        if(each.shine === "health"){
          hshine++;
        }
        else if(each.shine === "charity"){
          cshine++;
        }
        else if(each.shine === "social"){
          sshine++;
        }
        else if(each.shine === "earth"){
          eshine++;
        }
      }
    }
    for(each of response.data[0].myfriends){
      sshine++;
    }
    if(checkCookie("mytime") === 1){
      if(hshine != response.data[0].healthshine){
        $scope.claimPoints("healthshine",hshine-response.data[0].healthshine);
      }
      else{
        $scope.claimPoints("healthshine",0);
      }
      if(eshine != response.data[0].earthshine){
        $scope.claimPoints("earthshine",eshine-response.data[0].earthshine);
      }
      else{
        $scope.claimPoints("earthshine",0);
      }
      if(cshine != response.data[0].charityshine){
        $scope.claimPoints("charityshine",cshine-response.data[0].charityshine);
      }
      else{
        $scope.claimPoints("charityshine",0);
      }
      if(sshine != response.data[0].socialshine){
        $scope.claimPoints("socialshine",sshine-response.data[0].socialshine);
      }
      else{
        $scope.claimPoints("socialshine",0);
      }
    if(newgifts != giftlist){
      document.getElementById('giftbox').innerHTML = newgifts;
      giftlist = newgifts;
    }
  }
  else{
    $scope.getShines();
  }
    $scope.hshine = response.data[0].healthshine;
    $scope.sshine = response.data[0].socialshine;
    $scope.cshine = response.data[0].charityshine;
    $scope.eshine = response.data[0].earthshine;
    document.getElementById('healthprog').style = "width : "+($scope.hshine)/(level*1.5)+"%;";
    document.getElementById('charityprog').style = "width : "+($scope.cshine)/(level*1.5)+"%;";
    document.getElementById('earthprog').style = "width : "+($scope.eshine)/(level*1.5)+"%;";
    document.getElementById('socialprog').style = "width : "+($scope.sshine)/(level*1.5)+"%;";
    if(newgifts != giftlist){
      document.getElementById('giftbox').innerHTML = newgifts;
      giftlist = newgifts;
    }
    setTimeout(function () {
      $scope.getUserProfile();
    }, 3000);
  },function myError(response){
    if(response.message === "invalid authorization token"){
      if(loggingout === 0){
        sunNotify("<strong>Please Relogin</strong>","alert-danger");
        $scope.logout();
      }
    }
  });
  }
  $scope.getShines();
});
var mshineTableApp = angular.module("mshineTableApp",[]);
mshineTableApp.controller("mshineTableCtrl",function($scope,$http){
  $scope.profileUpdate = function(field,value){
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "profile";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"][field] = value;
    proupdata["args"]["where"] = {"id" : getCookie("hasura_id")};
      /*"table" : "profile",
      "$set" : {field : value},
      "where" : {"id" : getCookie("hasura_id")}
    };*/
    //////console.log([proupdata]);
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      $scope.getUserProfile();
    },function myError(response){
      sunNotify("Check your internet connection...","alert-danger");
    })
  }
  $scope.setShine = function(e,s,c,h){
    var addpoint = {};
    addpoint["type"] = "update";
    addpoint["args"] = {};
    addpoint["args"]["table"] = "profile";
    addpoint["args"]["where"] = {};
    addpoint["args"]["where"]["id"] = getCookie("hasura_id");
    addpoint["args"]["$set"] = {};
    addpoint["args"]["$set"]["shine"] = e+s+c+h;
    addpoint["args"]["returning"] = ["shine","level"];
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(addpoint),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      if((response.data.returning[0].shine -  100*(response.data.returning[0].level-1))  >= (100 * response.data.returning[0].level)){
        sunNotify("<strong>Level Up!!!</strong>","alert-success");
        level = response.data.returning[0].level+1;
        $scope.profileUpdate("level",response.data.returning[0].level+1);
      }else if(response.data.returning[0].shine <= (100 * (response.data.returning[0].level-1))){
        level = response.data.returning[0].level-1;
        sunNotify("<strong>Level Down!!!</strong>","alert-danger");
        $scope.profileUpdate("level",response.data.returning[0].level-1);
      }
    },function myError(response){
      if(response.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
    });
  }
  $scope.logout = function(){
    proggy(30);
    document.getElementById("user_commands").innerHTML += "<i class = 'fa fa-spinner fa-spin'></i>";
    //////console.log("Sent Logout request...waiting");
    sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out please wait</strong>","alert-warning");
    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://auth.unluckily34.hasura-app.io/v1/user/logout",
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      proggy(100);
      //////console.log("Logged Out");
      sunNotify("<strong><i class = 'fa fa-spinner fa-spin'></i> Logging Out</strong>","alert-info");
      setTimeout(function(){
        setTimeout(clearCookies(),3000);
      },3000);
    },function myError(response){
      proggy(100);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        setTimeout(function(){
          clearCookies();
        },3000);
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response)+"</strong>","alert-danger");
      }
    });
  }
  $scope.getUserProfile = function(){
    var hasura_id = getCookie("hasura_id");
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    //////console.log(getCookie("hasura_id"));
    userdata["args"]["table"] = "users";
    userdata["args"]["columns"] = [];
    userdata["args"]["columns"]=["*"];
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "profile";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {"hasura_id" : getCookie('hasura_id')};
    //////console.log(JSON.stringify(userdata));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      $scope.getShines();
      ////console.log(response.data);
      //////console.log(response);
      var dob = new Date(response.data[0].profile[0].dob);
      days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      document.getElementById("profilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("mprofilepic").src = response.data[0].profile[0].proimg;
      document.getElementById("user_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      document.getElementById("muser_commands").style = "background-image : url('"+response.data[0].profile[0].proimg+"');";
      setCookie("userdata",JSON.stringify(response.data));
      var template = "<strong><h3><span class = 'badge level'>Level "+response.data[0].profile[0].level+"</span></h3><h4><span title = '"+((100 * response.data[0].profile[0].level) - (response.data[0].profile[0].shine - 100*(response.data[0].profile[0].level-1)))+" more points for next level' class = 'badge shine'>Shine "+response.data[0].profile[0].shine+"</span></h4><p>"+response.data[0].profile[0].username+"<br></p></strong>";
      document.getElementById("userinfo").innerHTML=template;
      document.getElementById("muserinfo").innerHTML=template;
      document.getElementById("user_commands").title = response.data[0].profile[0].username;
    },function myError(response){
      proggy(0);
      if(response.data === null){
        sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      }
      else if(response.data.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
      }
      else{
        sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
      }
    });
  }
  $scope.addShine = function(shine,points){
    document.getElementById('mgiftbox').innerHTML = "<div class = 'alert alert-info'><i class ='fas fa-spinner fa-spin'></i><strong>Adding "+shine+" Points</strong></div> ";
    sunNotify("<strong>"+shine+" changed by "+points+"</strong>","alert-success");
    var addpoint = {};
    addpoint["type"] = "update";
    addpoint["args"] = {};
    addpoint["args"]["table"] = "profile";
    addpoint["args"]["where"] = {};
    addpoint["args"]["where"]["id"] = getCookie("hasura_id");
    addpoint["args"]["$inc"] = {};
    addpoint["args"]["$inc"][shine] = points;
    addpoint["args"]["$set"] = {};
    addpoint["args"]["$set"][shine.split("shine")[0]+"modified"] = getCookie("mytime");
    addpoint["args"]["returning"] = ["healthshine","earthshine","charityshine","socialshine"];
    console.log(JSON.stringify(addpoint));
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(addpoint),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      $scope.setShine(response.data.returning[0].earthshine,response.data.returning[0].socialshine,response.data.returning[0].charityshine,response.data.returning[0].healthshine);
    },function myError(response){
      sunNotify(response.data);
    });

  }
  var giftlist = "";
  var newgifts = "";
  $scope.claimPoints = function(shine,points){
    var sign = "";
    if(shine === "healthshine"){
      button = "danger";
      icon = '<i class="fas fa-heart"></i>';
    }
    if(shine === "earthshine"){
      button = "success";
      icon = '<i class="fas fa-leaf"></i>';
    }
    if(shine === "charityshine"){
      button = "warning";
      icon = '<i class="fas fa-gift"></i>';
    }
    if(shine === "socialshine"){
      button = "primary";
      icon = '<i class="fas fa-globe"></i>';
    }
    if(points > 0){
      sign = "+";
      newgifts += "<li class = 'mgift mgift"+shine.split('shine')[0]+"'><button onclick = 'angular.element(this).scope().addShine(\""+shine+"\","+points+");' type = 'button' title = 'New points YAY!!!' class = 'mgiftbtn btn btn-"+button+"'><strong>"+icon+" "+sign+points+"</strong></button></li>";
    }else if(points < 0){
      sign = "";
      newgifts += "<li class = 'mgift mgift"+shine.split('shine')[0]+"'><button onclick = 'angular.element(this).scope().addShine(\""+shine+"\","+points+");' type = 'button' title = 'New points YAY!!!' class = 'mgiftbtn btn btn-"+button+"'><strong>"+sign+points+"</strong></button></li>";
    }else if(points === 0){
      newgifts += "<li class = 'mgift mgift "+shine.split('shine')[0]+"'><button type = 'button' class = 'btn btn-"+button+" mnogift ' title = 'No New points yet'><strong>"+icon+"</strong></button></li>";
    }
  }
  $scope.hshine = 0;
  $scope.sshine = 0;
  $scope.eshine = 0;
  $scope.cshine = 0;
  document.getElementById('hshine').style = "width : "+$scope.hshine+"%;";
  document.getElementById('cshine').style = "width : "+$scope.cshine+"%;";
  document.getElementById('eshine').style = "width : "+$scope.eshine+"%;";
  document.getElementById('sshine').style = "width : "+$scope.sshine+"%;";
  $scope.getShines = function(){
  var hshine = 0;
  var sshine = 0;
  var eshine = 0;
  var cshine = 0;
  var shineData = {};
  shineData["type"] = "select";
  shineData["args"] = {};
  shineData["args"]["table"] = "profile";
  shineData["args"]["columns"] = ["*"];
  shineData["args"]["where"] = {};
  shineData["args"]["where"]["id"] = getCookie("hasura_id");
  shineData["args"]["columns"][1] = {};
  shineData["args"]["columns"][2] = {};
  shineData["args"]["columns"][1]["name"] = "posts";
  shineData["args"]["columns"][2]["name"] = "myfriends";
  shineData["args"]["columns"][1]["columns"] = ["*"];
  shineData["args"]["columns"][2]["columns"] = ["*"];
  shineData["args"]["columns"][1]["columns"][1] = {};
  shineData["args"]["columns"][1]["columns"][1]["name"] = "likers";
  shineData["args"]["columns"][1]["columns"][1]["columns"] = ["*"];
  $http({
    method : "POST",
    url : "https://data.unluckily34.hasura-app.io/v1/query",
    data : JSON.stringify(shineData),
    withCredentials : true,
    headers : {
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
    }
  }).then(function mySuccess(response){
    newgifts = "";
    level = response.data[0].level;
    for(each of response.data[0].posts){
      for(each of each.likers){
        if(each.shine === "health"){
          hshine++;
        }
        else if(each.shine === "charity"){
          cshine++;
        }
        else if(each.shine === "social"){
          sshine++;
        }
        else if(each.shine === "earth"){
          eshine++;
        }
      }
    }
    for(each of response.data[0].myfriends){
      sshine++;
    }
    if(checkCookie("mytime") === 1){
        if(hshine != response.data[0].healthshine){
          $scope.claimPoints("healthshine",hshine-response.data[0].healthshine);
        }
        else{
          $scope.claimPoints("healthshine",0);
        }
        if(eshine != response.data[0].earthshine){
          $scope.claimPoints("earthshine",eshine-response.data[0].earthshine);
        }
        else{
          $scope.claimPoints("earthshine",0);
        }
        if(cshine != response.data[0].charityshine){
          $scope.claimPoints("charityshine",cshine-response.data[0].charityshine);
        }
        else{
          $scope.claimPoints("charityshine",0);
        }
        if(sshine != response.data[0].socialshine){
          $scope.claimPoints("socialshine",sshine-response.data[0].socialshine);
        }
        else{
          $scope.claimPoints("socialshine",0);
        }
      if(newgifts != giftlist){
        document.getElementById('mgiftbox').innerHTML = newgifts;
        giftlist = newgifts;
      }
    }
    else{
      $scope.getShines();
    }
    $scope.hshine = response.data[0].healthshine;
    $scope.sshine = response.data[0].socialshine;
    $scope.cshine = response.data[0].charityshine;
    $scope.eshine = response.data[0].earthshine;
    if(level != 0){
      document.getElementById('hshine').style = "width : "+($scope.hshine/(level*2))+"%;";
      document.getElementById('cshine').style = "width : "+($scope.cshine/(level*2))+"%;";
      document.getElementById('eshine').style = "width : "+($scope.eshine/(level*2))+"%;";
      document.getElementById('sshine').style = "width : "+($scope.sshine/(level*2))+"%;";
    }
    else{
      document.getElementById('hshine').style = "width : "+($scope.hshine)+"%;";
      document.getElementById('cshine').style = "width : "+($scope.cshine)+"%;";
      document.getElementById('eshine').style = "width : "+($scope.eshine)+"%;";
      document.getElementById('sshine').style = "width : "+($scope.sshine)+"%;";
    }
    if(newgifts != giftlist){
      document.getElementById('mgiftbox').innerHTML = newgifts;
      giftlist = newgifts;
    }
    setTimeout(function () {
      $scope.getUserProfile();
    }, 3000);
  },function myError(response){
    if(response.message === "invalid authorization token"){
      sunNotify("<strong>Please Relogin</strong>","alert-danger");
      $scope.logout();
    }
  });
  }
  $scope.getShines();
});
var searchApp = angular.module("searchApp",[]);
searchApp.controller("searchCtrl",function($scope,$http){
  $scope.cancelRequest = function(id){
    var usedata = {};
    usedata["type"] = "delete";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"]["where"] = {};
    usedata["args"]["where"]["recid"] = id;
    usedata["args"]["where"]["reqid"] = getCookie("hasura_id");
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      ////console.log("Cancelled Request");
      $scope.searchUsers();
    },function myError(response){
      ////console.log("Failed to Cancel Request");
    });
  }
  $scope.addFriend = function(id){
    var usedata = {};
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"].objects =  [{
        "reqid":parseInt(getCookie("hasura_id")),
        "recid":id,
      }];
    //////console.log(JSON.stringify(usedata));

    //Call JSON API for signup
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      sunNotify("<strong>Request Sent !!!</strong>","alert-success");
      document.getElementById("searchip").value = "";
      document.getElementById("searchresults").innerHTML = "";
      document.getElementById("searchresults").style = "height : 0";
    },function myError(response){
      ////console.log(response);
    });
  }
  $scope.checkRequests = function(id,each,searchlist){
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "requests"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["$and"] = [{}];
    userdata["args"]["where"]["$and"][0] = {};
    userdata["args"]["where"]["$and"][1] = {};
    userdata["args"]["where"]["$and"][0]["reqid"] = getCookie("hasura_id");
    userdata["args"]["where"]["$and"][1]["recid"] = id;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      ////console.log(response.data);
      if(response.data.length > 0 && $scope.searchip != "" ){
        searchlist += "<li class = 'alert alert-info'><button onclick = 'angular.element(this).scope().cancelRequest("+each.profile[0].id+");' title = 'Cancel Request' class ='btn btn-info btn-sm' type = 'button'><i class='fas fa-minus-circle'></i></button> "+each.profile[0].fname+"<img src= '"+each.profile[0].proimg+"' class = 'chatdp'/></li>";
        document.getElementById("searchresults").innerHTML += searchlist;
        document.getElementById("searchresults").style = "height : auto";
      }
      else if($scope.searchip != "" ){
        searchlist += "<li class = 'alert alert-info'><button onclick = 'angular.element(this).scope().addFriend("+each.profile[0].id+");' title = 'Add friend' class = 'btn btn-info btn-sm' type = 'button'><i class = 'fas fa-user-plus'></i></button> "+each.profile[0].fname+"<img src= '"+each.profile[0].proimg+"' class = 'chatdp'/></li>";
        document.getElementById("searchresults").innerHTML += searchlist;
        document.getElementById("searchresults").style = "height : auto";
      }
    },function myError(response){
      ////console.log(response);
    });
  }
  $scope.checkFriend = function(id,each,searchlist){
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "profile"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["columns"][1] = {};
    userdata["args"]["columns"][1]["name"] = "myfriends";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["id"] = getCookie("hasura_id");
    userdata["args"]["where"]["myfriends"] = {};
    userdata["args"]["where"]["myfriends"]["friend_id"] = id;
    console.log(userdata);
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      console.log(response);
      if(response.data.length > 0){
        if(response.data[0].myfriends.length > 0 && $scope.searchip != "" ){
            searchlist += "<li class = 'alert alert-info'><i class='far fa-check-circle'></i> "+each.profile[0].fname+"<img src= '"+each.profile[0].proimg+"' class = 'chatdp'/></li>";
            document.getElementById("searchresults").innerHTML += searchlist;
            document.getElementById("searchresults").style = "height : auto";
        }
        else{
          $scope.checkRequests(id,each,searchlist);
        }
      }
      else{
        $scope.checkRequests(id,each,searchlist);
      }
    },function myError(response){
    })
  }
  $scope.searchUsers = function(){
    if($scope.searchip != ""){
      var searchlist = "";
      document.getElementById("searchresults").innerHTML = "<li class = 'alert alert-info'>Searching...<li>";
      document.getElementById("searchresults").style = "height : auto";
      var userdata = {};
      userdata["type"] = "select";
      userdata["args"] = {};
      //////console.log(getCookie("hasura_id"));
      userdata["args"]["table"] = "users";
      userdata["args"]["columns"] = ["*"];
      userdata["args"]["columns"][1] = {};
      userdata["args"]["columns"][1]["name"] = "profile";
      userdata["args"]["columns"][1]["columns"] = ["*"];
      userdata["args"]["where"] = {};
      userdata["args"]["where"]["$and"] = [{}];
      userdata["args"]["where"]["$and"][0] = {};
      userdata["args"]["where"]["$and"][1] = {};
      userdata["args"]["where"]["$and"][1]["profile"] = {};
      userdata["args"]["where"]["$and"][1]["profile"]["id"] = {};
      userdata["args"]["where"]["$and"][0]["$or"] = [{}];
      userdata["args"]["where"]["$and"][0]["$or"][0] = {};
      userdata["args"]["where"]["$and"][0]["$or"][1] = {};
      userdata["args"]["where"]["$and"][0]["$or"][2] = {};
      userdata["args"]["where"]["$and"][0]["$or"][0]["profile"] = {};
      userdata["args"]["where"]["$and"][0]["$or"][0]["profile"]["fname"] = {};
      userdata["args"]["where"]["$and"][0]["$or"][0]["profile"]["fname"]["$like"] = $scope.searchip.toLowerCase()+'%';
      userdata["args"]["where"]["$and"][0]["$or"][1]["profile"] = {};
      userdata["args"]["where"]["$and"][0]["$or"][1]["profile"]["fname"] = {};
      userdata["args"]["where"]["$and"][0]["$or"][1]["profile"]["fname"]["$like"] = $scope.searchip.toUpperCase()+'%';
      userdata["args"]["where"]["$and"][0]["$or"][2]["profile"] = {};
      userdata["args"]["where"]["$and"][0]["$or"][2]["profile"]["fname"] = {};
      userdata["args"]["where"]["$and"][0]["$or"][2]["profile"]["fname"]["$like"] = $scope.searchip+'%';
      userdata["args"]["where"]["$and"][1]["profile"]["id"]["$neq"] = getCookie("hasura_id");
      //////console.log(JSON.stringify(userdata));
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(userdata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
        }
      }).then(function mySuccess(response){
        //////console.log(response);
        var userlist = response.data;
        if(userlist.length === 0 && $scope.searchip != "" ){
          searchlist = "<li class = 'alert alert-info'>No Results<li>";
          document.getElementById("searchresults").innerHTML = searchlist;
          document.getElementById("searchresults").style = "height :auto";
        }
        else{
          document.getElementById("searchresults").innerHTML = "";
          document.getElementById("searchresults").style = "height : 0";
          for(each of userlist)
          {
            $scope.checkFriend(each.hasura_id,each,searchlist);
          }
        }
      },function myError(response){
        if(response.data === null){
          document.getElementById("searchresults").innerHTML = "";
          document.getElementById("searchresults").style = "height : 0";
          sunNotify("<strong>Check your internet connection</strong>","alert-danger");
        }
        else if(response.data.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
          document.getElementById("searchresults").innerHTML = "";
          document.getElementById("searchresults").style = "height : 0";
          $scope.logout();
        }
        else{
          document.getElementById("searchresults").innerHTML = "";
          document.getElementById("searchresults").style = "height : 0";
          sunNotify("<strong>"+JSON.stringify(response.message)+"</strong>","alert-danger");
        }
      });
    }
    else{
      document.getElementById("searchresults").innerHTML = "";
      document.getElementById("searchresults").style = "height : 0";
    }
  }
});
var mchatApp = angular.module("mchatApp",[]);
mchatApp.controller("mchatCtrl",function($scope,$http){
  $scope.checkChat = function(newchats){
    for(each of newchats){
      var newchaties = document.getElementsByClassName("newchat_"+each.friend_profile.id);
      if(each.friend_profile.sent.length != 0){
        console.log("new refresh");
        if(document.getElementById("chathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" || document.getElementById("mchathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" ){
          $scope.getChats(each.friend_profile.id);
        }
        for(news of newchaties){
          news.innerHTML = each.friend_profile.sent.length;
          if(each.friend_profile.sent.length > 0){
          }
        }
      }else{
        if(document.getElementById("chathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" || document.getElementById("mchathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" ){
          console.log("normal refresh");
          $scope.getChats(each.friend_profile.id);
        }
        for(news of newchaties){
          news.innerHTML = "";
        }
      }
    }
  }
  $scope.setSeen = function(id){
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "chats";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"]["seen"] = getCookie("mytime");
    proupdata["args"]["where"] = {"id" : id};
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
    },function myError(response){
      console.log("response");
    });
  }
  $scope.getChats = function(id){
    var newchaties = document.getElementsByClassName("newchat_"+id);
    var userdata = {};
    var chatloglist = "";
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "chats"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["$or"] = [{}];
    userdata["args"]["where"]["$or"][0] = {};
    userdata["args"]["where"]["$or"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"] = [{}];
    userdata["args"]["where"]["$or"][0]["$and"][0] = {};
    userdata["args"]["where"]["$or"][0]["$and"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"][0]["id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][0]["$and"][1]["friend_id"] = id;
    userdata["args"]["where"]["$or"][1]["$and"] = [{}];
    userdata["args"]["where"]["$or"][1]["$and"][0] = {};
    userdata["args"]["where"]["$or"][1]["$and"][1] = {};
    userdata["args"]["where"]["$or"][1]["$and"][0]["friend_id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][1]["$and"][1]["id"] = id;
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "sender";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["columns"][2]={};
    userdata["args"]["columns"][2]["name"] = "recepient";
    userdata["args"]["columns"][2]["columns"] = ["*"];
    userdata["args"]["order_by"] = "-created";
    userdata["args"]["limit"] = 50;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
        document.getElementById("sendchat").innerHTML = "Send";document.getElementById("msendchat").innerHTML = "Send";
        document.getElementById("mchatlog").innerHTML = "";
        if(response.data.length > 0){
          for(each of response.data.reverse()){
            if(each.sender.id === parseInt(getCookie("hasura_id")) && each.seen === null){
              chatloglist+="<li class = 'mychat'><strong>"+each.text+"</strong><br><span class = 'chattime'>"+chat_ago(each.created)+"</span><br>Sent</li>";
            }else if(each.sender.id === parseInt(getCookie("hasura_id"))){
              chatloglist+="<li class = 'mychat'><strong>"+each.text+"</strong><br><span class = 'chattime'>"+chat_ago(each.created)+"</span><br>Seen </li>";
            }else{
              chatloglist+="<li class = 'youchat'><strong>"+each.text+"</strong><br><span class = 'chattime'>"+chat_ago(each.created)+"</span><br></li>";
              if(each.seen === null){
                $scope.setSeen(each.id);
              }
            }
          }
        document.getElementById("chatlog").innerHTML = chatloglist;
        document.getElementById("mchatlog").innerHTML = chatloglist;
        if(response.data[0].id != prevdataid){
          console.log(response.data[0].id);
          scrollChat();
          prevdataid = response.data[0].id;
        }
        }
    },function myError(response){
      sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      document.getElementById("userlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";
      document.getElementById("muserlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";////console.log(response);
      $scope.getRequests();
    });
  }
  $scope.smilify = function(text){
    text = text.replace(":-)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":)" , "<img class = 'smilie' src = '/css/svg/032-happy-5.svg'>");
    text = text.replace(":-(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":(" , "<img class = 'smilie' src = '/css/svg/002-sad-14.svg'>");
    text = text.replace(":-o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":o" , "<img class = 'smilie' src = '/css/svg/052-shocked-2.svg'>");
    text = text.replace(":-D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace(":D" , "<img class = 'smilie' src = '/css/svg/095-happy-2.svg'>");
    text = text.replace("B-)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("B)" , "<img class = 'smilie' src = '/css/svg/084-cool.svg'>");
    text = text.replace("-_-" , "<img class = 'smilie' src = '/css/svg/081-sleeping.svg'>");
    text = text.replace("X-D" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("XD" , "<img class = 'smilie' src = '/css/svg/092-laughing-1.svg'>");
    text = text.replace("o_o" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_0" , "<img class = 'smilie' src = '082-shocked.svg'>");
    text = text.replace("0_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_0" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("O_o" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");
    text = text.replace("o_O" , "<img class = 'smilie' src = '/css/svg/009-surprised.svg'>");


    return text;
  }
  $scope.sendChat = function(chat,id){
    if(chat != ""){
      document.getElementById("mchattext").value = "";
      document.getElementById("sendchat").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Sending...";document.getElementById("msendchat").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> Sending...";
      var chatData = {};
      chatData["type"] = "insert";
      chatData["args"] = {};
      chatData["args"]["table"] = "chats";
      chatData["args"].objects =  [{
          "id":getCookie("hasura_id"),
          "friend_id":id,
          "text":$scope.smilify(chat),
        }];
        $http({
          method : "POST",
          url : "https://data.unluckily34.hasura-app.io/v1/query",
          data : JSON.stringify(chatData),
          withCredentials : true,
          headers : {
            'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
          }
        }).then(function mySuccess(response){
          console.log(chat+" sent to "+id);
          prevdataid = 1;
          $scope.getChats(id);
        },function myError(response){
          sunNotify("<strong>Check your internet connection</strong>","alert-danger");
        });
    }
  }
  $scope.chatClose = function(){
    prevdataid = 0;
    var chatlist = document.getElementById("mchatlist");
    var chatApp = document.getElementById("mchatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    if(!chatlist.classList.contains("col-sm-12","col-xs-12")){
      document.getElementById("mchathead").innerHTML = "<strong>"+name+"</strong>";
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
      chatApp.classList.add("hidden");
      chatlist.classList.remove("col-sm-4","col-xs-4");
      chatlist.classList.add("col-sm-12","col-xs-12");
    }
    else{
      document.getElementById("mchathead").innerHTML = "";
      document.getElementById("chathead").innerHTML = "";
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
      chatApp.classList.remove("hidden");
      chatlist.classList.add("col-sm-4","col-xs-4");
      chatlist.classList.remove("col-sm-12","col-xs-12");
    }
  }
});
var mchatListApp = angular.module("mchatListApp",[]);
mchatListApp.controller("mchatListCtrl",function($scope,$http){
  $scope.oncount = "";
  $scope.newcount = "";
  $scope.maintainChat = function(){
    var chatlist = document.getElementById("chatlist");
    var chatApp = document.getElementById("chatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    var mchatlist = document.getElementById("mchatlist");
    var mchatApp = document.getElementById("mchatApp");
    if(chatlist.classList.contains("col-lg-1")){
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
    }
    else if(mchatlist.classList.contains("col-xs-4")){
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
    }
    else{
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
    }
}
  $scope.checkChat = function(newchats){
    for(each of newchats){
      var newchaties = document.getElementsByClassName("newchat_"+each.friend_profile.id);
      if(each.friend_profile.sent.length != 0){
        console.log("new refresh");
        if(document.getElementById("chathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" || document.getElementById("mchathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" ){
          $scope.getChats(each.friend_profile.id);
        }
        for(news of newchaties){
          news.innerHTML = each.friend_profile.sent.length;
          if(each.friend_profile.sent.length > 0){
            blinkTitle(each.friend_profile.fname);
          }
        }
      }else{
        if(document.getElementById("chathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" || document.getElementById("mchathead").innerHTML === "<strong>"+each.friend_profile.fname+"</strong>" ){
          console.log("normal refresh");
          $scope.getChats(each.friend_profile.id);
        }
        for(news of newchaties){
          news.innerHTML = "";
        }
      }
    }
  }
  $scope.setSeen = function(id){
    var proupdata = {};
    proupdata["type"] = "update";
    proupdata["args"] = {};
    proupdata["args"]["table"] = "chats";
    proupdata["args"]["$set"] = {};
    proupdata["args"]["$set"]["seen"] = getCookie("mytime");
    proupdata["args"]["where"] = {"id" : id};
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(proupdata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
    },function myError(response){
      sunNotify("<strong>Check your internet connection</strong>","alert-danger");
    });
  }
  $scope.getChats = function(id){
    var newchaties = document.getElementsByClassName("newchat_"+id);
    var chatloglist = "";
    var userdata = {};
    userdata["type"] = "select";
    userdata["args"] = {};
    userdata["args"]["table"] = "chats"
    userdata["args"]["columns"] = ["*"];
    userdata["args"]["where"] = {};
    userdata["args"]["where"]["$or"] = [{}];
    userdata["args"]["where"]["$or"][0] = {};
    userdata["args"]["where"]["$or"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"] = [{}];
    userdata["args"]["where"]["$or"][0]["$and"][0] = {};
    userdata["args"]["where"]["$or"][0]["$and"][1] = {};
    userdata["args"]["where"]["$or"][0]["$and"][0]["id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][0]["$and"][1]["friend_id"] = id;
    userdata["args"]["where"]["$or"][1]["$and"] = [{}];
    userdata["args"]["where"]["$or"][1]["$and"][0] = {};
    userdata["args"]["where"]["$or"][1]["$and"][1] = {};
    userdata["args"]["where"]["$or"][1]["$and"][0]["friend_id"] = getCookie("hasura_id");
    userdata["args"]["where"]["$or"][1]["$and"][1]["id"] = id;
    userdata["args"]["columns"][1]={};
    userdata["args"]["columns"][1]["name"] = "sender";
    userdata["args"]["columns"][1]["columns"] = ["*"];
    userdata["args"]["columns"][2]={};
    userdata["args"]["columns"][2]["name"] = "recepient";
    userdata["args"]["columns"][2]["columns"] = ["*"];
    userdata["args"]["order_by"] = "-created";
    userdata["args"]["limit"] = 50;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(userdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
        document.getElementById("sendchat").innerHTML = "Send";document.getElementById("msendchat").innerHTML = "Send";
        document.getElementById("mchatlog").innerHTML = "";
        if(response.data.length > 0){
          for(each of response.data.reverse()){
            if(each.sender.id === parseInt(getCookie("hasura_id")) && each.seen === null){
              chatloglist+="<li class = 'mychat'><strong>"+each.text+"</strong><br><span class = 'chattime'>"+chat_ago(each.created)+"</span><br>Sent</li>";
            }else if(each.sender.id === parseInt(getCookie("hasura_id"))){
              chatloglist+="<li class = 'mychat'><strong>"+each.text+"</strong><br><span class = 'chattime'>"+chat_ago(each.created)+"</span><br>Seen </li>";
            }else{
              chatloglist+="<li class = 'youchat'><strong>"+each.text+"</strong><br><span class = 'chattime'>"+chat_ago(each.created)+"</span><br></li>";
              if(each.seen === null){
                $scope.setSeen(each.id);
              }
            }
          }
        document.getElementById("chatlog").innerHTML = chatloglist;
        document.getElementById("mchatlog").innerHTML = chatloglist;
        if(response.data[0].id != prevdataid){
          scrollChat();
          prevdataid = response.data[0].id;
      }
    }
    },function myError(response){
      sunNotify("<strong>Check your internet connection</strong>","alert-danger");
      document.getElementById("userlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";
      document.getElementById("muserlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";////console.log(response);
      $scope.getRequests();
    });
  }
  $scope.chatFunction = function(name,id){
    chatopen = 1;
    document.getElementById("mchatlog").innerHTML = "<i class = 'fas fa-spinner fa-spin'></i> <strong>Getting Chats</strong>";
    document.getElementById("mchathead").innerHTML = "<strong>"+name+"</strong>";
    document.getElementById("mchatrecid").value = id;
    var chatlist = document.getElementById("mchatlist");
    var chatApp = document.getElementById("mchatApp");
    var chatbs = document.getElementsByClassName("chatbtn");
    var chaters = document.getElementsByClassName("fname");
    if(chatlist.classList.contains("col-sm-12","col-xs-12")){
      for(each of chatbs){
        each.classList.add("hidden");
      }
      for(each of chaters){
        each.classList.add("hidden");
      }
      chatApp.classList.remove("hidden");
      chatlist.classList.remove("col-sm-12","col-xs-12");
      chatlist.classList.add("col-xs-4","col-sm-4");
      $scope.getChats(id);
    }
    else{
      document.getElementById("mchatbox").innerHTML = "";
      for(each of chatbs){
        each.classList.remove("hidden");
      }
      for(each of chaters){
        each.classList.remove("hidden");
      }
      chatApp.classList.add("hidden");
      chatlist.classList.add("col-xs-12","col-sm-12");
      chatlist.classList.remove("col-xs-4","col-sm-4");
    }
  }
  var curlist = document.getElementById("muserlist").innerHTML;
  $scope.checkstatus = function(each,newlist,iterator,users){
      //console.log(each);
      //console.log(users);
      each = JSON.parse(each);
      users = JSON.parse(users);
      //console.log(users);
      var limit = users.length;
      //console.log("Adding "+each.friend_profile.id+"\n");
        ////console.log("Info of "+each.friend_profile.id+"\n");
        ////console.log(response);
        if(each.friend_profile.online.length > 0){
          ////console.log(each.friend_profile.id+" is offline");
            var cr = each.friend_profile.online[0].created
            ////console.log(cr);
            if(time_ago(cr) === 1){
              newlist = "<li class = 'alert alert-info users' title = '"+each.friend_profile.username+"'> <i class = 'green fas fa-circle'></i> <img src = '"+each.friend_profile.proimg+"' class = 'chatdp'/> <span class = 'badge level'>"+each.friend_profile.level+"</span><span class = 'badge newchat newchat_"+each.friend_profile.id+"'></span> <strong class = 'fname'>"+each.friend_profile.fname+" <button onclick ='angular.element(this).scope().chatFunction(\""+each.friend_profile.fname+"\","+each.friend_profile.id+")' type = 'button' class = 'chatbtn btn btn-success' title = 'Reply chat to "+each.friend_profile.fname+"' title = 'Message "+each.friend_profile.fname+"'><i class = 'fa fa-comment'></i></button></strong></li>" + newlist;
              $scope.newcount ++;
            }
            else{
            newlist += "<li class = 'alert alert-info users' title = '"+each.friend_profile.username+" online at "+chat_ago(cr)+"'> <i class = 'red far fa-circle'></i> <img src = '"+each.friend_profile.proimg+"' class = 'chatdp'/><span class = 'badge level'>"+each.friend_profile.level+"</span> <span class = 'badge newchat newchat_"+each.friend_profile.id+"'></span> <strong class = 'fname'>"+each.friend_profile.fname+" <button onclick = 'angular.element(this).scope().chatFunction(\""+each.friend_profile.fname+"\","+each.friend_profile.id+")' type = 'button' class = 'chatbtn btn btn-info' title = 'Send chat to "+each.friend_profile.fname+"' title = 'Message "+each.friend_profile.fname+"'><i class = 'fa fa-comment'></i></button></strong></li>";
            }
        }
        else{
        newlist += "<li class = 'alert alert-info users' title = '"+each.friend_profile.username+"'> <i class = 'red far fa-circle'></i> <img src = '"+each.friend_profile.proimg+"' class = 'chatdp'/><span class = 'badge level'>"+each.friend_profile.level+"</span> <span class = 'badge newchat newchat_"+each.friend_profile.id+"'></span> <strong class = 'fname'>"+each.friend_profile.fname+"  <button onclick = 'angular.element(this).scope().chatFunction(\""+each.friend_profile.fname+"\","+each.friend_profile.id+")' type = 'button' class = 'chatbtn btn btn-info' title = 'Send chat to "+each.friend_profile.fname+"' title = 'Message "+each.friend_profile.fname+"'><i class = 'fa fa-comment'></i></button></strong></li>";
        }
      //console.log(JSON.stringify(users));
        if(iterator+1 < limit){
          $scope.checkstatus(JSON.stringify(users[iterator+1]),newlist,iterator+1,JSON.stringify(users));
        }
        else{
          if($scope.newcount != $scope.oncount){
            if($scope.newcount != 0){
              $scope.oncount = $scope.newcount+" Online";
            }
            else{
              $scope.oncount = "";
            }
          }
          //console.log(newlist);
          if(curlist != newlist){
              document.getElementById("userlist").innerHTML = newlist;
              document.getElementById("muserlist").innerHTML = newlist;
              $scope.maintainChat();
              curlist = newlist;
          }
          $scope.checkChat(users);
        }
      }

  $scope.getFriendsList = function(newlist){
    var chatdata = {};
    chatdata["type"] = "select";
    chatdata["args"] = {};
    chatdata["args"]["table"] = "profile";
    chatdata["args"]["columns"]=["*"];
    chatdata["args"]["where"] = {};
    chatdata["args"]["where"]["id"] = getCookie("hasura_id");
    chatdata["args"]["columns"][1]={};
    chatdata["args"]["columns"][1]["name"] = "myfriends";
    chatdata["args"]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["order_by"] = "friend_id";
    chatdata["args"]["columns"][1]["columns"][1] = {};
    chatdata["args"]["columns"][1]["columns"][1]["name"] = "friend_profile";
    chatdata["args"]["columns"][1]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1] = {};
    chatdata["args"]["columns"][1]["columns"][1]["name"] = "friend_profile";
    chatdata["args"]["columns"][1]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1]["columns"]["order_by"] = "-id";
    chatdata["args"]["columns"][1]["columns"][1]["columns"][1] = {}
    chatdata["args"]["columns"][1]["columns"][1]["columns"][1]["name"] = "online";
    chatdata["args"]["columns"][1]["columns"][1]["columns"][1]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2] = {}
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["name"] = "sent";
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["columns"] = ["*"];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"] = {};
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"] = [{}];
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][0] = {};
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][1] = {};
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][0]["friend_id"] = getCookie("hasura_id");
    chatdata["args"]["columns"][1]["columns"][1]["columns"][2]["where"]["$and"][1]["seen"] = null;
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data : JSON.stringify(chatdata),
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
      }
    }).then(function mySuccess(response){
      if(response.data.length > 0 && response.data[0].myfriends.length > 0 ){
        var user  = JSON.stringify(response.data[0]);
        var each = JSON.stringify(response.data[0].myfriends[0]);
        /*for(each of response.data[0].myfriends){
          $scope.checkstatus(each,newlist);
        }*/
          $scope.newcount = "";
          $scope.checkstatus(JSON.stringify(response.data[0].myfriends[0]),newlist,0,JSON.stringify(response.data[0].myfriends));
      }else{
        if(curlist != newlist){
            document.getElementById("userlist").innerHTML = newlist;
            document.getElementById("muserlist").innerHTML = newlist;
            $scope.maintainChat();
            curlist = newlist;
        }
      }
    },function myError(response){
      document.getElementById("userlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";
      document.getElementById("muserlist").innerHTML = "<div class = 'alert alert-danger'><Strong>Reconnecting...</strong></div>";////console.log(response);
      $scope.getRequests();
    });
  }
  $scope.addonline = function(){
    var usedata = {};
    ////console.log(t);
    usedata["type"] = "insert";
    usedata["args"] = {};
    usedata["args"]["table"] = "status";
    usedata["args"].objects =  [{
        "id":parseInt(getCookie("hasura_id")),
        "status":"online",
      }];
      usedata["args"]["returning"] = ["created"];
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(usedata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
        }
      }).then(function mySuccess(response){
        console.log(response.data);
          setCookie("mytime",response.data.returning[0].created);
        ////console.log("Added Online Status");
      },function myError(response){
        if(response.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
    }
        ////console.log("Failed to Add online");
        //console.log(response);
      });
  }
  $scope.online = function(){
    var statdata = {};
    statdata["type"] = "delete";
    statdata["args"] = {};
    statdata["args"]["table"] = "status";
    statdata["args"]["where"] = {"id" : getCookie("hasura_id")};
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(statdata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
        }
      }).then(function mySuccess(response){
        console.log(response.data);
        $scope.addonline();
      },function myError(response){
        ////console.log(response);
        if(response.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
    }
      });
  }
$scope.getRequests = function(){
  var reqcount = 0;
  var newlist = "";
  ////console.log("\ngetting requests\n");
  var reqdata = {};
  reqdata["type"] = "select";
  reqdata["args"] = {};
  reqdata["args"]["table"] = "requests";
  reqdata["args"]["columns"]=["*"];
  reqdata["args"]["columns"][1] = {};
  reqdata["args"]["columns"][1]["name"] = "requester";
  reqdata["args"]["columns"][1]["columns"] = ["*"];
  reqdata["args"]["where"] = {};
  reqdata["args"]["where"]["recid"] = getCookie("hasura_id");
  $http({
    method : "POST",
    url : "https://data.unluckily34.hasura-app.io/v1/query",
    data : JSON.stringify(reqdata),
    withCredentials : true,
    headers : {
      'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
    }
  }).then(function mySuccess(response){
    document.getElementById("reqcount").innerHTML = "";
    list = "";
    for(each of response.data){
      document.getElementById("reqcount").innerHTML = ++reqcount;
      list += each.requester.fname+" ";
      newlist += "<li class = 'alert alert-info users' title = 'Accept Request from "+each.requester.username+"'><span class = 'badge level'>"+each.requester.level+"</span><button onclick = 'angular.element(this).scope().acceptRequest("+each.recid+","+each.reqid+");' type = 'button' class = 'btn btn-primary btn-sm'><strong>Accept</strong></button> <button onclick = 'angular.element(this).scope().deleteRequest("+each.reqid+");' type = 'button' class = 'btn btn-danger btn-sm' title = 'Delete Request from "+each.requester.fname+"'><strong>Delete</strong></button> <img src = '"+each.requester.proimg+"' class = 'chatdp'/> <strong>"+each.requester.fname+"</strong></li><br>"
    }
    //console.log("\nrequests : "+reqcount+"\n notified : "+notif);
    if(reqcount > notif && reqcount > 0){
        $scope.getFriendsList(newlist);
        notifyMe("Sunshine Request","You have friend requests from "+list);
        notif = reqcount;
    }else if(reqcount < notif && reqcount > 0){
      $scope.getFriendsList(newlist);
        notifyMe("Sunshine Request","You have friend requests from "+list);
        notif = reqcount;
    }else{
        $scope.getFriendsList(newlist);
        console.log(newlist);
    }
  },function myError(response){
    if(response.message === "invalid authorization token"){
      if(loggingout === 0){
        sunNotify("<strong>Please Relogin</strong>","alert-danger");
        $scope.logout();
      }
    }
    ////console.log(response);
  });
    }
  $scope.deleteRequest = function(id){
    var usedata = {};
    usedata["type"] = "delete";
    usedata["args"] = {};
    usedata["args"]["table"] = "requests";
    usedata["args"]["where"] = {};
    usedata["args"]["where"]["reqid"] = id;
    usedata["args"]["where"]["recid"] = getCookie("hasura_id");
    $http({
      method : "POST",
      url : "https://data.unluckily34.hasura-app.io/v1/query",
      data: JSON.stringify(usedata),
      withCredentials : true,
      headers:{
        'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token")
      }
    }).then(function mySuccess(response){
      $scope.getRequests();
    },function myError(response){
      if(response.message === "invalid authorization token"){
        if(loggingout === 0){
          sunNotify("<strong>Please Relogin</strong>","alert-danger");
          $scope.logout();
        }
    }
      ////console.log("Failed to Cancel Request");
    });
  }
  $scope.acceptRequest = function(id1,id2){
    var acceptdata = {};
    acceptdata["type"] = "insert";
    acceptdata["args"] = {};
    acceptdata["args"]["table"] = "friends";
    acceptdata["args"].objects =  [{
        "id":id1,
        "friend_id":id2,
      }];
      $http({
        method : "POST",
        url : "https://data.unluckily34.hasura-app.io/v1/query",
        data : JSON.stringify(acceptdata),
        withCredentials : true,
        headers : {
          'Content-type' : 'application/json','Authorization' : 'Bearer '+getCookie("auth_token"),
        }
      }).then(function mySuccess(response){
        $scope.acceptRequest(id2,id1);
      },function myError(response){
        if(response.message === "invalid authorization token"){
          if(loggingout === 0){
            sunNotify("<strong>Please Relogin</strong>","alert-danger");
            $scope.logout();
          }
    }else{
        $scope.deleteRequest(id2);
      }
        ////console.log(response);
      });
  }
});
angular.bootstrap(document.getElementById("newsAppDiv"), ['newsApp']);
angular.bootstrap(document.getElementById("shinetable"), ['shineTableApp']);
angular.bootstrap(document.getElementById("mshinetable"), ['mshineTableApp']);
angular.bootstrap(document.getElementById("userDiv"), ['userApp']);
angular.bootstrap(document.getElementById("muserDiv"), ['muserApp']);
angular.bootstrap(document.getElementById("signupdiv"), ['signupApp']);
angular.bootstrap(document.getElementById("resetFormDiv"), ['resetPwdApp']);
angular.bootstrap(document.getElementById("proupdiv"), ['profileApp']);
angular.bootstrap(document.getElementById("userProfileDiv"), ['userProfileApp']);
angular.bootstrap(document.getElementById("profilepane"), ['muserProfileApp']);
angular.bootstrap(document.getElementById("mchatlist"), ['mchatListApp']);
angular.bootstrap(document.getElementById("mchatApp"), ['mchatApp']);
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
function logInCall(){
  alert("We're working on it");
}


/*function time(){
    var today = new Date();
    var h = today.getHours()
  if (h>12) {h= h- "12"} ;
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  var r = parseInt(s) * 1;
  var g = parseInt(s) * 3;
  var b = parseInt(s) * 5;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

time();
*/
