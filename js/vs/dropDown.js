const selectBtn = document.querySelector(".history-item");
const table = document.querySelectorAll(".table-data");
const options = document.querySelectorAll(".history-item option");

panelDisplay(table[0].dataset.name);

selectBtn.addEventListener("change", function (e) {
    panelDisplay(e.target.value);
});

function panelDisplay(activePanel) {
    for (let i = 0; i < options.length; i++) {

        if (options[i].value == activePanel) {
            table[i].style.display = "block";
        } else {
            table[i].style.display = "none";
        }
    }
}

