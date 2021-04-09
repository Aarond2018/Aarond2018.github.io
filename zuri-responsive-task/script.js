const toggleClick = document.querySelector(".nav-mobile");
const mobileBg = document.querySelector(".nav-mobile-toggle--bg");
const nav = document.querySelector(".nav-links");
const spanImg = document.querySelector(".nav-mobile--toggle")

const span = document.querySelector(".nav-mobile--toggle span")

toggleClick.addEventListener("click", () => {
    mobileBg.classList.toggle("mobileNav");
    nav.classList.toggle("showNav");
    if (spanImg.innerHTML !== "close"){
        spanImg.innerHTML = "close";
    } else {
        spanImg.innerHTML = ""
        spanImg.append(span);
    }
})