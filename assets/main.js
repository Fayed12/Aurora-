const bars = document.getElementById("bar").addEventListener("click" , function(){
    document.getElementById("nav-bar").classList.toggle("show");
    // document.getElementById("nav-bar").style.display="block";
    document.getElementById("nav-bar").style.position="absolute";
});

let scrolling = document.getElementById("links-bar");
scrolling.addEventListener("mouseenter" , function(){
    scrolling.style.overflowY="auto";
})
scrolling.addEventListener("mouseleave" , function(){
    scrolling.style.overflowY="hidden";
})

