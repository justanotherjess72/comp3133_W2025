const fs = require('fs')

//Write Async callback
//let dataToWrite = "Welcome to GBC"
let dataToWrite = Buffer.from("Welcome to GBC, Toronto")

//If the file doesn't exist, it will be created - this overwrites and does not append
fs.writeFile("output.txt", dataToWrite, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("Write Async callback : Success")
})

//Sync 
fs.writeFileSync("output.txt", dataToWrite)

//Async with promise
fs.promises.writeFile("output.txt", dataToWrite)
    .then(() => {
        console.log("Write Async promise : Success")
    })
    .catch((err) => {
        console.log(err)
    })

