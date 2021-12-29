

// Selecting elements 
// Navigation
const toggler = document.querySelector(".navbar-toggler");
const togglerDivs = [...document.querySelectorAll(".toggler-div")];
const navMenu = document.querySelector(".collapsed-nav");
const navLinks = document.querySelector(".nav-links");
const servicesMenu = document.querySelector(".services-nav-link");

//Drop down menu
const dropDownArrow = document.querySelector(".drop-down-arrow");
const dropDownMenu = document.querySelector(".drop-down-menu");




window.onload = function (){
    let delay = 0;
    togglerDivs.forEach(div => {
        setTimeout(() => {
            div.style.width = "100%"
        }, delay);
        delay += 150;
    });
};


    // Navbar toggler animation 
const toggleMenu = function(){
    if(getComputedStyle(navMenu).height === "0px"){

        //Toggler into "x" animation
        togglerDivs[0].style.top = "15px";
        togglerDivs[2].style.top = "15px";
        togglerDivs[1].style.opacity = "0";
        setTimeout(() => {
            togglerDivs[0].style.transform = "rotate(45deg)";
            togglerDivs[2].style.transform = "rotate(-45deg)";
        }, 200);

        // Nav menu extend  animation 
        navMenu.style.height = "90vh"
    } else {

        //Toggler into lines animation
        togglerDivs[0].style.transform = "rotate(0deg)";
        togglerDivs[2].style.transform = "rotate(0deg)";
        togglerDivs[1].style.opacity = "1";
        
        setTimeout(() => {
            togglerDivs[0].style.top = "";
            togglerDivs[2].style.top = "30px";
        }, 200);

        // Nav menu collapse animation
        navMenu.style.height = "0px"
        
        // Drop down collapse animation
        dropDownMenu.style.height = "0px"
        dropDownArrow.style.transform = "rotate(0deg)"
    }
}


toggler.addEventListener("click", function(){
    toggleMenu();
});

// Drop down menu animation (only for screen width 599px or less)
const toggleDropDownMenu = function() {
    if(window.screen.width <= 599){
        if(getComputedStyle(dropDownMenu).height === "0px"){
            dropDownArrow.style.transform = "rotate(180deg)"      
            dropDownMenu.style.height = "150px";
        } else {
            dropDownArrow.style.transform = "rotate(0deg)"
            dropDownMenu.style.height = "0px";
        }
    }
};

dropDownArrow.addEventListener("click", function(){
    toggleDropDownMenu()
});






