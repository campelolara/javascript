function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   
   if (fano.value.lenght == 0 || Number(fano.value) > ano) {
      window.alert('Verifique os dados novamente')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
         genero = 'Homem'
         if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebehomem.png')
         } else if (idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemhomem.png')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homemadulto.png')
         } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
         }
      } else if (fsex[1].checked) {
         genero = 'Mulher'
         if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebemulher.png')
         } else if (idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemmulher.png')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulheradulta.png')
         } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
         }
      }
      res.style.textAlign = 'center' 
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}