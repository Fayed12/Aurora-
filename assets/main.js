// functionalty of main side bar
const bars = document.getElementById("bar").addEventListener("click", function () {
    document.getElementById("nav-bar").classList.toggle("show");
    document.getElementById("Overlay").classList.toggle("overlay");
});
let scrolling = document.getElementById("links-bar");
scrolling.addEventListener("mouseover" , function(){
    scrolling.style.overflowY="auto";
})
scrolling.addEventListener("mouseout" , function(){
    scrolling.style.overflowY="hidden";
})

// ===============================================================================================================

// Product roadmap visible and hidden
let tableHeader = document.querySelectorAll(".arrowUp");
let auroraDetails = document.querySelectorAll(".auroraDetails");
let icon = document.querySelectorAll(".icon");

tableHeader.forEach((header, index) => {
    header.addEventListener("click", () => {
        auroraDetails[index].classList.toggle("hiddentable");
        auroraDetails[index].classList.toggle("aurora-details");
        icon[index].classList.toggle("rotate");
    });
});

// ===============================================================================================================

//functionalty of  table scroll bar
let tablescroll = document.getElementById("table-scroller");
tablescroll.addEventListener("mouseover" , function(){
    tablescroll.style.overflowX="auto";
})
tablescroll.addEventListener("mouseout" , function(){
    tablescroll.style.overflowX="hidden";
})
