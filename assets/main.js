const bars = document.getElementById("bar").addEventListener("click" , function(){
    document.getElementById("nav-bar").classList.toggle("show");
    // document.getElementById("nav-bar").style.position="absolute";
});
let scrolling = document.getElementById("links-bar");
scrolling.addEventListener("mouseover" , function(){
    scrolling.style.overflowY="auto";
})
scrolling.addEventListener("mouseout" , function(){
    scrolling.style.overflowY="hidden";
})

// table scroll bar
let tablescroll = document.getElementById("table-scroller");
tablescroll.addEventListener("mouseover" , function(){
    tablescroll.style.overflowX="auto";
})
tablescroll.addEventListener("mouseout" , function(){
    tablescroll.style.overflowX="hidden";
})