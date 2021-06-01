let isLoading = true;
/*
function sendForm() {
  const formEl = document.forms['test'];
  isLoading = true;
  console.log('clicked');
  setTimeout(() => {
    isLoading = false;
    console.log('Done');
  }, 5000);
  formEl.submit();
}

function doSomething() {
  const formEl = document.forms['test'];
  formEl.elements[0].value = 'test';


}

function doSomething() {
  const formEl = document.forms['test'];
  formEl.elements['password'].focus();



function selectionText(event) {
  const inputEl = document.forms[0].elements[0];
  console.log(inputEl.selectionStart);
  console.log(inputEl.selectionEnd);
}
}*/

const inputEl = document.forms[0].elements[0];
inputEl.focus();
inputEl.setSelectionRange(3, 11);