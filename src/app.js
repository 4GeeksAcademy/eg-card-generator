/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

function createCard() {
  const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const cardSuits = ["♠", "♥", "♣", "♦"];

  const value = randomItem(cardValues);
  const suit = randomItem(cardSuits);

  const suitColor =
    suit === "♠" || suit === "♣" ? "text-black" : "text-red-400":

  const cardHTML = `<div class="my-card w-[250px] h-[350px] cursor-pointer bg-white rounded-xl flex justify-center items-center relative">
      <div class="z-10 text-7xl text-black">${value}</div>
      <div class="text-black text-6xl absolute top-2 left-2">${suit}</div>
    
      <div class="text-black text-6xl absolute bottom-2 right-2 rotate-180">${suit}</div>
    </div>`;

  const d = document.createElement("div");
  d.innerHTML = cardHTML;
  document.body.appendChild(d);
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

createCard();
};
