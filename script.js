$(".qone").click(function(){
    var em=$(".eom").val();
    $(".end").append(em);
    });
    
$(".qtwo").click(function(){
    var tc=$(".toc").val();
    $(".nde").append(tc);
    });
          
$(".qthree").click(function(){
    var year=$(".baby").val();
    $(".dne").append(2019 - parseInt(year));
    });

    
$(".qfour").click(function(){
    var number=$(".ten").val();
    var year=$(".baby").val();
    $(".now").append((2019 - parseInt(year))*parseInt(number));
    $(".won").append(number);
    });
    
    
$(".qfive").click(function(){
    var color=$(".blue").val();
    $(".ew").append(color);
    $("p").show();
    $("h1").hide();
    $("h2").hide();
    $("img").hide();
    $("button").hide();
    $("input").hide();
    $(".other").hide();
    });
    



