const form_partnership = `
<form action="/" class="form form_partnership">
    <div class="d-grid form__group ">
        <div class="form__group">
            <div class="form__field">
                <label for="companyName" class="form__field__label form__field__label_required">Название организации</label>
                <input id="companyName" name="companyName" autofocus required type="text" class="form__field__input" pattern="^[a-zA-Z0-9._ ]*$" title="Название организации">
            </div>
            <div class="form__field">
                <label for="phone" class="form__field__label form__field__label_required">Телефон</label>
                <input id="phone" name="phone" type="text" placeholder="+7 933 848-34-33" pattern="^[\+]{1}[0-9]{1} [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$" required class="form__field__input">
            </div>
            <div class="form__field">
                <label for="email" class="form__field__label form__field__label_required">E-mail</label>
                <input id="email" name="email" required type="email" placeholder="your_mail@host.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form__field__input">
            </div>
        </div>

        <div class="grid-col-start-sm form__aside-group">
            <div class="form__field-img">
                <label for="logo" class="form__field__label form__field__label_required text-center form__field-img__label">
                    Логотип (jpeg, png)
                    <div class="form__field-img__container">
                        <div class="form__field-img__container__img">
                            
                            <div class="select-file">
                                <div class="img"></div>
                                <div class="img-text">Выберите файл</div>
                            </div>
                        </div>
                        <button class="bttn__bttn-img bttn__bttn-img_close form__field-img__container__bttn-close hidden"></button>
                    </div>
                </label>
                
                <input id="logo" name="logo" required type="file" accept=".jpg, .jpeg, .png" class="form__field-img__input-img" title="Выберите файл">
            </div>
        </div>
    </div>
    <div class="form__field">
        <label for="category" class="form__field__label form__field__label_required">Направление</label>
        <select id="category" name="category" required class="form__field__select" >
            <option value="-1" selected>выбрать</option>
            <option value="ecology" >Экология</option>
        </select>
    </div>
    <div class="form__field">
        <input name="webSite" type="text" class="form__field__input input__icon input__icon_web">
    </div>
    <div class="form__field">
        <input name="vkProfile" type="text" class="form__field__input input__icon input__icon_vk">
    </div>
    <div class="form__field">
        <input name="okProfile" type="text" class="form__field__input input__icon input__icon_ok">
    </div>
    <div class="form__field">
        <input name="fbProfile" type="text" class="form__field__input input__icon input__icon_f">
    </div>
    <div class="form__field">
        <input name="instaV" type="text" class="form__field__input input__icon input__icon_insta">
    </div>
    <div class="form__field">
        <input name="youtubeProfile" type="text" class="form__field__input input__icon input__icon_ytube">
    </div>
    <div class="form__field">
        <label for="supervisor" class="form__field__label">Руководитель</label>
        <input id="supervisor" name="supervisor" type="text" placeholder="ФИО"class="form__field__input">
    </div>

    <div class="form__bttn">
        <button type="submit" class="form__bttn_submit">Стать партнёром проекта</button>
    </div>
</form>
`;


export function create_form_partnership(){
    const form = document.createElement('div');
    form.innerHTML = form_partnership;
    return form;
}