

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


//Services section 
const arrowLeft = document.querySelector(".serv-prev-btn");
const arrowRight = document.querySelector(".serv-next-btn");
let servicesWrap = document.querySelector(".services-wrap")
const cards = [...document.querySelectorAll(".services-card")];
const selectors = [...document.querySelectorAll(".serv-selectors div")];


//Testimonials section 
const prevBtn = document.querySelector(".test-prev-btn");
const nextBtn = document.querySelector(".test-next-btn");
const cardsDiv = document.querySelector(".testimonial-cards")
const testCards = [...document.querySelectorAll(".testimonial-card")];
const indicators = [...document.querySelectorAll(".test-selectors div")]

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


// Services card animations
const removeAddClass = function(element, class1, class2){
    element.classList.remove(class1);
    element.classList.add(class2);
}

// Selector switching 
let index = 0;
const selectorSwitch = function() {
    selectors.forEach(selector =>{
        selector.classList.remove("selector-active");
    });
    if(index >= 3){
        index = 0;
    } else if(index <= -1){
        index = 2;
    }
    selectors[index].classList.add("selector-active");
}



const nextCard = function() {
    cards.forEach(card=> {
        if(card.classList.contains("middle-card")){
            removeAddClass(card, "middle-card", "left-card")    
        } else if (card.classList.contains("right-card")){
            setTimeout(() => {
                removeAddClass(card, "right-card", "middle-card")      
            }, 100);
        } else if (card.classList.contains("left-card")){
            removeAddClass(card, "left-card", "right-card")
        }
    });
    index ++;
    selectorSwitch();
}

const prevCard = function(){
    cards.forEach(card=> {
        if(card.classList.contains("middle-card")){
            removeAddClass(card, "middle-card", "right-card")    
        } else if (card.classList.contains("right-card")){
            removeAddClass(card, "right-card", "left-card")      
        } else if (card.classList.contains("left-card")){
            setTimeout(() => {
                removeAddClass(card, "left-card", "middle-card")
            }, 100);
        }
    });
    index --;
    selectorSwitch();
}

//Click events for arrow buttons 
arrowLeft.addEventListener("click", function(){
    prevCard();
});
arrowRight.addEventListener("click", function(){
    nextCard();
});


// Touch events for swipe animation on touch screens 

let XStart;
let startTime;
const leftThreshold = 100;
const rightThreshold = -100;
const allowedTime = 350;


    servicesWrap.addEventListener("touchstart", function(e) {
        const touchObj = e.changedTouches[0];
        XStart = touchObj.pageX;
        startTime = new Date().getTime();

    });

    servicesWrap.addEventListener("touchend", function(e){
        const touchObj = e.changedTouches[0];
        const XDiff = XStart - touchObj.pageX;
        timeDiff = new Date().getTime() - startTime;
    
        if(timeDiff < allowedTime){
            if(XDiff > leftThreshold){ 
                nextCard();
            } else if (XDiff < rightThreshold){
                    prevCard();            
            }
        }

    });




//testimonials carousel functionality
//boolean to check if animation is finished before starting
//new one
let isAnimating = false;


//Indicator switching
let indicatorIndex = 0;
const indicatorSwitch = function() {
    indicators.forEach(indicator =>{
        indicator.classList.remove("selector-active");
    });
    if(indicatorIndex >= 3){
        indicatorIndex = 0;
    } else if(indicatorIndex <= -1){
        indicatorIndex = 2;
    }
    indicators[indicatorIndex].classList.add("selector-active");
}

const nextTestCard = function(){
    if (isAnimating) return;
isAnimating = true;
testCards.forEach((card) => {
    if (card.classList.contains("test-middle")) {
    removeAddClass(card, "test-middle", "test-left");
    } else if (card.classList.contains("test-left")) {
    card.style.display = "none";
    removeAddClass(card, "test-left", "test-right");
    setTimeout(() => {
        card.style.display = "flex";
        isAnimating = false;
    }, 300);
    } else if (card.classList.contains("test-right")) {
    removeAddClass(card, "test-right", "test-middle");
    }
});
indicatorIndex ++;
indicatorSwitch();
};

const prevTestCard = function(){
    if (isAnimating) return;
isAnimating = true;
testCards.forEach((card) => {
    if (card.classList.contains("test-middle")) {
    removeAddClass(card, "test-middle", "test-right");
    } else if (card.classList.contains("test-left")) {
    removeAddClass(card, "test-left", "test-middle");
    } else if (card.classList.contains("test-right")) {
    card.style.display = "none";
    removeAddClass(card, "test-right", "test-left");
    setTimeout(() => {
        card.style.display = "flex";
        isAnimating = false;
    }, 300);
    }
});
indicatorIndex --;
indicatorSwitch();
}


cardsDiv.addEventListener("touchstart", function(e){
    const touchObj = e.changedTouches[0];
    XStart = touchObj.pageX;
    startTime = new Date().getTime();
})
cardsDiv.addEventListener("touchend", function(e){
    const touchObj = e.changedTouches[0];
    XDiff = XStart - touchObj.pageX;
    timeDiff = new Date().getTime() - startTime;

    if (timeDiff < allowedTime){
        if(XDiff > leftThreshold){ 
            nextTestCard();
        } else if (XDiff < rightThreshold){
            prevTestCard();            
        }
    }
})

//click events for previous and next buttons using the
//same function from the services section to remove and add a class
prevBtn.addEventListener("click", function () {
    prevTestCard();
});

nextBtn.addEventListener("click", function () {
    nextTestCard();
});









