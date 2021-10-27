const fs = require('fs')

class Person{
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
}
let person1 = new Person("Pepe","Lopez",23)

function escribirJson (archivo,obj){
fs.writeFile(archivo,JSON.stringify(obj),()=>{
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
escribirJson("0000.json",person1)
module.exports={escribirJson}