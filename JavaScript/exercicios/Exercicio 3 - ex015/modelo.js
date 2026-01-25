function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/criança-M.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-M.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-M.png')
            } else {
                //idoso 
                img.setAttribute('src', 'img/idoso-M.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/criança-F.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-F.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-F.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-F.png')
            }
        } 
        res.style.textAlign = 'center'
        img.style.display = 'flex'
        img.style.marginLeft = 'auto'
        img.style.marginRight = 'auto'
        img.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}