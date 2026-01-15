function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    
    if (hora >= 6 && hora < 12) {
        //bom dia
        msg.innerHTML = (`Bom Dia! <br> Agora são ${hora} horas.`)
        document.body.style.background = '#D5EFFD'
        img.src = 'img/Ellipse-manha.png'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        msg.innerHTML = (`Boa Tarde! <br> Agora são ${hora} horas.`)
        document.body.style.background = '#FFB812'
        img.src = 'img/Ellipse-tarde.png'
    }else if (hora >= 18 && hora >= 0){
        //boa madrugada
        msg.innerHTML = (`Boa Noite! <br> Agora são ${hora} horas.`)
        document.body.style.background = '#022854'
        img.src = 'img/Ellipse-noite.png'
    }else {
        //boa noite
        msg.innerHTML = (`Boa Madrugada! <br> Agora são ${hora} horas.`)
        document.body.style.background = '#7F74A8'
        img.src = 'img/Ellipse-madrugada.png'
    }

}

// cor da manha: #D5EFFD
// cor da tarde: #FFB812
// cor da notie: #022854
// cor da madrugada: #7F74A8