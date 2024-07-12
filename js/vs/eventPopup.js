const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".event-desc");

openBtn.addEventListener("click", (e) => {
    const block = popup.querySelector(".block");
    popup.style.display = "grid";
    popup.animate(opacityAnimate, scaleTiming);
    block.animate(scaleAnimate, scaleTiming)
    document.body.style.overflow = "hidden"
})
closeBtn.addEventListener("click", () => {
    popup.animate(opacityClose, scaleTiming)
    setTimeout(() => {
        popup.style.display = "none";
    }, 180);
    document.body.style.overflow = "";
})

const opacityAnimate = [
    { opacity: "0" },
    { opacity: "1" },
];
const scaleAnimate = [
    { transform: "scale(0.5)" },
    { transform: "scale(1)" },
];

const opacityClose = [
    { opacity: "1" },
    { opacity: "0" },
];

const scaleTiming = {
    duration: 200,
    iterations: 1,
}
