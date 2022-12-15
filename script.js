$(function(){
    $("#w").toggle();
    $("#f").toggle();
    $("#k").toggle();
    $("#g").toggle();
    $("#h").toggle();

    $("#wg").click(function(){
        $("#w").toggle("slow");
        $("#f").css("display", "none");
        $("#k").css("display", "none");
        $("#g").css("display", "none");
        $("#h").css("display", "none");
    })

    $("#fg").click(function(){
        $("#w").css("display", "none");
        $("#f").toggle("slow");
        $("#k").css("display", "none");
        $("#g").css("display", "none");
        $("#h").css("display", "none"); 
    })

    $("#kg").click(function(){
        $("#w").css("display", "none");
        $("#f").css("display", "none");
        $("#k").toggle("slow");
        $("#g").css("display", "none");
        $("#h").css("display", "none"); 
    })

    $("#gg").click(function(){
        $("#w").css("display", "none");
        $("#f").css("display", "none");
        $("#k").css("display", "none");
        $("#g").toggle("slow");
        $("#h").css("display", "none");
    })

    $("#hg").click(function(){
        $("#w").css("display", "none");
        $("#f").css("display", "none");
        $("#k").css("display", "none");
        $("#g").css("display", "none");
        $("#h").toggle("slow");
    })
})