
export function createFormContainerHeader(title){
    const div = document.createElement('div');
    div.classList.add('form-container__header');
    div.textContent = title;

    return div;
}