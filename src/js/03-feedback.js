import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

let  formData = {};
reloadPage();

function onInputData (evt){
  formData ={
    email: input.value.trim(),
    message: textarea.value.trim(),
  }
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function reloadPage(){
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    if (data){
        input.value = formData.email || '';
        textarea.value = formData.message || '';
      
    } 
     
}


function  onFormSubmit(evt){
    evt.preventDefault();

    formData ={
        email: input.value,
        message: textarea.value,
    }
    console.log(formData);
    
    if (input.value === '' || textarea.value === ''){
        return alert ('Please fill in all the fields!')
    }
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};

}




