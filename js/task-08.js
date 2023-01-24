const form = document.querySelector('.login-form')

form.addEventListener('submit',onFormSubmit )

function onFormSubmit(event) {
    
    event.preventDefault()

    const { elements: { email, password }} = event.currentTarget
    if (email.value === '' || password.value === '' ){
        return alert( 'All fields must be filled!!!')
    }

    const mail = email.value
    const pass = password.value
    const formData = {
        mail,
        pass
  }
console.log(formData)

  event.currentTarget.reset();
}

