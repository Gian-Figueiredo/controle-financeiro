export function appendchildren(parent, ...children) {
    children.forEach(child => { parent.appendChild(child); });
}
