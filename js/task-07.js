const inputEl = document.getElementById('font-size-control')
const spanText = document.getElementById('text')
console.log(inputEl)
 
inputEl.addEventListener("change", onInputFontSize)

function onInputFontSize(event) {
    inputEl.range = event.currentTarget.value
    spanText.style.fontSize = `${event.target.value}px`

}