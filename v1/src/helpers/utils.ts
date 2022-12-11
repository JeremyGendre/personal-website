/**
 * Modify a css value of :root element
 * @param property
 * @param value
 */
export function setCSSVariableProperty(property: string, value: string){
    document.documentElement.style.setProperty(property, value);
}