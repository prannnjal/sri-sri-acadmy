const scriptURL = "https://script.google.com/macros/s/AKfycbwdaY44stQkI9qedX-06SwSBfMwHtU7aL6tAnO81bqiknaxcJyVtBmcCiHpoyQcEDwD/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})