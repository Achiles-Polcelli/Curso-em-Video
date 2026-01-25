let peso = 98 /*prompt('Qual seu peso?')*/ 
let altura = 1.76 /*prompt('Qual sua altura?')*/ 
let imc = peso / (altura * altura)

if (imc >= 25) {
    console.log('voce esta acima do peso')
}else {
    console.log('voce nao esta acima do peso')
}