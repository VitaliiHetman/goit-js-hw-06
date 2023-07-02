const form = document.querySelector ('.login-form')
form.addEventListener ('submit', (e) => {e.preventDefault ()
const {email,password} = e.target.elements
if(email.value === ''|| password.value === '') {alert ('Всі поля мають бути заповнені')}
else {const userInfo = {email:email, password:password}
console.log (userInfo)
form.reset()}
})
