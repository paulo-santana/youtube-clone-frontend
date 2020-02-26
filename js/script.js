const searchInput = document.querySelector("#search-input");
const searchBox = document.querySelector(".search-box");

searchInput.addEventListener("focus", () => {
  searchBox.classList.add("focused");
});

searchInput.addEventListener("focusout", () => {
  searchBox.classList.remove("focused");
});
