const calcular = (tipo, reposicao, limpezaDetalahada, quantidade) => { 

var valor = 0
if (tipo === 'limpeza') {
    valor = 100
    if (limpezaDetalahada) {
        valor += 50
    }
} else if (tipo === 'manutencao') {
    valor = 150
    if (reposicao) {
        valor += 100
    }
} else if (tipo === 'revisao') {
    valor = 80
} else {    
    console.log('Tipo de serviço inválido')
    return 
}

if (quantidade >= 20) {
    valor =  valor * (1 - 0.20)
} else if (quantidade >= 10) {
    valor =  valor * (1 - 0.15)
}
return valor
}

const resultado = calcular('manutencao', true, false, 25)
console.log(`O valor do serviço é de R$ ${resultado.toFixed(2)}`)