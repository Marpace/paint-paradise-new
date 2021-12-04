

// Selecting elements 
// Navigation
const toggler = document.querySelector(".navbar-toggler");
const togglerDivs = [...document.querySelectorAll(".toggler-div")];
const navMenu = document.querySelector(".collapsed-nav");
const navLinks = document.querySelector(".nav-links");


//Drop down menu
const dropDownArrow = document.querySelector(".services-nav-link i");
const dropDownMenu = document.querySelector(".drop-down-menu");


//Services section 
const arrowLeft = document.querySelector(".prev-btn");
const arrowRight = document.querySelector(".next-btn");
const cards = [...document.querySelectorAll(".services-card")];
const selectors = [...document.querySelectorAll(".services-indicators-div")];


//Testimonials section 
const prevBtn = document.querySelector("#testimonial-prev-btn");
const nextBtn = document.querySelector("#testimonial-next-btn");
const testCards = [...document.querySelectorAll(".testimonial-card")];
const indicators = [...document.querySelectorAll(".carousel-indicators-div")]

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
                dropDownArrow.style.transform = "rotate(180deg)"
            }
        }


        toggler.addEventListener("click", function(){
            toggleMenu();
        });

        // Drop down menu animation 
        const toggleDropDownMenu = function() {
            if(getComputedStyle(dropDownMenu).height === "0px"){
                dropDownArrow.style.transform = "rotate(0deg)"
                dropDownMenu.style.height = "170px";
            } else {
                dropDownArrow.style.transform = "rotate(180deg)"
                dropDownMenu.style.height = "0px";
            }
        }

        dropDownArrow.addEventListener("click", function(){
            toggleDropDownMenu();

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


        //Click events for arrow buttons 
        arrowLeft.addEventListener("click", function(){

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

            index --;
            selectorSwitch();

        });
        arrowRight.addEventListener("click", function(){

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

            index ++;
            selectorSwitch();

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


        //click events for previous and next buttons using the
        //same function from the services section to remove and add a class
        prevBtn.addEventListener("click", function () {
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
            }, 200);
            }
        });
        indicatorIndex --;
        indicatorSwitch();
        });

        nextBtn.addEventListener("click", function () {
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
            }, 200);
            } else if (card.classList.contains("test-right")) {
            removeAddClass(card, "test-right", "test-middle");
            }
        });
        indicatorIndex ++;
        indicatorSwitch();
        });










// const item1 = $('.item1');
// const item2 = $('.item2');
// const item3 = $('.item3');

// const items = [item1, item2, item3];

// const rotateForward = function(){
  

//     items.forEach(item => {
//         if(item.hasClass('toFront')){
//             item.animate({
//                 top: "160",
//                 opacity: 0
//             }, 200, function(){
//                 item.css("top", "");
//             });
//             item.delay(200).animate({
//                 opacity: 1
//             });
//             setTimeout(function(){
//                 item.addClass('toBack');
//                 item.removeClass('toFront');
//             }, 100);
            
//         } else if (item.hasClass('toMiddle')){
//             setTimeout(function(){
//                 item.addClass('toFront');
//             item.removeClass('toMiddle');
//             }, 100);
            
//         } else {
//             setTimeout(function(){
//                 item.addClass('toMiddle');
//             item.removeClass('toBack');
//             }, 100);
//         }
//     });   
// };

// const rotateBackwards = function(){
  
//     items.forEach(item => {
//         if(item.hasClass('toFront')){
//             setTimeout(function(){
//                 item.addClass('toMiddle');
//             item.removeClass('toFront');
//             }, 100);
            
//         } else if (item.hasClass('toMiddle')){
//             setTimeout(function(){
//                 item.addClass('toBack');
//             item.removeClass('toMiddle');
//             }, 100);
            
//         } else {
//             item.animate({
//                 top: "160",
//                 opacity: 0
//             }, 200, function(){
//                 item.css("top", "");
//             });
//             item.delay(200).animate({
//                 opacity: 1
//             });

//             setTimeout(function(){
//                 item.addClass('toFront');
//             item.removeClass('toBack');
//             }, 100);
//         }
//     });   
// };


// const selector1 = $('#selector-1')
// const selector2 = $('#selector-2')
// const selector3 = $('#selector-3')

// const selectors = [selector1, selector2, selector3]

// const cardsText1 = $('#cards-text-1');
// const cardsText2 = $('#cards-text-2');
// const cardsText3 = $('#cards-text-3');

// let animating;


// selector1.click(function(){
//     if(!animating){
//         animating = true;
//         if(item1.hasClass('toMiddle')){
//             rotateForward();
//         } 
//         if(item1.hasClass('toBack')){
//             rotateBackwards();
//         };
//         cardsText1.addClass('textActive');
//         cardsText2.removeClass('textActive');
//         cardsText3.removeClass('textActive');
       
//         selector1.addClass('selector-active')
//         selector2.removeClass('selector-active');
//         selector3.removeClass('selector-active');
        
