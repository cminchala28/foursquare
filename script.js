// JavaScript File
$(document).ready(function(){
$("#Submit") .click(function(){
  var url= "https://api.foursquare.com/v2/venues/search"
  var client= "?client_id=MRBSX3VVOXTRIQ3D0WGUVZLW1X2PFMNWYUKFDRGX4NT1GLX5"
   var secret= "&client_secret=5JXQTSWKP1CADWPMDJUZ4WTX53K4O30UNRQHG1QVPEXQKGTN"
  var v= "&v=20130815"
  var l= "&near=" + $("#location").val()
  var query= "&query=" + $("#type").val()
  var fullUrl= url+ client + secret + v + l + query
    console.log(fullUrl)
    $.getJSON(fullUrl,function(response){
   
    });
  
  });
    
});