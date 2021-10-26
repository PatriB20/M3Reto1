//reto1
// console.log("Mensaje 1");
// setTimeout(()=>
//     {
//         console.log("Mensaje2");

//         setTimeout(() =>
//         {
//             console.log("Mensaje 3");
//         }
    
// )},3000)
// ;

//Reto 2  
const fs = require('fs')
const readline = require("readline")

class Person{
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
}
let person1 = new Person("Pepe","Lopez",23)

fs.writeFile("M3reto1.json",JSON.stringify(person1),()=>{
    fs.readFile("M3reto1.json","utf-8",(err,data) => {
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


//Reto 3 

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
                fs.writeFile("M3reto1.json",JSON.stringify(person1),()=>{
                        fs.readFile("M3reto1.json","utf-8",(err,data) => {
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
