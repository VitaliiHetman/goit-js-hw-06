const liItems = document.querySelectorAll ('#categories .item')
console.log ('Number of categories:' ,liItems.length )
liItems.forEach (el => {
    const title =el.querySelector('h2')
    const liText = el.querySelectorAll('li')
    console.log (`Category:  ${title.textContent}\nElements: ${liText.length}`)
})
