function makeCard(parent, img, title, description) {
    const card = document.createElement('div')
    card.className = 'card'
    card.style.width = '18rem'
    parent.appendChild(card)

    const imgElement = document.createElement('img')
    imgElement.src = img
    imgElement.className = 'card-img-top'
    imgElement.alt = `${title}'s Pic`
    card.appendChild(imgElement)

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    card.appendChild(cardBody)

    const cardTitle = document.createElement('h5')
    cardTitle.className = 'card-title'
    cardTitle.textContent = title
    cardBody.appendChild(cardTitle)

    const descriptionPTag = document.createElement('p')
    descriptionPTag.className = 'card-text'
    descriptionPTag.textContent = description
    cardBody.appendChild(descriptionPTag)

    const cardBtn = document.createElement('button')
    cardBtn.setAttribute('type', 'button')
    cardBtn.className = 'btn btn-primary card-btn-details'
    cardBtn.setAttribute('data-bs-toggle', 'modal')
    cardBtn.setAttribute('data-bs-target', `#${title.toLowerCase()}`)
    cardBtn.textContent = 'Details'
    cardBody.appendChild(cardBtn)
}

export default makeCard;