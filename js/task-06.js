const textInput = document.getElementById('validation-input')
const length = Number(textInput.dataset.length)

textInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === length) {

        textInput.classList.add('invalid' )
        textInput.classList.replace('invalid', 'valid') 
    } else {
        textInput.classList.add ('valid')
        textInput.classList.replace('valid', 'invalid')
    }
})