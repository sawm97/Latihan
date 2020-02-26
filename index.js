// 1. Tes kode pertama, memunculkan teks di terminal
// console.log('First Test Javascript')



// VARIABLE
// Untuk menyimpan sebuah value / data
// Tidak dapat diawali dengan angka
// Diawali dengan huruf, underscore (_) 
// Dapat mengandung, huruf, angka, underscore
// camelCase
// var name = 'Test Variable' // string
// console.log(name)



//  DATA TYPE

// var month = "January" // string
// var dateString = "28" // string
// var date = 28 // integer (bilangan bulat)
// var pi = 3.14 // float (bilangan desimal)
// var single = true // boolean (true, false)

// function typeof untuk mengetahui tipe data dari sebuah variable
// var result = typeof(month)
// console.log(result)

// var x = "Halo Dunia"

// var result = x.length
// console.log(x.length) // Jumlah karakter

// var nilai = 23
// var value = nilai
// console.log(value)


// Menampilkan teks
// alert('Jangan masuk!')

// // // Menerima input dari user
// var name = prompt('Nama lu?')
// alert('udah dibilangin jangan masuk ' + name)
// console.log('Gila lu ya ' + name + ' ampe kedalem gini')


// backslash n (\n) digunakan untuk membuat baris baru (new line)
// console.log("This is my first line" + "\n\n\n" + "This is my second line")



// ARITMATIK

// var numOne = 10
// var numTwo = 5

// var result = numOne + numTwo
// console.log(numOne + " + " + numTwo + " = " + result)

// result = numOne - numTwo
// console.log(numOne + " - " + numTwo + " = " + result)

// result = numOne * numTwo
// console.log(numOne + " * " + numTwo + " = " + result)

// result = numOne / numTwo
// console.log(numOne + " / " + numTwo + " = " + result)

// result = numOne % numTwo
// console.log(numOne + " % " + numTwo + " = " + result)



// STRINGS

// var text = "Fun Day at Summarecon"

// Mengetahui jumlah karakter pada teks
// console.log(text.length)

// Mencari index suatu kata didalam teks
// index dimulai dari nol
// console.log(text.indexOf("at"))
// jika tidak ditemukan akan me-return -1
// console.log(text.indexOf("attta"))

// Mengambil kata dari index 4 sebanyak 6 karakter
// console.log(text.substr(4, 6))

// Ambil kata dari index 4 - 10
// index ke 10 tidak termasuk
// console.log(text.slice(4, 10))

// Mensplit sebuah text berdasarkan karakter tertentu
// Default split = tidak ada
// console.log(text.split())


// var x, y ,z
// x = 'summarecon'
// y = 'SUMMARECON'
// z = 12345

// Mengubah menjadi huruf kapital
// console.log(x.toUpperCase())

// Mengubah menjadi huruf kecil
// console.log(y.toLowerCase())

// Mengubah menjadi String
// console.log(z)
// console.log(z.toString())

// jika sudah menemukan satu karakter yang match
// console.log(x.replace('s', 'S')) 

// Mengubah secara global(semua) karakter yang match
// console.log(x.replace(/s/g, 'S'))


// Mengubah menjadi Integer
// console.log(parseInt('123')) // 123

// Mengubah menjadi Float
// console.log(parseFloat('123')) // 123.0

// Mengubah menjadi Integer
// Menghilangkan bilangan desimal, bukan dibulatkan
// console.log(parseInt('1234.5678')) // 1234
// Mengubah menjadi Float
// console.log(parseFloat('1234.5678')) // 1234.5678

// Mengubah menjadi Integer
// console.log(parseInt('Halo Dunia')) // NaN
// Mengubah menjadi Float
// console.log(parseFloat('Halo Dunia')) // NaN

// NaN = Not a Number



// ARITHMATIC

// var numOne, numTwo, numThree, numSpecial
// numOne = 10
// numTwo = 5
// numThree = 24
// num = 99

// console.log(numOne + ' + ' + numTwo + ' =', numOne + numTwo)
// console.log(numOne + ' + ' + numTwo + ' = ' + (numOne + numTwo))

// var result = num + 3 // 13
// numOne = result
// 
// numTwo = numTwo + 15 // 20
// numTwo += 15

//numThree = numThree + 3
// numThree += 3 // 27

// Increment
// numSpecial += 1
// numSpecial++ // 100

