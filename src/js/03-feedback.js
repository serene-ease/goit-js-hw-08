const throttle = require('lodash.throttle');
/////////////////////////////////////////////////
const LOCALSTORAGE_FEEDBACK_KEY = "feedback-form-state";

const feedbackFormRef = document.querySelector('.feedback-form');
const LocalStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));

const feedbackHandler = (event) => {
    event.preventDefault();
    const { elements: {email, message} } = event.currentTarget;
const formData = {}
formData.email = email.value;
formData.message = message.value;
///////
console.log(formData);
///////
localStorage.removeItem(LOCALSTORAGE_FEEDBACK_KEY);
event.currentTarget.reset();
}
const savedDataRead = () => {
    if (localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY)) {
        feedbackFormRef.elements.email.value = LocalStorageData.email;
        feedbackFormRef.elements.message.value = LocalStorageData.message;
    }
};
const LocalStorageSave = (event) => {
    const {
        elements: { email, message }
    } = event.currentTarget;
    const formData = {};
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(LOCALSTORAGE_FEEDBACK_KEY, JSON.stringify(formData));
};
savedDataRead();
feedbackFormRef.addEventListener("input", LocalStorageSave);
feedbackFormRef.addEventListener("submit", feedbackHandler);