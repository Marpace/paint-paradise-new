const images = [...document.querySelectorAll(".column-item")];
const modal = document.querySelector(".modal")
const modalImg = document.querySelector(".modal img")
const modalCloseBtn = document.querySelector(".modal-close-btn");

images.forEach(image => {
    image.addEventListener("click", function(){
        modal.style.display = "flex";
        modalImg.src = image.src;
        setTimeout(() => {
            modalImg.style.opacity = "1";
        }, 1);
    });
});




// images.forEach(image => {
//     image.addEventListener("click", function() {

//         function setSize(height = "85vh", width = "95%"){
//             modalImg.style.height = height;
//             modalImg.style.width = width;
//         }    


//         if(image.classList.contains("gallery-l") || image.classList.contains("gallery-xl")){
//             if(screen.width >= 400 && screen.width <=599) setSize(undefined, "70%");
//             else if(screen.width >= 600 && screen.width <=799) setSize(undefined, "60%");
//             else if(screen.width >= 800 && screen.width <=999) setSize(undefined, "50%");
//             else if(screen.width >= 1000 && screen.width <= 1199) setSize(undefined, "40%");
//             else if(screen.width >= 1200 && screen.width <= 1399) setSize(undefined, "30%");
//             else if(screen.width >= 1400) setSize(undefined, "25%");
//             else setSize("85vh", "85%");

//             modalImg.style.transform = "translateY(20px)";
//         }
//         else if(image.classList.contains("gallery-m")){
//             if(screen.width >= 400 && screen.width <=499) setSize("450px", "85%");
//             if(screen.width >= 500 && screen.width <=699) setSize("600px", "85%");
//             if(screen.width >= 700 && screen.width <=799) setSize("700px", "70%");
//             if(screen.width >= 800 && screen.width <=899) setSize("700px", "60%");
//             if(screen.width >= 900 && screen.width <=999) setSize("600px", "50%");
//             if(screen.width >= 1000 && screen.width <=1099) setSize("600px", "45%");
//             if(screen.width >= 1100 && screen.width <=1199) setSize("600px", "40%");
//             if(screen.width >= 1200 && screen.width <=1399) setSize("600px", "34%");
//             if(screen.width >= 1400 && screen.width <=1599) setSize("600px", "30%");
//         }
//         else if(image.classList.contains("gallery-s")){
//             if(screen.width >= 400 && screen.width <=449) setSize("350px", "90%");
//             if(screen.width >= 450 && screen.width <=499) setSize("400px", "90%");
//             if(screen.width >= 500 && screen.width <=599) setSize("450px", "90%");
//             if(screen.width >= 600 && screen.width <=899) setSize("550px", "90%");
//             if(screen.width >= 700 && screen.width <=799) setSize("600px", "90%");
//             if(screen.width >= 800 && screen.width <=899) setSize("80vh", "80%");
//             if(screen.width >= 900) setSize("80vh", "650px");
//         }
//         modal.style.display = "flex";
//         modalImg.src = image.src;
//         setTimeout(() => {
//             modalImg.style.opacity = "1";
//         }, 1);
//     });
// });

modalCloseBtn.addEventListener("click", function(){
    modal.style.display = "none";
});
