const backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}
