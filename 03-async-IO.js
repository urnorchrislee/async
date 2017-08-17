var fs = require('fs')

fs.readFile('./data.json', (err, data) => {
    console.log(data.toString())
})

console.log('我先执行')
