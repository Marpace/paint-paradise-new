const portraitImages = [...document.querySelectorAll(".portrait")];
const xsImages = [...document.querySelectorAll(".image-xs")];


function populateImg(array, path){
    let n = 1;
    array.forEach(item => {
        item.style.backgroundImage = `url("../images/gallery/gallery-img-${path} (${n}).jpg")`
        n += 1;
    });
}

populateImg(portraitImages, "portrait");
populateImg(xsImages, "xs");
