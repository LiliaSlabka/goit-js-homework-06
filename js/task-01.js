const navEl = document.querySelectorAll('.item')
console.log('Number of categories:', navEl.length)

const categoriesEl = navEl.forEach((category) => {
    console.log('Category:', category.firstElementChild.textContent )
    console.log( 'Elements:', category.lastElementChild.children.length)
})
