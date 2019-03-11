$("button").click(function(){
    var em=$(".eom").val();
    $(".end").append(em);
    var tc=$(".toc").val();
    $(".nde").append(tc);
    var year=$(".baby").val();
    $(".dne").append(2019 - parseInt(year));
    var color=$(".blue").val();
    var number=$(".ten").val();
    var year=$(".baby").val();
    $(".now").append((2019 - parseInt(year))*parseInt(number));
    $(".won").append(number);
    $(".ew").append(color);
    $("p").show();
    $("h1").hide();
    $("h2").hide();
    $("img").hide();
    $("button").hide();
    $("input").hide();
    $(".other").hide();
    });

