const percentage = document.querySelector(".percentage span");
const progressValue = document.querySelector("progress").value;


function valueModified() {
    // percentage.outerText = progressValue;
    percentage.innerHTML = progressValue;
}

valueModified();