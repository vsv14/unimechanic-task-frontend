import svgDefault from '../../../assets/icons/ic_logo.svg';
import { create_form_partnership } from "./_partnership/form_partnership";

export function createFormPartnership(){
    const form = create_form_partnership();
    
    inputImageListener(form);
    inputValidListener(form);
    selectValidListener(form);

    return form;
}

function inputImageListener(node) {
    const inputLogo = node.querySelector("input#logo");
    const img = inputLogo.parentElement.getElementsByClassName('form__field-img__container__img')[0];
    const bttnRemove = inputLogo.parentElement.getElementsByClassName('form__field-img__container__bttn-close')[0];
    

    bttnRemove.addEventListener('click', event=>{
        event.preventDefault();
        event.target.classList.add("hidden");

        img.style.backgroundImage = "url(" + svgDefault + ")";
        img.style.backgroundSize = '50%'; 
        
        img.parentElement.parentElement.classList.remove('field-valid');
    });

    inputLogo.addEventListener('change', event=>{
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = function(){
            img.style.backgroundImage = "url(" + reader.result + ")";
            img.style.backgroundSize = '163px';
            bttnRemove.classList.remove("hidden");

        }
        if(file){
            reader.readAsDataURL(file);
            img.parentElement.parentElement.classList.add('field-valid');
        }
    });
}

function inputValidListener(node) {
    const fields = Object.values(node.getElementsByClassName('form__field__input'));

    fields.forEach(input=>{
        const label = input.parentElement.getElementsByClassName('form__field__label_required')[0];
        input.addEventListener('input', event=> {
            
            if(event.target.pattern.length > 0){
                const regex = new RegExp(event.target.pattern)
                
                if(regex.test(event.target.value)){
                    label?.classList.add('field-valid');
                }else{
                    label?.classList.remove('field-valid');
                }
                if(event.target.value.length === 0){
                    label?.classList.remove('field-valid');
                }
            }
        });
    });
}

function selectValidListener(node) {
    const fields = Object.values(node.getElementsByClassName('form__field__select'));

    fields?.forEach(select=>{
        const label = select.parentElement.getElementsByClassName('form__field__label_required')[0];
        select.addEventListener('change', event=> {
            if(event.target.value !== '-1'){
                label?.classList.add('field-valid');
            }else{
                label?.classList.remove('field-valid');
            }
        });
    });
}