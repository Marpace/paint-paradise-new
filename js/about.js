
// ***************************  ABOUT PAGE  ****************************

//About page - Instagram carousel 
const instaPrevBtn = document.querySelector(".instagram-prev-btn");
const instaNextBtn = document.querySelector(".instagram-next-btn");
const instaCarouselInner = document.querySelector(".instagram-carousel-items");
const instaCarouselItems = [...document.querySelectorAll(".instagram-carousel-items-item")]
const instagramSelectors = [...document.querySelectorAll(".instagram-selectors div")]


//INSTAGRAM CAROUSEL 

let position = 0;
function changePosition(direction) {
    if(direction === "prev") {
        if(position >= 0) return;
        else position += 170;       
    } else if(direction === "next") {
        if(position <= -511) return;
        else position -= 170;
    }
}

instaPrevBtn.addEventListener("click", function() {
    changePosition("prev");
    instaCarouselInner.style.left = `${position}px`;
    selectorSwitch("prev");
});

instaNextBtn.addEventListener("click", function() {
    changePosition("next");
    instaCarouselInner.style.left = `${position}px`;
    selectorSwitch("next");
});

//Selector switching 

function selectorSwitch(direction) {
    instagramSelectors.every(selector => {
        if(selector.classList.contains("selector-active")){
            if (direction === "next") {
                if(selector.nextElementSibling !== null){
                    selector.nextElementSibling.classList.add("selector-active")
                    selector.classList.remove("selector-active")
                    return false;
                }
            }
            else if(direction === "prev"){
                if(selector.previousElementSibling !== null){
                    selector.previousElementSibling.classList.add("selector-active")
                    selector.classList.remove("selector-active")
                }
            }
        }
        return true;
    });
}

console.log(getComputedStyle(instaCarouselItems[0]).marginLeft)