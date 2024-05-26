import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formElements = [form.elements['email'], form.elements['message']];

const extractFormData = () =>
  formElements.reduce((acc, element) => {
    return { ...acc, [element.name]: element.value.trim() };
  }, {});

const applyFormData = formData =>
  formElements.forEach(
    element => (element.value = formData[element.name] || '')
  );

function onInputData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(extractFormData()));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(extractFormData());

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

applyFormData(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {});

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);
