function selectInstance(parent: HTMLElement, cssClassName: string, id: string): HTMLSelectElement {
    const selectInstance = document.createElement('select')
    selectInstance.className = cssClassName
    selectInstance.id = id
    parent.appendChild(selectInstance)
    return selectInstance
}

export default selectInstance;