// Decrement
// numSpecial -=1
// numSpecial-- // 99


// Math Object
// console.log(Math.PI)

// Membuat bilangan menjadi positif
// console.log(Math.abs(-4,7))

// Memangkatkan bilangan power
// Delapan pangkat tiga 
// console.log(Math.pow(8, 3))

// Akar dua bilangan (square root)
// console.log(Math.sqrt(64))

// Akar tiga bilangan (cubic root)
// console.log(Math.cbrt(8))

// Bulatkan angka secara matematika
// console.log(Math.round(4.7)) // 5

// Bulatkan angka secara matematika
// console.log(Math.round(4.4)) // 4

// Dibulatkan ke bawah
// console.log(Math.floor(4.7)) // 4

// Dibulatkan ke atas 
// console.log(Math.ceil(4.4)) // 5

// Random 0 (incl) - 1 (excl)
// console.log(Math.random())

// Mencari nilai maximum
// console.log(Math.max(1,3,5))

// Mencari nilai minimum
// console.log(Math.min(1,3,5))

// Date Object
// Mendapatkan info waktu

// var time = new Date()

// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getSeconds())

// Hari dimulai dari : 1
// console.log(time.getDay())

// Bulan dimulai dari : 0
// console.log(time.getMonth())


// Tipe data Boolean : true , false

// var rain = true

// if(rain) {
//     console.log('Gunakan payung')
// } else {
//     console.log('Tidak menggunakan payung')
// }

// var age = 4
// var kategori

// if(age >= 0 && age <= 5){
//     kategori = 'Balita'
// } else if (age >= 6 && age <= 11){
//     kategori = 'Kanak - Kanak'
// } else if (age >= 12 && age <= 25){
//     kategori = 'Remaja'
// } else if (age >= 26 && age <= 45){
//     kategori = 'Dewasa'
// } else if (age >= 46 && age <= 65){
//     kategori = 'Lansia'
// } else {
//     kategori = 'Manula'
// }

// console.log(kategori)

// var rain = 'entahlah'
// switch (rain) {
//     case 'hujan deras':
//         console.log('Hujan Deras')
//         break;
    
//     case 'hujan sedang':
//         console.log('Hujan Sedang')
//         break;

//     case 'gerimis':
//         console.log('Gerimis')
//         break;

//     default:
//         console.log('Cerah')
//         break;
// }



// WHILE LOOP
// Mengulang kode selama kondisi tertentu terpenuhi
// var number = 0

// // kondisi while harus true untuk running block code
// while(number < 5){
//     block kode yang akan di running jika condition bernilai true
//     console.log(`Putaran ke - ${number}`)
//     number++
// }



// DO WHILE
// Running minimal sekali, kemudian cek kondisi while 
// Minimal akan running sekali, terlepas dari apapun hasil kondisi pada while
// number = 0

// do{
//     console.log(`Do While ke - ${number}`)
//     number++
// } while(number < 5)


// WHILE CASE (GENAP)

// var number = 0

// while (number <= 10){
//         console.log( `While ke - ${number}`)
//     number += 2 
// }

// DO WHILE CASE (GANJIL)

// var number = 1

// do {
//     console.log(`Do While ke - ${number}`)
//     number += 2
// } while(number <= 10)



// FOR LOOP 

// for(number = 0; number < 5; number ++){
//     console.log(`For ke - ${number}`)
// }

/*
    1. Pertama kali running akan membaca kode yang di 'kiri'

    2. Akan running kode 'tengah' untuk mendapatkan nilai boolean (T/F)
        2.1 Jika True, maka running  kode pada block kurung kurawal { }
        2.2 Jika False, maka akan berhenti / keluar dari for loop

    3. Jika sudah selesai running kode pada kurung kurawal / step 2.1
       Maka akan running kode 'kanan'
       Kemudian running kode 'tengah' / step 2
       Dan akan terus mengulang hingga step 2 menghasilkan False (Stop)
*/ 



// DRAWING

// Horizontal Stars 
// *  *  *  *  *
// var stars = ''
// for(var i = 0 ; i < 5 ; i++){
//     stars += ' * '
// }
//  console.log(stars)

// Vertical Stars
// var stars = ''
// for(var i = 0 ; i < 5 ; i++){
//     stars += ' * \n'
// }
//  console.log(stars)

