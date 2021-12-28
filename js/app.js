const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const backgroundImg = document.querySelector(".carousal-content");

const images = ["../img/img01.jpg", "../img/img02.jpg", "../img/img03.jpg"];

let count = 0;

prevBtn.onclick = () => {
  if (count > 0) count--;
  else count = images.length - 1;

  backgroundImg.style.backgroundImage = `URL(${images[count]})`;
  backgroundImg.style.transition = "all 1s ease";
  backgroundImg.style.animation = "fade 1s ease-in-out";
};

nextBtn.onclick = () => {
  if (count < images.length - 1) count++;
  else count = 0;

  backgroundImg.style.backgroundImage = `URL(${images[count]})`;
  backgroundImg.style.transition = "all 1s ease";
  backgroundImg.style.animation = "fade 1s ease-in-out";
};

const autoChange = () => {
  if (count < images.length - 1) count++;
  else count = 0;

  backgroundImg.style.backgroundImage = `URL(${images[count]})`;
  backgroundImg.style.transition = "all 0.3s ease-in-out";
  backgroundImg.style.animation = "fade 4s infinite";

  setTimeout(autoChange, 4000);
};

autoChange();
