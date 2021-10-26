const fs = require('fs')

function escribirJson (archivo,obj){
s.writeFile(archivo,JSON.stringify(obj),()=>{
    fs.readFile(archivo,"utf-8",(err,data) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(JSON.parse(data));
        }
    })
})
}

module.exports={escribirJson}