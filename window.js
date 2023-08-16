const windowhide = document.getElementById("windowhide");
const nextwindow = document.getElementById("nextwindow");
const windowshow = document.getElementById("windowshow");
const first = document.getElementById("first");
const second = document.getElementById("second");
const button = document.getElementById("button");
const gobutton = document.getElementById("gobutton");

first.addEventListener("keyup", (e) => {
  var newFirst = e.target.value;

  if (newFirst.length > 5) {
    button.classList.add("enabled");
    button.classList.remove("container__next");
  } else {
    button.classList.remove("enabled");
    button.classList.add("container__next");
  }
});

second.addEventListener("keyup", (e) => {
  var newSecond = e.target.value;

  if (newSecond.length > 7) {
    gobutton.classList.add("goenabled");
    gobutton.classList.remove("container__gobutton");
  } else {
    gobutton.classList.remove("goenabled");
    gobutton.classList.add("container__gobutton");
  }
});

function show() {
  windowhide.classList.remove("hidediv");
}
function hide() {
  windowhide.classList.add("hidediv");
}

nextwindow.addEventListener("click", show);
windowshow.addEventListener("click", hide);