//     }
//     animating = false;
// });
// selector2.click(function(){
//     if(!animating){
//         if(item2.hasClass('toMiddle')){
//             rotateForward();
//         } 
//         if(item2.hasClass('toBack')){
//             rotateBackwards();
//         };
//         cardsText2.addClass('textActive');
//         cardsText1.removeClass('textActive');
//         cardsText3.removeClass('textActive');
        
//         selector2.addClass('selector-active')
//         selector1.removeClass('selector-active');
//         selector3.removeClass('selector-active');
//     }   
//     animating = false;
// });
// selector3.click(function(){
//     if(!animating){
//         if(item3.hasClass('toMiddle')){
//             rotateForward();
//         } 
//         if(item3.hasClass('toBack')){
//             rotateBackwards();
//         };
//         cardsText3.addClass('textActive');
//         cardsText2.removeClass('textActive');
//         cardsText1.removeClass('textActive');
    
//         selector3.addClass('selector-active')
//         selector2.removeClass('selector-active');
//         selector1.removeClass('selector-active');
//     }
//     animating = false;
// });



// const cardsOptions = {
//     rootMargin: "0px",
//     threshold: .6
// };

// const cardsCallback = (entries, observer) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             item1.animate({
//                 opacity: "1"
//             }, 400);
//             item2.delay(200).animate({
//                 opacity: "1"
//             }, 400);
//             item3.delay(400).animate({
//                 opacity: "1"
//             }, 400);
//             item1.addClass('toFront') 
//             item2.addClass('toMiddle')
//             item3.addClass('toBack')

//             observer.unobserve(cardsTarget);
//         }
        
//     });
// };

// const cardsTarget = document.querySelector('.cards');

// const observer = new IntersectionObserver(cardsCallback, cardsOptions);

// observer.observe(cardsTarget);


// const toggler = $('#navbar-toggler');
// const navList = $('nav ul');

// const navLinks = document.querySelectorAll('li');
// const div1 = $('#toggler-div-1');
// const div2 = $('#toggler-div-2');
// const div3 = $('#toggler-div-3');
// toggler.click(() => {
//     navList.slideToggle();
// });

// const toggler = document.querySelector('#navbar-toggler');
// const div1 = document.querySelector('#toggler-div-1');
// const div2 = document.querySelector('#toggler-div-2');
// const div3 = document.querySelector('#toggler-div-3');
// const smallNav = document.querySelector('#small-nav');

// const animateToggler = function(element){
//     element.style.top = "15px"
//     element.style.width = "70%"
//     element.style.transition = ".1s"
// }
// const animateX = function(element){
//     element.style.top = ""
//     element.style.width = ""
//     element.style.transition = ""
// }
// toggler.addEventListener('click', function(){
//     if(getComputedStyle(div2).opacity === "1"){
//         animateToggler(div1);
//         animateToggler(div3);
//         div2.style.opacity = "0"
//         setTimeout(function(){
//             div1.style.transform = "rotate(45deg)";
//             div3.style.transform = "rotate(-45deg)";
//         }, 100);

//         smallNav.style.height = "170px";

//     } else {
//         div1.style.transform = "";
//         div3.style.transform = "";
        
//         setTimeout(() => {
//            animateX(div1);
//            animateX(div3) 
//            div2.style.opacity = "1"
//         }, 100);
//         smallNav.style.height = "0";
//     }
// })





// const carousel = document.querySelector('#carousel-body');
// const carouselItems = document.querySelectorAll('.test-car-item');

// const nextButton = document.querySelector('.button-next');
// const prevButton = document.querySelector('.button-previous');

// let counter = 1;
// const size = carouselItems[0].clientWidth + 45;

// carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

// const indicator = document.querySelector('#indicator-light');

// const moveLight = function(){
//     indicator.style.transition = '.4s'
//     if(counter === 1 || counter === 4){
//         indicator.style.transform = 'translateX(0)'
//     }
//     if(counter === 2){
//         indicator.style.transform = 'translateX(100%)'
//     }
//     if(counter === 0 || counter === 3){
//         indicator.style.transform = 'translateX(203%)'
//     }
// };

// nextButton.addEventListener('click', ()=>{
//     if(counter >= carouselItems.length -1) return;
//     carousel.style.transition = 'transform .7s ease-in-out';
//     counter++;
//     carousel.style.transform = 'translateX(' + (-size * counter) + "px)";
//     moveLight();
// });

// prevButton.addEventListener('click', ()=>{
//     if(counter <= 0) return;
//     carousel.style.transition = 'transform .7s ease-in-out';
//     counter--;
//     carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     moveLight();
// });

// carousel.addEventListener('transitionend', ()=>{
//     if(counter === 0){
//         carousel.style.transition = 'none';
//         counter = carouselItems.length -2;
//         carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     } else if (counter === carouselItems.length -1){
//         carousel.style.transition = 'none';
//         counter = 1;
//         carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });


// if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)

