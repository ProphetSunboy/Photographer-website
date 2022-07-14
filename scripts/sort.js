$(document).ready(function () {
    $(".portfolio-button").click(function () {
        var id = this.id;
        var panoramas = document.getElementsByClassName("portfolio-image panoramas");
        var portraits = document.getElementsByClassName("portfolio-image portraits");
        var macro = document.getElementsByClassName("portfolio-image macro");
        var journal = document.getElementsByClassName("portfolio-image journal");
        console.log(panoramas.length);
        console.log(panoramas[0]);
        console.log(panoramas[1]);
        if (id == "all-b") {
            Array.prototype.forEach.call(panoramas, function(elem){
                elem.style.display = "";
            });
            Array.prototype.forEach.call(portraits, function(elem){
                elem.style.display = "";
            });
            Array.prototype.forEach.call(macro, function(elem){
                elem.style.display = "";
            });
            Array.prototype.forEach.call(journal, function(elem){
                elem.style.display = "";
            });
        }

        if (id == "panoramas-b") {
            Array.prototype.forEach.call(panoramas, function(elem){
                elem.style.display = "";
                console.log(elem);
            });
            Array.prototype.forEach.call(portraits, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(macro, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(journal, function(elem){
                elem.style.display = "none";
            });
        }

        if (id == "portraits-b") {
            Array.prototype.forEach.call(portraits, function(elem){
                elem.style.display = "";
                console.log(elem);
            });
            Array.prototype.forEach.call(panoramas, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(macro, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(journal, function(elem){
                elem.style.display = "none";
            });
        }

        if (id == "macro-b") {
            Array.prototype.forEach.call(macro, function(elem){
                elem.style.display = "";
                console.log(elem);
            });
            Array.prototype.forEach.call(portraits, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(panoramas, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(journal, function(elem){
                elem.style.display = "none";
            });
        }

        if (id == "journal-b") {
            Array.prototype.forEach.call(journal, function(elem){
                elem.style.display = "";
                console.log(elem);
            });
            Array.prototype.forEach.call(panoramas, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(macro, function(elem){
                elem.style.display = "none";
            });
            Array.prototype.forEach.call(portraits, function(elem){
                elem.style.display = "none";
            });
        }
    });
});