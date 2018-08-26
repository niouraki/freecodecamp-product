let hamburger = document.querySelector(".fa-bars");
let list = document.getElementById("nav-list");

hamburger.addEventListener('click', function() {
  if (list.className === "nav-list") {
    list.classList.remove("nav-list");
    list.classList.add("nav-list-small");
  } else {
    list.classList = "nav-list"
  }
});
