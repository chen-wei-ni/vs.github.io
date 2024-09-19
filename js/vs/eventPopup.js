const openBtn = document.getElementById("event-btn");
const openBtn2 = document.getElementById("history-btn")
const closeBtn = document.querySelectorAll(".close-btn");
const popup = document.getElementById("event");
const popup2 = document.getElementById("history");

openBtn.addEventListener("click", (e) => {
    const block = popup.querySelector(".block");
    popup.style.display = "grid";
    popup.animate(opacityAnimate, scaleTiming);
    block.animate(scaleAnimate, scaleTiming)
    document.body.style.overflow = "hidden"
});
openBtn2.addEventListener("click", (e) => {
    const block = popup2.querySelector(".block");
    popup2.style.display = "grid";
    popup2.animate(opacityAnimate, scaleTiming);
    block.animate(scaleAnimate, scaleTiming)
    document.body.style.overflow = "hidden"
})


closeBtn.forEach((e) => {
    e.addEventListener("click", function () {
        popup.animate(opacityClose, scaleTiming)
        setTimeout(() => {
            popup.style.display = "none";
        }, 180);
        popup2.animate(opacityClose, scaleTiming)
        setTimeout(() => {
            popup2.style.display = "none";
        }, 180);
        document.body.style.overflow = "";
    })
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
