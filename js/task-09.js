function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

const changeColor = () => {
  const colorResult = getRandomHexColor();
  document.body.style.background = colorResult;
  textColorEl.textContent = colorResult;
};

changeColorBtn.addEventListener("click", changeColor);
