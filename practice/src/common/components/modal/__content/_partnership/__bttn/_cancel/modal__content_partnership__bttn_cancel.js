

export function createModal__contentPartnership__bttnCancel(node) {
    const bttnCancel = document.createElement('button');
    bttnCancel.classList.add('modal__content_partnership__bttn_cancel');
    bttnCancel.textContent = 'Отменить';

    bttnCancel.addEventListener('click', event=>{
        document.body.style.overflowY = 'scroll';
        let modal = event.target.parentElement.parentElement;

        modal.parentElement.parentElement.removeChild(modal.parentElement);
    });

    return bttnCancel;
}