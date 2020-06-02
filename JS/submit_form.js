var formElement=document.forms.INFO;
formElement.onsubmit=sendInfoForm;

function sendInfoForm() {
        var nameElement=formElement.elements.NAME;
        var phoneElement=formElement.elements.PHONE;
        var textareaElement=formElement.elements.TEXTAREA;

        var nameValue=nameElement.value;
        var phoneValue=parseInt(phoneElement.value.trim());
        var textareaValue=textareaElement.value;

        window.location.href = "mailto:prom2629051@yandex.ru?subject=Обращение&body=" + 'Имя: ' + nameValue +
        ' Контактный телефон: ' + phoneValue + ' Сообщение: ' + textareaValue;
    }
