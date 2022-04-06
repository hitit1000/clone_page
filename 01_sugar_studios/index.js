const body = document.querySelector("body");

let scaleValue;

// console.log(window.innerWidth);

const changeScale = () => {
  if (window.innerWidth >= 1216) {
    body.style.width = `${window.innerWidth}px`;
    body.style.transform = `scale(1)`;
  } else if (785 <= window.innerWidth && window.innerWidth <= 1215) {
    scaleValue = 1 - (1215 - window.innerWidth) / 1215;
    body.style.transform = `scale(${scaleValue})`;
    body.style.width = `${window.innerWidth / scaleValue}px`;
  } else if (window.innerWidth <= 784) {
    scaleValue = 1 - (785 - window.innerWidth) / 785;
    body.style.transform = `scale(${scaleValue})`;
    body.style.width = `${window.innerWidth / scaleValue}px`;
  } else {
    console.log("javascript resize error");
  }
};

window.addEventListener("resize", changeScale);
