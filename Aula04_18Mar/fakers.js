import nomes from "./fakedata/nomes.js"
import sobrenomes from "./fakedata/sobrenomes.js"
import rg from "./fakedata/rg.js"
import email from "./fakedata/email.js"

function fakeName() {
    let num = parseInt(Math.random()*nomes.length)
    return nomes[num]
}

function fakeSobrenome() {
    let num = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[num]
}

function fakePassword() {
    let num = parseInt(Math.random()*1000000)
    return num.toString()
}

function fakeRg() {
    return rg()
}

function fakeEmail() {
    let num = parseInt(Math.random()*email.length)
    return email[num]
}

export function fakeUser() {
    let firstName = fakeName()
    let lastName = fakeSobrenome()
    let username = firstName.charAt(0)+lastName
    username = username.toLowerCase()
    let password = fakePassword()
    let rg = fakeRg()
    let email = username+"@"+fakeEmail()
    return {
        firstName,
        lastName,
        username,
        password,
        rg,
        email  
    }
}