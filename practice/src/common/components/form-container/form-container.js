import { createFormContainerHeader } from "./__header/form-container__header";

export function createFormContainer(){
    const div = document.createElement('div');
    div.classList.add('form-container');

    return div;
}

export function createFormContainer_withHeader(strTitle){
    const formContainer = createFormContainer();
    formContainer.appendChild(createFormContainerHeader(strTitle));

    return formContainer;
}