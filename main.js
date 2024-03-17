

let sliderImages= Array.from(document.querySelectorAll(".slider-container img"));

let slidesCount= sliderImages.length;

console.log(slidesCount);

let currentSlide= 1;
let slideNumberElement= document.getElementById("slide-number");

let prevButton= document.getElementById("prev");
let nextButton= document.getElementById("next");

prevButton.onclick= prevSlide;
nextButton.onclick= nextSlide;

let ulElement= document.createElement("ul");
document.getElementById("indicators").appendChild(ulElement);
ulElement.setAttribute("id", "ul-Element")

console.log(ulElement)

for(let i=1; i<=slidesCount; i++){
    let liItem= document.createElement("li");
    ulElement.appendChild(liItem);
    let txtLi= document.createTextNode(i);
    liItem.appendChild(txtLi);
    liItem.setAttribute("data-index", i)

}



ulElementCreated= document.getElementById("ul-Element");

console.log(ulElementCreated);

UlelementBullets= Array.from(document.querySelectorAll("#ul-Element li"));

console.log(UlelementBullets);

for(let i=0; i<UlelementBullets.length; i++){
    UlelementBullets[i].onclick= function(){
        currentSlide= parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}

theChecker();
// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}

function theChecker(){
    slideNumberElement.textContent= "Slide #" + (currentSlide) + " of " + (slidesCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add("active");
    ulElementCreated.children[currentSlide - 1].classList.add("active");

    if(currentSlide==1){
        prevButton.classList.add("disabled");

    }
    else{
        prevButton.classList.remove("disabled");
    }

    if(currentSlide==slidesCount){
        nextButton.classList.add("disabled");

    }
    else{
        nextButton.classList.remove("disabled");
    }
}

function removeAllActive(){
    sliderImages.forEach((img)=>{
        img.classList.remove("active")
    })
    UlelementBullets.forEach((bullet)=>{
        bullet.classList.remove("active");
    })
}