let navBar = document.getElementById("navBar");
let toggleBar1 = document.querySelector(".toggleBar");
let gotoTop = document.querySelector(".gotoTop");

function toggleBar() {
  navBar.classList.toggle("navbarSmallDevice");
  toggleBar1.classList.toggle("toggleBarClick");
}

window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};

let popupBeforePage = document.querySelector(".popupBeforePage");
function hidescrollWith() {
  document.body.classList.add("hide-scrollbar");
  popupBeforePage.classList.remove("dsplayVisible");
  popupBeforePage.classList.add("scaleonpopupBeforePage");

  setTimeout(() => {
    document.body.classList.remove("hide-scrollbar");
    popupBeforePage.classList.add("dsplayVisible");
    popupBeforePage.classList.remove("scaleonpopupBeforePage");
  }, 3000);
}
hidescrollWith();
