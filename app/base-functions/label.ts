function labelInstance(parent: HTMLElement, cssClassName: string, textContent: string): HTMLLabelElement {
    const labelInstance = document.createElement('label') as HTMLLabelElement
    labelInstance.className = cssClassName
    labelInstance.textContent = textContent
    parent.appendChild(labelInstance)
    return labelInstance
}

export default labelInstance;