// Square Stars 
// var stars = ''
// for(var i = 0 ; i < 5 ; i++){
    
//     for(var j = 0 ; j < 5 ; j++){
//             stars += ' * '
//         }
    
//     stars += '\n'
// }
//  console.log(stars)

// Triangle Stars
// var stars = ''
// for(var i = 0 ; i < 5 ; i++){
    
//     for(var j = 0 ; j < i + 1 ; j++){
//             stars += ' * '
//         }
    
//     stars += '\n'
// }
//  console.log(stars)



// ARRAY

// Menyimpan data lebih dari satu dengan tipe data yang sama atau berbeda

// Index mulai dari 0
// var bulan = [ 'January' , ' February', 'March']
// var hari = [
//     'Senin' ,
//     'Selasa' ,
//     'Rabu' , 
//     'Kamis' , 
//     'Jumat' ,
//     'Sabtu' ,
//     'Minggu' ,
// ]

// console.log(bulan [2])
// console.log(hari [5])



// METHODS

// // Mengubah menjadi satu string dan dipisahkan dengan koma
// var bulanString = bulan.toString()
// // console.log( bulanString )

// // Menjadi satu string dengan karakter tertentu sebagai penghubung
// console.log(
//     bulan.join(', ')
// )
// console.log(
//     bulan.join(' & ')
// )


// // Mengurutkan data pada array
// console.log(
//     hari.sort()
// )

// // Membalik urutan data di array
// // Bukan sorting secara descending
// console.log(
//     hari.reverse()
// )

// // Mencari index data
// console.log(
//     hari.indexOf('Sabtu')



// PROPERTIES 

// Mengetahui banyaknya data pada sebuah array
// var colors = ['Red', 'Green', 'Blue', 'Orange']
// var lenColors = colors.length // 4

// for(var i = 0; i < lenColors; i++){
//     console.log(`Color ${colors[i]}`)
// }

/*
    i = 2
    Warna colors[0]
    Warna colors[1]
    Warna colors[2]
    Warna colors[3]
*/

// console.log('Banyaknya data adalah ' + lenColors)



// PUSH & POP

// Push, untuk menambahkan data baru ke index terakhir
// Pop, untuk mengeluarkan data yang ada di index terakhir

// var pro = ['Ceb', 'Dendi', 'NOtail']

// pro.push('MidOne')
// console.log( pro )
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne' ]

// pro.push('Topson', 'ana')
// console.log( pro )
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne', 'Topson', 'ana' ]

// pro.pop()
// console.log(pro)
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne', 'Topson' ]

// pro.pop('Dendi')
// console.log(pro)
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne' ]



// SHIFT & UNSHIFT

// shift, mengeluarkan data index pertama
// unshift, menambahkan data di index pertama

// var heroes = ['Rubick', 'Shadow Fiend', 'Windranger']

// heroes.push('Axe')
// console.log(heroes)
// // [ 'Rubick', 'Shadow Fiend', 'Windranger', 'Axe' ]

// heroes.shift()
// console.log(heroes)
// // [ 'Shadow Fiend', 'Windranger', 'Axe' ]

// heroes.unshift('Invoker')
// console.log(heroes)
// // [ 'Invoker', 'Shadow Fiend', 'Windranger', 'Axe' ]



// DELETE & SPLICE

// Splice, hapus data tertentu, yang lain geser
// Delete , akan menjadi undefined

// var words = ['Please', 'Save', 'Me', 'Now']

// Hapus data dari index 1 sampai terakhir
// words.splice(1)
// console.log(words)

// Hapus mulai dari index 1, sebanyak 2 data
// words.splice(1, 2)
// console.log(words)
// ['Please', 'Now']

// Hapus mulai dari index 0, sebanyak 1 data
// words.splice(0, 1)
// console.log(words)
// ['Now']

// var words = ['Please', 'Save', 'Me', 'Now']
// Dari index 1, tidak menghapus data, dan tambahkan 3 data baru
// words.splice(1, 0, 'I','Need', 'Help')
// console.log(words)
// ['Please', 'I', 'Need, 'Help', 'Save', 'Me', 'Now']

// var words = ['Please', 'Save', 'Me', 'Now']
// Dari index 1, hapus 3 data, tambahkan 3 data baru
// words.splice(1,3, 'I', 'Need', 'Help')
// console.log(words)
// ['Please', 'I', 'Need', 'Help']

