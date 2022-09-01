import { createFormContainer_withHeader } from '../form-container/form-container';
import { createFormPartnership } from '../form/form';
import { createModal__contentPartnership } from './__content/_partnership/modal__content_partnership';



export function createModalPartnership(){
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = "modal-partnership";

    const modal__contentPartnership = createModal__contentPartnership();
    const formContainer = createFormContainer_withHeader('Стать партнером проекта');
    formContainer.appendChild(createFormPartnership());

    modal__contentPartnership.prepend(formContainer);
    modal.appendChild(modal__contentPartnership)

    document.body.appendChild(modal);
}