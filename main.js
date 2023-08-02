const imageContainer = document.querySelector(".image_container");
const leftArrowContainer = document.querySelector(".left_arrow_container");
const rightArrowContainer = document.querySelector(".right_arrow_container");
const indicatorsContainer = document.querySelector(".indicators_container");

const imageObj = {
  0: "bmw-1.jpg",
  1: "bmw-2.jpg",
  2: "mb_3.jpg",
  3: "mb_4.jpg",
  4: "mb_5.jpg",
  5: "mb_6.jpg",
  6: "ford_mustang.jpg",
  7: "lamborgini.jpg",
  8: "nissan_gtr.jpg",
};
const keys = Object.keys(imageObj);
const imageCount = keys.length;

function addingIndicators() {
  for (let j = 0; j < imageCount; j++) {
    indicatorsContainer.innerHTML += '<div class="indicator"></div>';
    if (j === 0) {
      let firstIndicator = indicatorsContainer.lastElementChild;
      firstIndicator.classList.add("current_indicator");
    }
  }
}
addingIndicators();

let i = 0;

function imageChanging() {
  let keyOfImage = keys[i];
  let image = imageObj[+keyOfImage];
  imageContainer.style.backgroundImage = `url(./images/${image})`;
}

function removingCurrentIndicator() {
  let beforeClickIndicator = indicatorsContainer.children[i];
  beforeClickIndicator.classList.remove("current_indicator");
}

function addingCurrentIndicator() {
  let afterCLickIndicator = indicatorsContainer.children[i];
  afterCLickIndicator.classList.add("current_indicator");
}

leftArrowContainer.addEventListener("click", () => {
  if (i > 0) {
    removingCurrentIndicator();
    i--;
    imageChanging();
    addingCurrentIndicator();
  }
});

rightArrowContainer.addEventListener("click", () => {
  if (i < 8) {
    removingCurrentIndicator();
    i++;
    imageChanging();
    addingCurrentIndicator();
  }
});
