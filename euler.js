const toTop=document.querySelector(".buton-scroll");
window.addEventListener("scroll", () =>{
    if(window.scrollY>100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");
    var targetSection = document.getElementById("targetSection");

    scrollButton.addEventListener("click", function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton1");
    var targetSection = document.getElementById("targetSection1");

    scrollButton.addEventListener("click", function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton2");
    var targetSection = document.getElementById("targetSection2");

    scrollButton.addEventListener("click", function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton3");
    var targetSection = document.getElementById("targetSection3");

    scrollButton.addEventListener("click", function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton4");
    var targetSection = document.getElementById("targetSection4");

    scrollButton.addEventListener("click", function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton5");
    var targetSection = document.getElementById("targetSection5");

    scrollButton.addEventListener("click", function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});