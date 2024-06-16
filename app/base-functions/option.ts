function optionInstance(parent: HTMLElement, cssClassName: string, textContent: string, attributes?: {[key: string]: string}): HTMLOptionElement {
    const optionInstance = document.createElement('option') as HTMLOptionElement
    optionInstance.className = cssClassName
    optionInstance.textContent = textContent

    if(attributes) {
        for ( const [key, value] of Object.entries(attributes)) {
            optionInstance.setAttribute(key, value)
        }
    }

    parent.appendChild(optionInstance)
    return optionInstance;
}

export default optionInstance;