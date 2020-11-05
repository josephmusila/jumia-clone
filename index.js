$(document).ready(function(){
    $("#login").click(function(){
        $("#login-det").slideToggle();

    });
    $("#help").click(function(){
        $("#help-det").slideToggle();
    });
    $("#cart").click(function(){
        $("#cart-det").slideToggle();
    });
  /*   var elec=$("#electronics");
    $("#nav-ul li:nth-child(1)").click(function(){
        $("#items-placeholder").append(elec);
    });
    $("#nav-ul li:nth-child(2)").click(function(){
        $("#clothes").show();
    }) */
    const elec=["tvs","cameras", "cables","cameras","wifi","tv holders","batteries"];
    const clothes=["men wear","women wear", "kids", "make up", "sports", "miscallaneous"];
    const books=["exercise books", "primary school", "religion", "advanced"];
    const furniture=["indoor","outdoor","gym","office"];

  $("#nav-ul li:nth-child(1)").click(function(){
       $.each(elec,function(index,value){
           $("#items-placeholder").append( "<div>" + index + ":" + value +  "</div>");
          
       })
    }) 

});
