var arrNum = []
var min = ""
var max = ""
var a = ""
var b = ""
var c = ""

do {
    var num = parseInt(prompt("Masukkan angka"))
    if (isNaN(num)){
        var repeat = false
    } else {
        arrNum.push(num)
        var repeat = true
    }
} while (repeat)

for(var i = 0 ; i < arrNum.length ; i++){
    if(i == 0){
        var a = arrNum[i]
    } else if (i == 1) {
        var b = arrNum[i]
    } else if (i == 2) {
        var c = arrNum[i]
    }
}

if (a < b && b < c) {
    min = a
    max = c
} else if (a < c && c < b){
    min = a
    max = b
} else if (b < a && a < c){
    min = b
    max = c
} else if (b < c && c < a){
    min = b
    max = a
} else if (c < a && a < b){
    min = c
    max = b
} else if (c < b && b < a){
    min = c
    max = a
} else {
    min = a
    max = a
}

console.log(arrNum)
console.log(arrNum.length)
console.log(min)
console.log(max)