// delete words[1]
// console.log(words)
// ['Please', undefined, 'Me', 'Now']
// console.log(words[1])
// undefined



// SLICE

// Copy sebagian data tanpa mengubah dari nilai asli
// var days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ]
// Copy data dari index 2 sampai index terakhir (habis)
// var dayOne = days.slice(2)
// console.log(days)
// console.log(dayOne)

// Copy dari index 2 - 4
// var dayTwo = days.slice(2, 5)
// console.log(days)
// console.log(dayTwo)



// MERGE

// Destruction array
// var dayOne = ['Sunday', 'Monday', 'Tuesday']
// var dayTwo = ['Thursday', 'Friday', 'Saturday']
// var dayThree = ['Wednesday']

// var dayOneTwo = [...dayOne, ...dayTwo]
// console.log(dayOneTwo)

// var dayAllIn = [...dayOne, ...dayThree, ...dayTwo]
// console.log(dayAllIn)



// ARRAY OF ARRAY

// var persons = [
//     ['John', 43, 'Assasin'],
//     ['Tony', 44, 'Engineer'],
//     ['Baby', 21, 'Driver'],
//     ['Justin', 29, 'Singer']
// ]

// var found
// for (var i = 0; i < persons.length; i++){
//     if(persons[i][0] == 'John'){
//         found = i
//     }
// }

// console.log(`Index dari Tony adalah ${found}`)

// persons[2].push('Single')

// console.log(
//     persons.indexOf(['Tony', 44, 'Engineer'])
// )

// persons.splice(1,2)

// console.log(persons) 



// FUNCTION

// Block kode yang dapat memiliki nama dan digunakan secara berulang
// Sebuah function dapat memiliki input, output atau input dan output sekaligus

// // no input, no output
// function hello(){
//     console.log(`Hello ... `)
// }

// hello()

// 1 input, no output
// function greet(name){
//     console.log(`Hello, ${name}`)
// }

// greet('Bambang')
// greet('Tono')
// greet('Tungkap')

// 3 input, no output
// function intro(name, age, job){
//     console.log(
//         `Name : ${name}\n` +
//         `Umur : ${age}\n` +
//         `Pekerjaan : ${job}`
//     )
// }

// intro ('Bambang', 25, 'Programmer')
// intro ('Tono', 32, 'Designer')

// no input, 1 output
// function grav(){
//     return 9.8
// }

// var result = grav()

// console.log(
//     `Satuan gravitasi : ${result}`
// )

// 2 input, 1 output
// function sum(x, y){
//     var result = x + y

//     return result
// }

// var sumResult = sum(4, 5)
// console.log(`4 + 5 = ${sumResult}`)

// console.log(sum(1, 2))
// console.log(sum(7, 8))

// Function call another function

// function oneFun(){
//     console.log('Function oneFun')
// }

// function twoFun(fn){
//     fn()
// }

// twoFun(oneFun)


// Tugas

// var x = 3
// var y = 4

// function calSum(x, y){
//     var result = x + y
    
//     return result
// }

// function calMult(x, y){
//     var result = x * y
    
//     return result
// }
    
// function calculate(fn, numOne, numTwo){
//         x = numOne
//         y = numTwo
//         return fn(x, y)
//     }

// var result = calculate(calSum, 3, 4)
// console.log(result)

// function anonym(fn){
//     var a = 4
//     var b = 2

//     var res = fn(a, b)

//     console.log(res)
// }

// function square(x, y){
//     var res = Math.pow(x, y)

//     return res
// }

// anonym(square)



// SORT : Advance

// Sort menerima function dengan dua parameter
// function tersebut mereturn salah satu dari 3 kemungkinan :
//      1. nilai negatif
//      2. nilai nol 
//      3. nilai positif

// return negatif : posisi 'a' ada didepan 'b'
// return nol : tidak bertukar posisi
// return postif : posisi 'b' ada didepan 'a'

// numArr = [40, 23, 1, 100, 2, 230]

// // acscending, kecil ke besar
// function asc(a, b){
//     return a - b
// }

// // descending, besar ke kecil
// function dsc(a, b){
//     return b - a
// }

// numArr.sort(dsc)

// console.log(numArr)


