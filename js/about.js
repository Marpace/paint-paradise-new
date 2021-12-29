
// ***************************  ABOUT PAGE  ****************************

//About page - Instagram carousel 
const instaPrevBtn = document.querySelector(".instagram-prev-btn");
const instaNextBtn = document.querySelector(".instagram-next-btn");
const instaCarouselInner = document.querySelector(".instagram-carousel-items");
const instaCarouselItems = [...document.querySelectorAll(".instagram-carousel-items-item")]
const instagramSelectors = [...document.querySelectorAll(".instagram-selectors div")]


// function to populate carousel image divs 
function populateImg(){
    let n = 1;
    instaCarouselItems.forEach(item => {
        item.style.backgroundImage = `url("../images/about/instagram-carousel/insta-${n}.jpg")`
        n += 1;
    });
}

populateImg();



//INSTAGRAM CAROUSEL 

let position = 0;
function changePosition(direction) {
    if(direction === "prev") {
        if(position >= 0) return;
        else {
            if(screen.width < 768) position += 170;
            else if (screen.width < 1200) position += 270;  
            else position += 320;     
        }
    } else if(direction === "next") {
        if(screen.width < 768 && position <= -511) return;
        else if(screen.width < 1200 && position <= -1080) return;
        else if(screen.width >= 1200 && position <= -1280) return;
        
        else {
            if(screen.width < 768) position -= 170;
            else if (screen.width < 1200) position -= 270;
            else position -= 320;       
        }
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

