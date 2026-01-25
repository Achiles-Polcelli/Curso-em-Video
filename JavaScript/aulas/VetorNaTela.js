let num = [4, 2, 7, 0, 5]

//Ao inves de printarmos um por um, podemos utilizar o *for*
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/

//Utilizando o *for*
/*
for(let pos=0; pos<num.length;pos++) {
    console.log(num[pos])
}
*/

//Uilizando o *for in*
for(let pos in num) {
    console.log(num[pos])
}