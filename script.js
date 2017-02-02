// JavaScript File
$(document).ready(){
$("#submit") .click(function(){
  var url= "https://api.foursquare.com/v2/venues/search"
  var client= "?client_id=CLIENT_ID"
   var secret= "&client_secret=CLIENT_SECRET"
  var v= "&v=20130815"
  var l= "&ll=40.7,-74"
  var query= "&query=sushi"
  varfullUrl= url+ client + secret + v + l + query
    })                                                                                                                                                                                                                                                                                                                                                                   
})