"use strict";
let total = 0;
let totalParagraph = document.querySelector(".total");

let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total $${total}`;
});

peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total $${total}`;
});

chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total $${total}`;
});

gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total $${total}`;
});

// two
let penny = document.querySelector(".penny");
let nickle = document.querySelector(".nickle");
let dime = document.querySelector(".dime");
let quarter = document.querySelector(".quarters");

// lightbulb

let on = document.querySelector(".on");
let off = document.querySelector(".off");
let toggle = document.querySelector(".toggle");
let end = document.querySelector(".end");
