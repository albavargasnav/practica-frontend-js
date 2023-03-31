export function buildGreeting(name) {
    const paragraph = document.createElement('p')
    paragraph.textContent = `Bienvenido ${name}`
    return paragraph
}