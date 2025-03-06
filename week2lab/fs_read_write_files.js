const fs = require('fs')

fs.open('data.txt', 'r+', (err, fd) => {
    if(err){
       console.log(err)
       return
   }
   console.log('File opened successfully')

   var buffer = Buffer.alloc(12)
   fs.readSync(fd, buffer, 0, buffer.length)
   console.log(buffer.toString())
//    fs.readSync(fd, buffer, 0, buffer.length)
//    console.log(buffer.toString())


    fs.writeSync(fd, Buffer.from('from Kingston'), 0, 7, 21)
    


    fs.close(fd, (err) => {
        if(err){
            console.log(err)
            return
        }
        console.log('File closed successfully')
    })
})