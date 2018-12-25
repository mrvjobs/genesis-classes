var counter = 2;
function clickOnMe(){
    var div = document.getElementById("divFirst");
    if((counter % 2) == 0){
        div.style.opacity = 1;
        div.style.height = "auto";
    }
    else {
        div.style.opacity = 0;
        div.style.opacity = 0;
    }
    counter = counter + 1;
}