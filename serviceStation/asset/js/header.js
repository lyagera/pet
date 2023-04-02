let burger = document.querySelector(".burger");
let logo = document.querySelector(".logo");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let headerContact = document.querySelector(".header-contacts");

burger.addEventListener("click", function () {
  logo.classList.toggle("active");
  wrapper.classList.toggle("active");
  container.classList.toggle("active");
  burger.classList.toggle("active");
  headerContact.classList.toggle("active");
});

// logo.addEventListener("click", function () {
//   logo.classList.toggle("active");
//   wrapper.classList.toggle("active");
//   container.classList.toggle("active");
// });
