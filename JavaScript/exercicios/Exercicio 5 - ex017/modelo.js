function Gerar(){
    var number = document.querySelector('input#number')
    var num = Number(number.value) 
    var tabuada = document.getElementById('Tabuada');
    
    // Limpa o select antes de gerar nova tabuada
    tabuada.innerHTML = ''
    
    // Validação: verifica se o número é válido
    if (isNaN(num) || num == '') {
        alert('Por favor, digite um número válido!')
        return
    }
    
    // Gera a tabuada de 1 a 10
    for (var i = 1; i <= 10; i++) {
        var item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        item.value = `v${i}` // Adiciona um valor ao option
        tabuada.appendChild(item)
    }
}