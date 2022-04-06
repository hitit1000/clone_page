const body = document.querySelector("body");

let scaleValue;

// console.log(window.innerWidth);

const changeScale = () => {
  if (window.innerWidth >= 1216) {
    console.log("컴퓨터");
    body.style.width = `${window.innerWidth}px`;
    body.style.transform = `scale(1)`;
  } else if (785 <= window.innerWidth && window.innerWidth <= 1215) {
    console.log("태블릿");
    scaleValue = 1 - (1215 - window.innerWidth) / 1215;
    body.style.transform = `scale(${scaleValue})`;
    body.style.width = `${window.innerWidth / scaleValue}px`;
  } else if (window.innerWidth <= 784) {
    console.log("휴대폰");
  } else {
    console.log("javascript resize error");
  }
};

window.addEventListener("resize", changeScale);
