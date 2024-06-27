import chalk from "chalk"
import inquirer from "inquirer"
class Player {
    name: string 
    fuel: number = 100
    constructor (name:string){
        this.name = name
    }
    fuelDecrease(){
    let fuel = this.fuel -25
    this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }  
}
class OtherPlayer{
    name: string 
    fuel: number = 100
    constructor (name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
        }
      
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message : "please Enter your name: " 
    
})

let otherPlayer = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select your opponect ",
    choices: [
        "skeleton",
        "Assassin",
        "Zombie"
    ]
})

let p1 = new Player (player.name)

let op1 = new OtherPlayer (otherPlayer.select)
do{
    if (otherPlayer.select == "skeleton" ) {
    

    let ask = await inquirer.prompt({
        type:"list",
    name:"opt",
    message:"Select your opponect ",
    choices: [
        "attack",
        "Drink portion",
        "run save your life"
    ]
})
if (ask.opt== "attack"){
    let num = Math.floor(Math.random() *2 )
    if (num > 0){
    p1.fuelDecrease()
    console.log(chalk.bold.red (`${p1.name} Feul is ${ p1.fuel}`))
    console.log(chalk.bold.yellow(`${op1.name} feul is ${op1.fuel}`))
    if (p1.fuel <= 0){
        console.log(chalk.red.bold.italic("you loose the game. Better Next time"))
        process.exit()
    }
    
    }
    if (num <= 0){
        op1.fuelDecrease()
        console.log(chalk.bold.red (`${op1.name} Feul is ${ op1.fuel}`))
        console.log(chalk.bold.yellow(`${p1.name} feul is ${p1.fuel}`))
        if (op1.fuel <= 0){
            console.log(chalk.green.bold.italic("you Win"))
            process.exit()
        }
        
    }
}
if (ask.opt == "Drink portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`you drink health portion. Your fuel is ${p1.fuel}`))
}
    if (ask.opt== "run save your life"){
        console.log(chalk.red.bold.italic("you loose the game. Better Next time"))
        process.exit()
    }
}
if (otherPlayer.select == "Assassin" ) {
    

    let ask = await inquirer.prompt({
        type:"list",
    name:"opt",
    message:"Select your opponect ",
    choices: [
        "attack",
        "Drink portion",
        "run save your life"
    ]
})
if (ask.opt== "attack"){
    let num = Math.floor(Math.random() *2 )
    if (num > 0){
    p1.fuelDecrease()
    console.log(chalk.bold.red (`${p1.name} Feul is ${ p1.fuel}`))
    console.log(chalk.bold.yellow(`${op1.name} feul is ${op1.fuel}`))
    if (p1.fuel <= 0){
        console.log(chalk.red.bold.italic("you loose the game. Better Next time"))
        process.exit()
    }
    
    }
    if (num <= 0){
        op1.fuelDecrease()
        console.log(chalk.bold.red (`${op1.name} Feul is ${ op1.fuel}`))
        console.log(chalk.bold.yellow(`${p1.name} feul is ${p1.fuel}`))
        if (op1.fuel <= 0){
            console.log(chalk.green.bold.italic("you Win"))
            process.exit()
        }
        
    }
}
if (ask.opt == "Drink portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`you drink health portion. Your fuel is ${p1.fuel}`))
}
    if (ask.opt== "run save your life"){
        console.log(chalk.red.bold.italic("you loose the game. Better Next time"))
        process.exit()
    }
}
if (otherPlayer.select == "Zombie" ) {
    

    let ask = await inquirer.prompt({
        type:"list",
    name:"opt",
    message:"Select your opponect ",
    choices: [
        "attack",
        "Drink portion",
        "run save your life"
    ]
})
if (ask.opt== "attack"){
    let num = Math.floor(Math.random() *2 )
    if (num > 0){
    p1.fuelDecrease()
    console.log(chalk.bold.red (`${p1.name} Feul is ${ p1.fuel}`))
    console.log(chalk.bold.yellow(`${op1.name} feul is ${op1.fuel}`))
    if (p1.fuel <= 0){
        console.log(chalk.red.bold.italic("you loose the game. Better Next time"))
        process.exit()
    }
    
    }
    if (num <= 0){
        op1.fuelDecrease()
        console.log(chalk.bold.red (`${op1.name} Feul is ${ op1.fuel}`))
        console.log(chalk.bold.yellow(`${p1.name} feul is ${p1.fuel}`))
        if (op1.fuel <= 0){
            console.log(chalk.green.bold.italic("you Win"))
            process.exit()
        }
        
    }
}
if (ask.opt == "Drink portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`you drink health portion. Your fuel is ${p1.fuel}`))
}
    if (ask.opt== "run save your life"){
        console.log(chalk.red.bold.italic("you loose the game. Better Next time"))
        process.exit()
    }
}
}while(true)




