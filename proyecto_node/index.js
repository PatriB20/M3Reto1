const fs = require('fs')
const readline = require("readline")
const escribirJson =require("./writeAndReadObject")
const functionReadline = require ("./readConsole")

class Person{
    constructor(name,surname,age)
    { 
        this.name=name
        this.surname=surname
        this.age=age
    }
}
let person1 = new Person("Pepe","Lopez",23)



readline.functionReadline("123.json")
// fs.escribirJson("123.json",person1)


