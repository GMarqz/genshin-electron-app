import divInstance from "../../../base-functions/div.js"

function initModalHead(parent: HTMLElement, title: string) {
    const modalDiv = document.createElement('div')
    modalDiv.className = 'modal fade'
    modalDiv.id = title.toLowerCase()
    modalDiv.tabIndex = -1
    modalDiv.setAttribute('aria-labelledby', `${title.toLowerCase()}Label`)
    modalDiv.setAttribute('aria-hidden', 'true')
    parent.appendChild(modalDiv)

    const modalDialog = divInstance(modalDiv, 'modal-dialog')

    const modalContent = divInstance(modalDialog, 'modal-content')

    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'
    modalContent.appendChild(modalHeader)

    const modalHeaderHeading = document.createElement('h1')
    modalHeaderHeading.className = 'modal-title fs-1'
    modalHeaderHeading.id = `${title.toLowerCase()}Label`
    modalHeaderHeading.textContent = `${title} talents`
    modalHeader.appendChild(modalHeaderHeading)

    const modalHeaderBtn = document.createElement('button')
    modalHeaderBtn.setAttribute('type', 'button')
    modalHeaderBtn.className = 'btn-close'
    modalHeaderBtn.setAttribute('data-bs-dismiss', 'modal')
    modalHeaderBtn.setAttribute('aria-label', 'close')
    modalHeader.appendChild(modalHeaderBtn)


}

export default initModalHead;