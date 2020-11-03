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
    var elec=$("#electronics");
    $("#nav-ul li:nth-child(1)").click(function(){
        $("#items-placeholder").append(elec);
    });
    $("#nav-ul li:nth-child(2)").click(function(){
        $("#clothes").show();
    })
});