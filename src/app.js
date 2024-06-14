/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

function createCard () {
  const cardHTML = `<div class="bg-slate-100 w-[250px] h-[300px]"> .K. </div>`;

  const d = document.createElement("div");
  d.innerHTML = cardHTML;
  document.body.appendChild(d);
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

createCard();
