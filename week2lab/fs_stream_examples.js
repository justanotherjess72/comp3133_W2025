const fs = require('fs')
const zlib = require('zlib')
const ToLowerCasePipe = require('./ToLowerCasePipe')
const ToWordsPipe = require('./toWordsPipe')

const readStream = fs.createReadStream('input_stream.txt')
const writeStream = fs.createWriteStream('output_stream.txt')

readStream.on('data', (chunk) => {
    console.log(chunk.toString())
})

readStream.on('end', () => {
    console.log('Data read stream end')
})

readStream.on('error', (err) =>{
    console.log(`error read stream ${err}`)
})

readStream.on('close', ()=> {
    console.log('read stream close')
})

writeStream.on('error', (err) =>{
    console.log(`error write stream ${err}`)
})

writeStream.write("Hello")
writeStream.write("World")
writeStream.write("NodeJs")
// writeStream.end()

//pipes
readStream.pipe(writeStream)
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream.gz'))

//Covert to lowercase
readStream.pipe(new ToLowerCasePipe())
            .pipe(fs.createWriteStream('lower_stream.txt'))

//Split each word on new line
readStream.pipe(new ToWordsPipe())
            .pipe(fs.createWriteStream('words_stream.txt'))
