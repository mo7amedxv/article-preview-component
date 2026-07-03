const shareBtn = document.getElementById("share-button");
const shareBtnMob = document.getElementById("share-button-mobile");
const shareMenu = document.getElementById("share-menu");
shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  shareMenu.classList.toggle("active");
});
shareBtnMob.addEventListener("click", () => {
  shareBtn.click();
});
