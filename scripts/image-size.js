$(document).ready(function () {
    $(".portfolio-image").click(function () {
        var img = $(this.getElementsByTagName("img")[0]);
        var src = img.attr('src');
        $("body").append("<div class='popup'>" +
            "<div class='popup-background'></div>" +
            "<img src='" + src + "' class='popup-image' />" +
            "</div>");
        $(".popup").fadeIn(200);
        $(".popup-background").click(function () {   
            $(".popup").fadeOut(200);
            setTimeout(function () {
                $(".popup").remove();
            }, 200);
        });
    });
});