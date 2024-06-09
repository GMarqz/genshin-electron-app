import initSelectTalentLevel from "../../controller/selectTalentLevel.js";

function createModalBodyContent(parent, divClassName, skill, currentSkillLevel) {

    const modalBodyDivChildren = document.createElement('div')
    modalBodyDivChildren.className = divClassName
    parent.appendChild(modalBodyDivChildren)

    const modalBodyDivChildrenHeading = document.createElement('h2')
    modalBodyDivChildrenHeading.className = 'modal-title fs-2'
    modalBodyDivChildrenHeading.textContent = skill
    modalBodyDivChildren.appendChild(modalBodyDivChildrenHeading)

    const divInputGroup = document.createElement('div')
    divInputGroup.className = 'input-group mb-3'
    modalBodyDivChildrenHeading.appendChild(divInputGroup)

    const labelInputGroup = document.createElement('label')
    labelInputGroup.className = 'input-group-text'
    labelInputGroup.setAttribute('for', 'inputGroupSelect02')
    labelInputGroup.textContent = 'Level'
    divInputGroup.appendChild(labelInputGroup)

    const selectInputGroup = document.createElement('select')
    selectInputGroup.className = 'form-select'
    selectInputGroup.id = 'inputGroupSelect02'
    divInputGroup.appendChild(selectInputGroup)

    const selectedOption = document.createElement('option')
    selectedOption.setAttribute('selected', '')
    selectedOption.textContent = currentSkillLevel
    selectInputGroup.appendChild(selectedOption)

    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.textContent = i;
        selectInputGroup.appendChild(option);
    }

    const materialQuantity = document.createElement('p')
    const divClassNameMaterials = `${divClassName}-materials`
    materialQuantity.className = divClassNameMaterials
    materialQuantity.textContent = initSelectTalentLevel(divClassNameMaterials)
    modalBodyDivChildren.appendChild(materialQuantity)

}

export default createModalBodyContent;