const fs = require('fs')

function escribirJson (archivo,obj){
fs.writeFile(archivo,JSON.stringify(obj),()=>{
    fs.readFile(archivo,"utf-8",(err,data) => {
            console.log(JSON.parse(data));
    })
})
}

module.exports={escribirJson}