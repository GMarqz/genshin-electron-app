function divInstance(parent: HTMLElement, cssClassName: string): HTMLDivElement{
    const divInstance: HTMLDivElement = document.createElement('div')
    divInstance.className = cssClassName
    parent.appendChild(divInstance)
    return divInstance;
}

export default divInstance;