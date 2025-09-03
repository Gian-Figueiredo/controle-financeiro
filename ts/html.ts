
export function appendchildren(parent: HTMLElement, ...children: (HTMLElement)[]) {
    children.forEach(child => {parent.appendChild(child);});
}