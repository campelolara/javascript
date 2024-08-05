function contar() {
let ini = document.querySelector('input#txtini')
let fim = document.querySelector('input#txtfim')
let pas = document.querySelector('input#txtpas')
var res = document.querySelector('div#res')

if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
   window.alert('[ERRO] Faltam dados!')
} else {
   res.innerHTML = 'Contando: '
   let i = Number(ini.value)
   let f = Number(fim.value)
   let p = Number(pas.value)

   if (i < f) {
      //crescente
      for(let c = i; c <= f; c += p) {
         res.innerHTML += `${c}...`
      }
   } else {
      //decrescente
      for(let c = i; c >= f; c -= p) {
         res.innerHTML += `${c}...`
      }
   }

   }

}


