import generateParagraphContent from "./selectTalentLevel.js";


function initSelectTalentLevel(talentMaterialClassName){
    document.addEventListener("DOMContentLoaded", function () {
        const selectElement = document.getElementById("inputGroupSelect02");
        const displayElement = document.querySelector(talentMaterialClassName);

        selectElement.addEventListener("change", function () {
            const selectedValue = parseInt(selectElement.value);
            const message = generateParagraphContent(selectedValue);
            displayElement.innerHTML = message;
        });
    });
}

export default initSelectTalentLevel;