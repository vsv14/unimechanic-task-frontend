import { create_BttnCancel__Modal__contentPartnership } from "./__bttn/modal__content_partnership__bttn";

export function createModal__contentPartnership(){
    const div = document.createElement('div');
    div.classList.add('modal__content');
    div.classList.add('modal__content_partnership');

    div.appendChild(create_BttnCancel__Modal__contentPartnership());

    return div;
}