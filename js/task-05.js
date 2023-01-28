// const textInput = document.getElementById('name-input')
// const output = document.getElementById('name-output')

// textInput.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;
//     console.log(event.currentTarget.value)
// })


const textInput = document.getElementById('name-input')
const output = document.getElementById('name-output')


const onBtnNameChange = (event) => {
  event.currentTarget.value.trim() === '' ?
  output.textContent = 'Anonymous' :
  output.textContent = event.currentTarget.value.trim();
};

textInput.addEventListener('input', onBtnNameChange);