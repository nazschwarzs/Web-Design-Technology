$(document).ready(function () {
    $(".hide").click(function () {
        $(".show").fadeToggle("slow");
    });

    $(".card img").click(function () {
        $(this).siblings(".pH").slideToggle("slow");
    });

});
