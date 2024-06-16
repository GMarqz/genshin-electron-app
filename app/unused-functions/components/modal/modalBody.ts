import divInstance from "../../../base-functions/div.js";
import headingInstance from "../../../base-functions/heading.js";
import labelInstance from "../../../base-functions/label.js";
import optionInstance from "../../../base-functions/option.js";
import selectInstance from "../../../base-functions/select.js";
import initSelectTalentLevel from "../../../selectTalentLevel.js";

function createModalBodyContent(parent: HTMLElement, divClassName: string, skill: string, currentSkillLevel: any) {
    const modalBodyDivChildren = divInstance(parent, divClassName)

    const modalBodyDivChildrenHeading = headingInstance(modalBodyDivChildren, 'h2', 'modal-title fs-2', skill)

    const divInputGroupParent = divInstance(modalBodyDivChildrenHeading, 'input-group mb-3')

    labelInstance(divInputGroupParent, 'input-group-text', 'Level').setAttribute('for', 'inputGroupSelect02')

    const selectInputGroup = selectInstance(divInputGroupParent, 'form-select', 'inputGroupSelect02')

    optionInstance(selectInputGroup, '', currentSkillLevel, {'selected': ''})

    for (let i: any = 1; i <= 10; i++) {
        optionInstance(selectInputGroup, '', i, {'value': i})
    }

    const materialQuantity = document.createElement('p')
    const divClassNameMaterials = `${divClassName}-materials`
    materialQuantity.className = divClassNameMaterials
    materialQuantity.textContent = initSelectTalentLevel(divClassNameMaterials)
    modalBodyDivChildren.appendChild(materialQuantity)

}

export default createModalBodyContent;