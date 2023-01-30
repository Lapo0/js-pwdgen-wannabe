const userPassword = document.getElementById ('password')

console.log ('elemento HTML con ID password')

userPassword.innerHTML = ('password')


// chiedere il nome
let name = prompt ('Come ti chiami?')

console.log ('Il tuo nome è:', name)

// chiedere il cognome
let surname = prompt ('Qual è il tuo cognome?')

console.log ('Il tuo nome è:', surname)

userPassword.innerHTML = name + ' ' + surname