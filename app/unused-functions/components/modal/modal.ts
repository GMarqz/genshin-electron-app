import createModalBodyContent from "./modalBody.js";
import initModalHead from "./modalHeader.js";

//elemento pai do modal: 'card-body'

function makeModal(parent: HTMLDivElement, title: string, currentSkillLevel: any){

    const modalPartsMainDivParent = parent
    const modalTitleParamms = title

    initModalHead(modalPartsMainDivParent, modalTitleParamms)

    const modalBody = document.createElement('div')
    modalBody.className = 'modal-body'
    parent.appendChild(modalBody)

    //parent do modalbody é o modalcontent
    createModalBodyContent(modalBody, 'normal-atk', 'Normal Atack', currentSkillLevel.normalAtkLevel)
    createModalBodyContent(modalBody, 'elemental-skill', 'Elemental Skill', currentSkillLevel.elementalSkillLevel)
    createModalBodyContent(modalBody, 'elemental-burst', 'Elemental Burst', currentSkillLevel.elementalBurstLevel)

    const modalFooter: HTMLDivElement = document.createElement('div')
    modalFooter.className = 'modal-footer'
    parent.appendChild(modalFooter)

    const modalFooterBtn: HTMLButtonElement = document.createElement('button')
    modalFooterBtn.className = 'btn btn-secondary'
    modalFooterBtn.setAttribute('type', 'button')
    modalFooterBtn.setAttribute('data-bs-dismiss', 'modal')
    modalFooterBtn.textContent = 'Close'
    modalFooter.appendChild(modalFooterBtn)

}

export default makeModal;