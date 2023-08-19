"use strict";

const toggle = document.getElementById("toggle");
const dropdown = document.getElementById("dropdown");

toggle.addEventListener("click", function () {
  if (dropdown.className == "show") {
    dropdown.className = "hide";
  } else if (dropdown.className == "hide") {
    dropdown.className = "show";
  }
});
