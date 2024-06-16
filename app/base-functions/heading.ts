function headingInstance(parent: HTMLElement, 
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', cssClassName: string, textContent: string): HTMLHeadingElement {
    const headingInstance = document.createElement(headingType) as HTMLHeadingElement
    headingInstance.className = cssClassName
    headingInstance.textContent = textContent
    parent.appendChild(headingInstance)
    return headingInstance
}

export default headingInstance;