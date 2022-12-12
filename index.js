let hambuger = document.querySelector("#hamburger");
let sideBar = document.querySelector(".main-side-bar");
let cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
    sideBar.style.transform = "translateX(-100%)"
})


hambuger.addEventListener("click", () => {
    sideBar.style.transform = "translateX(0)"
})