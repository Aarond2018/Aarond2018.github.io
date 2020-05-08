let playGameBtn = document.querySelector(".btn");
let ctaBtn = document.querySelector(".ctaBtn");
let nameInput = document.querySelector(".nameInput");

nameInput.style.pointerEvents = "none";
ctaBtn.style.display =""

playGameBtn.addEventListener("click", () => {
    nameInput.style.pointerEvents = "auto";
    nameInput.style.opacity = 1;
    ctaBtn.style.opacity = 1;
});

ctaBtn.addEventListener("click", ()=>{
    localStorage.setItem("username", nameInput.value)
    nameInput.value = "";
})
