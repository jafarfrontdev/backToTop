
var toTop = document.querySelector(".to-top");

window.addEventListener("scroll",function(){
    if(window.pageYOffset>700) {
    toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
