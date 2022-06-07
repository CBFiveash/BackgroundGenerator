let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

//CREATE + ADD RND BTN (NEW)
let randButton = document.createElement("button");
randButton.appendChild(document.createTextNode("Select Random Color"));
body.appendChild(randButton);

// PULLS COLOR INPUT (HTML) + SETS CSS FOR MANUAL CHANGE/ON LOAD
function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

function randomNumberRgba() {
  let randNum =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  return randNum;
}
css.addEventListener("onload", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randButton.addEventListener("click", function () {
  color1.value = randomNumberRgba();
  color2.value = randomNumberRgba();
  setGradient();
});
