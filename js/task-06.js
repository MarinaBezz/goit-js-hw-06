document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputEL = document.getElementById("validation-input");
inputEL.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputEL.dataset.length);
  const inputValueLength = Number(inputEL.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputEL.classList.add("valid");
    inputEL.classList.remove("invalid");
  } else {
    inputEL.classList.remove("valid");
    inputEL.classList.add("invalid");
  }
}