// var persons = [
//     [`John`, 43, `Assasin`],
//     [`Tony`, 44, `Engineer`],
//     [`Baby`, 21, `Driver`],
//     [`Justin`, 29, `Singer`]
// ]

// persons.sort()

// console.log(persons)


// //  Urutkan berdasarkan nama

// function byName(a, b){
//     // a = [`John`, 43, `Assasin`]
//     // b = [`Tony`, 44, `Engineer`]
//     if(a[0] < b[0]){
//         return -1
//     } else if(a[0] > b[0]){
//         return 1
//     } else {
//         return 0
//     }
// }

// persons.sort(byName)

// console.log(persons)


// //  Urutkan berdasarkan umur

// function byAge(a, b){
//     return a[1] - b[1]
// } 

// persons.sort(byAge)

// console.log(persons)


// //  Urutkan berdasarkan pekerjaan

// function byJob(a, b){
//     if(a[2] < b[2]){
//         return -1
//     } else if(a[2] > b[2]){
//         return 1
//     } else {
//         return 0
//     }
// }

// persons.sort(byJob)

// console.log(persons)

//  Petunjuk
//  Untuk nama dan pekerjaa menggunakan perbandingan bias ( > / < / == )
//  Untuk umur pakai asc



// OBJECT

// Menggunakan kurung kurawal {}
// Tidak mengenal indexing, melainkan property dan value
// Data dari database nantinya akan berbentuk object

// var person = {
//     name    : 'John',
//     age     : 49,
//     hobbies : ['Run', 'Chase'],
//     pets : [
//         { name: 'Holly'},
//         { name: 'Molly'},
//         { name: ['Ring', 'Ding', 'Dong']}
//     ],

//     intro : function (){
//         console.log(`Hello, ${this.name}`)
//         console.log(`My age is ${this.age} y.o`)
//         console.log(`One of my pet is ${this.pets[0].name}`)
//         console.log(`And the other one is, ${this.pets[1].name}`)
//     }
// }

// console.log(person);
// console.log(person.name);
// console.log(person.pets);
// person.intro()
// console.log()

// Menambahkan property
// person.address = 'Summarecon'
// person.wakeUp = function (){console.log(`Hello, Good Morning`)}

// // Menghapus property
// delete person.pets



// CLASS

// Sebuah blueprint untuk membuat object
// Dengan membuat class, akan lebih mudah me-manage property apa yang akan ada
// Sebuah class dapat menurunkan property ke class lain (inheritance)

// class Person{
//     constructor (_full, _age, _pos, _sall){
//         this.fullName = _full
//         this.age = _age
//         this.address = 'Indonesia'
//         this.jobDetail = {position: _pos, sallary: _sall}
//     }

//     greet(){
//         console.log(`Hello, I'am ${this.fullName}`)
//     }
// }

// var Andi = new Person ('Andi Maulana', 27, 'Manager', 1000000)
// var Budi = new Person ('Budi Ramadhan', 22, 'CTO', 12000000)
// var Charlie = new Person ('Charlie Houten', 28, 'Singer', 98700000)
// var Dodit = new Person ('Dodit Maulana', 27, 'Driver', 800000)

// console.log(Andi);
// console.log(Budi);
// console.log(Charlie);
// console.log(Dodit);

class Human{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }

    breath(){
        console.log(`I'm breathing`)
    }
}
class Student extends Human{
    constructor(_name, _age, _grade){
        super(_name, _age)
        this.grade = _grade
    }

    study(){
        console.log(`I'm studying`)
    }
}

class Employee extends Student{
    constructor(_name, _age, _grade, _position){
        super(_name, _age, _grade)
        this.position = _position
    }

    work(){
        console.log(`I'm working`)
    }
}


var Doy = new Employee(`Doy Kangen`, 27, 'Senior High School', 'Developer')


console.log(Doy)
Doy.study()
Doy.breath()
Doy.work()







// PLAYGROUND / TEST CODE





























// SHORTCUT
// Ubah bersamaan : BlockDrag + (CTRL + D)
// Kursor banyak : ALT + LEFT CLICK
// Ubah posisi : ALT + UP/DOWN ARROW
// Duplicate code : SHIFT + ALT + UP/DOWN ARROW
// Membuka / menutup terminal : CTRL + J
// Membersihkan terminal : CTRL + L
// Membuat komentar : CTRL + / 