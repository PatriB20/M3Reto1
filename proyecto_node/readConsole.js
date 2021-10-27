const readline = require("readline")

let rl= readline.createInterface({input:process.stdin, output:process.stdout});

class Person{
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
}

function functionReadline(callback){

rl.question("Name: ", (name)=>
            {
            console.log( name)
            rl.question("Surname: ", (surname)=>
                {
                console.log(surname)
                rl.question("Age: ", (age)=>
                {
                    console.log(age)
                    let person2 = new Person (name,surname,age) 
                    console.log(person2)
                    callback(person2)
                    rl.close()
                })
                })
            })
}



module.exports={functionReadline}