document.querySelector("body").style.backgroundColor = "#eaf1fad0";
const inputRangeEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

const fontSizeControl = () =>
  (textEl.style.fontSize = `${inputRangeEl.value}px`);

fontSizeControl();

inputRangeEl.addEventListener("input", fontSizeControl);
