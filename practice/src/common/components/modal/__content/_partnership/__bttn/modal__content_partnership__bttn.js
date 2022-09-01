import {createModal__contentPartnership__bttnCancel} from './_cancel/modal__content_partnership__bttn_cancel';


export function createModal__contentPartnership__bttn(){
    const bttn = document.createElement('div');
    bttn.classList.add('modal__content_partnership__bttn');

    return bttn;
}

export function create_BttnCancel__Modal__contentPartnership(){
    const bttn = createModal__contentPartnership__bttn();
    bttn.appendChild(createModal__contentPartnership__bttnCancel())

    return bttn
}