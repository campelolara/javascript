function carregar() {
    var txthora = window.document.getElementById('txthora')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    txthora.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.style.background-color = 'yellow'
    } else if (hora <= 18) {
        imagem.style.background-color = 'orange'
    } else {
        imagem.style.background-color = 'blue'
    }
}