let darkMode = window.matchMedia("(prefers-color-scheme:dark)")


function setColorScheme(isDark) {
    if(isDark){

        
    }
    else{
        
    }

}
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility =() =>{
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    // console.log("1.",scrollLeftValue);

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    // console.log("2.",scrollableWidth);

    btnLeft.style.display =scrollLeftValue > 0? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", ()=>{
    tabMenu.scrollLeft += 100
    IconVisibility();
});
btnLeft.addEventListener("click", ()=>{
    tabMenu.scrollLeft -= 100
    IconVisibility();
});

window.onLoad = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth > window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "": "none";
}
window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth > window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "": "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft)

    btnLeft.style.display = scrollLeftValue > 0? "block" : "none";
    
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
  if(!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  IconVisibility()
  tabMenu.classList.add("dragging")
});

document.addEventListener("mouseup",()=>{
    activeDrag = false;
    tabMenu.classList.remove("dragging")
});



tabMenu.addEventListener("mousedown", () => {
    activeDrag = true
});


const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnCLick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active")
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active")
    });
    tabBtns[tabBtnCLick].classList.add("active");
    tabs[tabBtnCLick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", ()=>{
        tab_Nav(i);
    });

});


const link_active = document.querySelectorAll(".link-active");
const link_Nav = function(navIconClick){
    link_Nav.forEach((link_active) =>{
        link_active.classList.remove("link-active")
    });
    link_active[navIconClick].classList.add("active");

}

link_active.forEach((link_active, i) => {
    tabBtn.addEventListener("click", ()=>{
        link_active(i);
    });

});