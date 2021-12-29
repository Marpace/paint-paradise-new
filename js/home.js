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



// Services card animations
const removeAddClass = function(element, class1, class2){
    element.classList.remove(class1);
    element.classList.add(class2);
}


// Selector switching 
let servIndex = 0;
const selectorSwitch = function() {
    selectors.forEach(selector =>{
        selector.classList.remove("selector-active");
    });
    if(servIndex >= 3){
        servIndex = 0;
    } else if(servIndex <= -1){
        servIndex = 2;
    }
    selectors[servIndex].classList.add("selector-active");
}

// let servIndex = 0;
// function selectorSwitch(array, index) {
//     array.forEach(item =>{
//         item.classList.remove("selector-active");
//     });
//     if(index >= 3){
//         index = 0;
//     } else if(index <= -1){
//         index = 2;
//     }
//     array[index].classList.add("selector-active");
// }


const nextCard = function() {
    if(isAnimating) return;
    isAnimating = true;
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
    servIndex ++;
    selectorSwitch();

    setTimeout(() => {
        isAnimating = false;
    }, 300);
}

const prevCard = function(){
    if (isAnimating) return;
    isAnimating = true;
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
    servIndex --;
    selectorSwitch();
    
    setTimeout(() => {
        isAnimating = false;
    }, 300);
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
let testIndex = 0;
const testSelectorSwitch = function() {
    indicators.forEach(indicator =>{
        indicator.classList.remove("selector-active");
    });
    if(testIndex >= 3){
        testIndex = 0;
    } else if(testIndex <= -1){
        testIndex = 2;
    }
    indicators[testIndex].classList.add("selector-active");
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
testIndex ++;
testSelectorSwitch();
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
testIndex --;
testSelectorSwitch();
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
