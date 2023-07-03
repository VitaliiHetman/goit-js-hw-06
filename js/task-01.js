const liItems = document.querySelectorAll ('#categories .item')
console.log ('Number of categories:' ,liItems.length )
liItems.forEach (el => {
 
       const title =el.firstElementChild
    const liText = el.getElementsByTagName("li")
      
    console.log (`Category:  ${title.textContent}\nElements: ${liText.length}`)
})
