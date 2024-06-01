import generateParagraphContent from "../services/selectTalentLevel.js";


function initSelectTalentLevel(){
    document.addEventListener("DOMContentLoaded", function () {
        const selectElement = document.getElementById("inputGroupSelect02");
        const displayElement = document.querySelector(".normal-atk-materials");

        selectElement.addEventListener("change", function () {
            const selectedValue = parseInt(selectElement.value);
            const message = generateParagraphContent(selectedValue);
            displayElement.innerHTML = message;
        });
    });
}

export default initSelectTalentLevel;