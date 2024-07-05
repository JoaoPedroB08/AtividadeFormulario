
// let JogaBrawl1 = document.getElementById('opcao11')
// let JogaBrawl2 = document.getElementById('opcao22')
// let JogaBrawl3 = document.getElementById('opcao33')
// let JogaBrawl4 = document.getElementById('opcao44')

function Enviar(){

let nomeUsuario = document.getElementById('nome').value
let date = document.getElementById('data').value
let mainUsuario = document.getElementById('main').value
let emailUsuario = document.getElementById('email').value
let senhaUsuario = document.getElementById('senha').value
let troféuUsuario = document.getElementById('numero').value
let reworkFrank = document.querySelector("input[name='rework_frank']:checked").value

alert(   'Seu nome é: ' + nomeUsuario + '\n' 
       + 'A data registrada é: ' + date + '\n'
       + 'Seu Main é: ' + mainUsuario + '\n'
       + 'Seu email é: ' + emailUsuario + '\n'
       + 'Sua senha é: ' + senhaUsuario + '\n'
       + 'Sua conta tem aproximadamente: ' + troféuUsuario + ' troféus \n'
       + 'O que achou do rework do frank: ' + reworkFrank)


       
}