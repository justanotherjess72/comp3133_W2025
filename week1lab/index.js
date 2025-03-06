console.log("Week01 - Buffer Examples")

//let b1 = new Buffer ('A hello')

let b1 = Buffer.from('A hello')
console.log(b1)

console.log(b1.toString())
console.log(b1[0])

console.log(b1.toString('ascii'))
console.log(b1.toString('utf8'))
console.log(b1.toString('hex'))
console.log(b1.toString('base64'))
console.log(b1.toString('ucs-2'))

console.log(b1.includes('he')) //true

console.log(b1.length) //7

//Alloc 
let b2 = Buffer.alloc(10, 'A')
console.log(b2)
b2[10] = 66
console.log(b2[10]) // undefined
console.log(b2.length) //10

b2[0] = 0 //'❤️'
console.log(b2[0])
console.log(b2.toString())
console.log(b2)

let b3 = Buffer.allocUnsafe(20)
console.log(b3)
b3.fill('B')
console.log(b3)
console.log(b3.toString())

let b4 = Buffer.from('Hello❤️World')
console.log(b4) 
console.log(b4.toString())
console.log(b4.length)
console.log(b4[0])

console.log(b4.toString('utf8',5,9)) 



//concat
let b5 = Buffer.concat([b3, b4])
console.log(b5.toString())


//slice
let b6 = b5.slice(20, 34)
console.log(b6.toString())

let b7 = Buffer.alloc(10)   
b7.write('Buffer', 2)
console.log(b7)
console.log(b7.toString())

//console.log(b7.read())


// for( let c in b7){
//     console.log(c)
// }

console.log(Buffer.isBuffer(b7)) //true
console.log(Buffer.isBuffer(100)) // false

for (c of b7.entries()){
    console.log(c)
}


let b8 = Buffer.alloc(20)
b7.copy(b8, 0, 2, 8) //Buffer
console.log(b8.toString())


// console.log(b8.toJSON())

let bufferJson = b8.toJSON()
console.log(bufferJson.data)

let b9 = Buffer.from(bufferJson.data)
console.log(b9)
console.log(b9.toString())


const arrayBytes = [0x41, 0x20, 0x65, 0x6c, 0x6c, 0x6f]
let b10 = Buffer.from(arrayBytes)
console.log(b10.toString())

let arrayBuffer = new ArrayBuffer(10)
arrayBuffer[0] = 65
let b11 = Buffer.from(arrayBuffer,0,2)
console.log(b11)
console.log(b11.toString())