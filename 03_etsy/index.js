const body = document.querySelector("body");
const imgs = document.querySelectorAll(".scaleImage");
let scaleValue;
const imgs_array = Object.entries(imgs).map((img) => img[1]);
console.log(imgs_array);

const changeScale = () => {
  if (window.innerWidth >= 368) {
    imgs_array.map((img) => {
      img.style.transform = `scale(1)`;
    });
  } else if (window.innerWidth < 368) {
    scaleValue = 1 - (368 - window.innerWidth) / 368;
    imgs_array.map((img) => {
      img.style.transform = `scale(${scaleValue})`;
    });
  } else {
    console.log("javascript resize error");
  }
};

window.addEventListener("resize", changeScale);
