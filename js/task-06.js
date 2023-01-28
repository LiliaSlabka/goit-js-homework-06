const textInput = document.getElementById('validation-input')
const length = Number(textInput.dataset.length)

textInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === length) {
        textInput.classList.remove('invalid')
        textInput.classList.add ('valid') 
    }
        else { 
        textInput.classList.remove( 'valid') 
        textInput.classList.add('invalid' )
    }
})