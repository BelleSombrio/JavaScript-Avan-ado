function startProgress() {
    var progressbar = document.getElementById("progressbar") 
var value = 0 ;
var interval = setInterval(function () {
    value += 10;
    progressbar.value - value;
    progressbar.innerHTML - value + "%";

    if (value >= progressbar.max) {
        clearInterval(interval);
        progressbar.innerHTML = "Completo!";
    }
}, 1000);
    
}