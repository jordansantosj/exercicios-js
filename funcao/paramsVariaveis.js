function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 1.2, 1.3))
console.log(soma('a', 'b', 'c'))
console.log(soma(24, 25, 'c'))