const readline = require("readline")
const fs = require('fs')


class Person{
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
}

function functionReadline(archivo){
let rl= readline.createInterface({input:process.stdin, output:process.stdout});
rl.question("Name: ", (name)=>
            {
            console.log( name)
            rl.question("Surname: ", (surname)=>
                {
                console.log(surname)
                rl.question("Age", (age)=>
                {
                console.log(age)
                let person2 = new Person (name,surname,age) 
                console.log(person2)
                fs.writeFile(archivo,JSON.stringify(person2),()=>{
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
                rl.close()
                })
            
                }
                        )
            }
         
            )
}
// funtionReadline("12345.JSON")


module.exports={functionReadline}