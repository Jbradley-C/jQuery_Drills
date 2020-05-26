// Handler for .ready() called.
$( document ).ready(function() {
    
    $("#btnSubmit").click(function(e){
        alert("kjlkkjlkajljlklj");

    });

    $("form").submit(function() {
        e.prevemDefault();
    //    alert($("input[name="name"]").val());

        $("div").append($(`<h2>${$("input[name=name"]").val()}</h2>`));
        $("h2").mouseover(function(){
            $(this).css({
                "background-color": "yellow"
                "border-radius": (Math.random() *50) + "px"
        });

    });

    $("input[name="name" ] ").on("keyup", function() {
        if ($("input[name= "name"]").val() ==="") {
            $("#btnSubmit").attr("disabled", true);
        }else {
            $("#btnSubmit").attr("disabled", false);
        }
        

    });
    
    $("body").append($("<div></div>"));








  });