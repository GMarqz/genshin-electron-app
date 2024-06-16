import generateParagraphContent from "./selectTalentLevel.js";


function initSelectTalentLevel(){
    document.addEventListener("DOMContentLoaded", function () {
        const selectElement = document.getElementById("inputGroupSelect02") as HTMLInputElement;
        const displayElement = document.querySelector(".normal-atk-materials");

        selectElement.addEventListener("change", function () {
            const selectedValue = parseInt(selectElement.value);
            const message = generateParagraphContent(selectedValue);
            displayElement.innerHTML = message;
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const selectElement = document.getElementById("inputGroupSelect03") as HTMLInputElement;
        const displayElement = document.querySelector(".elemental-skill-materials");

        selectElement.addEventListener("change", function () {
            const selectedValue = parseInt(selectElement.value);
            const message = generateParagraphContent(selectedValue);
            displayElement.innerHTML = message;
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const selectElement = document.getElementById("inputGroupSelect04") as HTMLInputElement;
        const displayElement = document.querySelector(".elemental-burst-materials");

        selectElement.addEventListener("change", function () {
            const selectedValue = parseInt(selectElement.value);
            const message = generateParagraphContent(selectedValue);
            displayElement.innerHTML = message;
        });
    });
}

initSelectTalentLevel()