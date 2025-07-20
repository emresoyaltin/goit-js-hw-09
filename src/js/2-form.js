const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    formData = JSON.parse(saved);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  } catch (e) {
    console.warn(e);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const isEmpty = !formData.email || !formData.message;
  if (isEmpty) {
    alert('Fill please all fields');
    return;
  }
  console.log({
    email: formData.email,
    message: formData.message,
  });

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
