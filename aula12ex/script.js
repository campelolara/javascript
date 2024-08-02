function carregar() {
   var msg = window.document.querySelector('div.msg')
   var imagem = window.document.querySelector('div.imagem')
   var data = new Date()
   var hora = data.getHours()

   msg.innerHTML = `Agora são ${hora} horas`

   if (hora >= 0 && hora < 12) {
    imagem.style.background = '#fdd85d'
    document.body.style.background = '#fdc921'
   } else if (hora >= 12 && hora < 18) {
    imagem.style.background = '#f4a261'
    document.body.style.background = '#e76f51'
   } else {
    imagem.style.background = '#0076bb'
    document.body.style.background = '#0261b1'
   }
}

// se fosse uma imagem = img.scr = 'foto.png