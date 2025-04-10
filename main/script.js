let container = document.getElementById("gallery");
let nextBtn = document.getElementById("next");
let backBtn = document.getElementById("back");

nextBtn.addEventListener("click", () => {
  container.scrollLeft += 450;
});

backBtn.addEventListener("click", () => {
  container.scrollLeft -= 450;
});
