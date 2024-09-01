let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//mais simplificado para array e objetos
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*
valores.indexOf(7)  busca o valor 7, não a posição
valores.indexOf(3)  não tem então volta -1
*/

let posi = valores.indexOf(5)
if (posi == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${posi}`)
}

