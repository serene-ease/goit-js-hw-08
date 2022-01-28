
const feedbackFormRef = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY_FOR_FORM = "feedback-form-state";
const LocalStorageObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_FORM));
const throttle = require('lodash.throttle');

const feedbackFormHandle = (event) => {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    const formValueObject = {};
    formValueObject.email = email.value;
    formValueObject.message = message.value;
    console.log(formValueObject);
    localStorage.removeItem(LOCALSTORAGE_KEY_FOR_FORM);
    event.currentTarget.reset();
};
const toShowSaveData = () => {
    if (localStorage.getItem(LOCALSTORAGE_KEY_FOR_FORM)) {
        feedbackFormRef.elements.email.value = LocalStorageObject.email;
        feedbackFormRef.elements.message.value = LocalStorageObject.message;
    }
};
const saveDataToLocalStorage = (event) => {
    const {
        elements: { email, message }
    } = event.currentTarget;
    const formValueObject = {};
    formValueObject.email = email.value;
    formValueObject.message = message.value;
    localStorage.setItem(LOCALSTORAGE_KEY_FOR_FORM, JSON.stringify(formValueObject));
};
toShowSaveData();
feedbackFormRef.addEventListener("input", saveDataToLocalStorage);
feedbackFormRef.addEventListener("submit", feedbackFormHandle);
