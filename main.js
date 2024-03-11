// Ini adalah sebuah komentar di JavaScript
alert('Hello World'); console.log('Statement baris ke 2');

// Ini adalah komentar
// komentar ini multi baris

console.log('Statement 1 baris');

// VARIABEL
var fullname = "Aan"
document.write(fullname)

//MERUBAH VALUE DARI VARIABLE
var fullname = "Aan"
fullname = "Ronaldo"
fullname = "Messi"
document.write(fullname)

//MENAMPILKAN VARIABEL
var fullname = "Aan"
fullname = "Ronaldo"
fullname = "Messi"

document.write(fullname)
document.write('<br>')
document.write(fullname)
document.write('<br>')
document.write(fullname)
document.write('<br>')
document.write(fullname)
document.write('<br>')

//VAR, LET, & CONST
let fullname = "Messi"
fullname = "Joko"

document.write(fullname) //Output Joko

const fullname = "Messi"
fullname = "Joko"

document.write(fullname) //Error: kontanta tidak dapat diubah

//CONTOH MASALAH VAR, LET, & CONST
let y = 10;
if (true){
    let y = 20;
    console.log("Nilai y di dalam blok: ", y );// Output 20
}
console.log("Nilai y diluar blok: ", y ); // Output 10

// TIPE DATA NUMBER 
let bulat = 25
let desimal = 25.5
document.write(bulat)
document.write('<br>')
document.write(desimal)
document.write('<br>')
document.write('Hasil penjumlahan = ', bulat + desimal)

let bulat = 25
let string = 'a'

document.writeln(bulat/0) // hasil infinite
document.write('<br>')
document.writeln(string/5) // hasil NaN (Not a Number)

let bulat = 13456789009876543434567n //variabel bigint bilangan bulat lebih dari (253-1) diakhiri dengan huruf n
document.write(bulat)

//TIPE DATA STRING
let text = "Arkatama"
document.write(text)

//TIPE DATA BOOLEAN
let admin = true
let perbandingan = 1 > 2

document.write(admin) //true
document.write('<br>')
document.write(perbandingan) //false

//UNDEFINED VARIABEL
let admin
document.write(admin) //eror

//TIPE DATA NULL
let admin = null
document.writeln(admin)

//TIPE DATA SYMBOL
let employee = Symbol("Joko") //membuat nilai unique pada variabel

document.write(employee) 
document.write('<br>')
document.write(employee.description)

//TIPE DATA OBJECT
let employee = {
    name: "John",
    age: 30,
    job: "Developer Programmer",
    isMarried : false,
} //Tipe data terdiri atas pasangan kunci dan nilai (key value pair)

document.write('My name is ${employee.name} and I am ${employee.age} years old.')

//CONVERSION STRING
let value = false
let string = String(value)
alert (typeof value)

//CONVERSION NUMERIC
let str = "123"
let nbr = Number(str)

alert (typeof nbr)

//CONVERSION BOOLEAN
alert(Boolean(0))
alert(Boolean(1))

//OPERATOR JAVASCRIPT





