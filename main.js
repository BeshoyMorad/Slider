//Get the imgs and their number
let sliderImgs = document.querySelectorAll(`.slider-container img`);

let sliderCount = sliderImgs.length,
currentSlide = 1;


//create the pagination and append it to the page
let paginationList = document.createElement(`ul`);
for (var i = 1; i <= sliderCount; i++) {
  let paginationItem = document.createElement(`li`);
  paginationItem.setAttribute(`data-index`, i)
  paginationItem.appendChild(document.createTextNode(i));
  paginationList.appendChild(paginationItem);
};
document.querySelector(`.indicators`).appendChild(paginationList);


//Get the main elements from the html page
let sliderNum = document.querySelector(`.slider-container .slider-num`);
let nextButton = document.querySelector(`.slider-controls .next`);
let prevButton = document.querySelector(`.slider-controls .prev`);
let bullets = document.querySelectorAll(`.slider-controls .indicators ul li`);

//Handling the click on the buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
checker();

function nextSlide() {
  if (!nextButton.classList.contains(`disabled`)) {
    currentSlide++;
    checker();
  }
}
function prevSlide() {
  if (!prevButton.classList.contains(`disabled`)) {
    currentSlide--;
    checker();
  }
}

//Control with the bullets
bullets.forEach(bullet => {
  bullet.onclick = () => {
    currentSlide = parseInt(bullet.getAttribute(`data-index`));
    checker();
  }
});

function checker() {
  //set the current slide number to the SliderNum
  sliderNum.textContent = `Slide #${currentSlide} of ${sliderCount}`;

  //remove the active class from all the images and bullets
  removeActive();

  //put the class active on the image and its number in the ul
  sliderImgs[currentSlide - 1].classList.add(`active`);
  paginationList.children[currentSlide - 1].classList.add(`active`);

  //check if the current slide is the first or the last
  if (currentSlide === 1) {
    prevButton.classList.add(`disabled`);
  } else {
    prevButton.classList.remove(`disabled`);
  }
  if (currentSlide === sliderCount) {
    nextButton.classList.add(`disabled`);
  } else {
    nextButton.classList.remove(`disabled`);
  }

}

function removeActive() {

  sliderImgs.forEach(img => {
    img.classList.remove(`active`);
  });

  bullets.forEach(bullet => {
    bullet.classList.remove(`active`);
  });
}