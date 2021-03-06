/*const t = [1,3,6,8]

let trouver=false;
let i =0
while (i<t.length){
    if (t[i]==8){
        trouver = true
    }
    i++
}
if (trouver){
    console.log("la valeur existe dans le tableau")
}
else{
    console.log("la valeur n'existe pas")
}

console.log("le tableau t : " + t)

*/

function existe(list, value) {
    //this function checks if the value value exists in list
    let i = 0
    while (i < t.length) {
        if (list[i] == value) {
            return  true
        }
        i++
    }
    return false
}
/*
class Etudiant {
  constructor(nom, cin) {
    this.nom = nom;
    this.cin = cin;
  }

  getName() {
    return this.nom;
  }

  getCin() {
    return this.cin;
  }
}
let e1 = new Etudiant("Aziz",123456789)


console.log(e1.getName())
console.log(e1.getName())*/
/*
let counter = 0
let myCounter = document.querySelector("#counter")
let Time_ = 1000
let isIncrementing = false

function increment (){ 
    if(isIncrementing){
        counter++ ; 
        if (counter%2 == 0){
            myCounter.style.color = "red"
        }else{
            myCounter.style.color = "black";
        }
        myCounter.innerHTML = counter
    }
    console.log("hh")
   
}

function start(){
    isIncrementing = true
    setInterval(increment,Time_)
}
function stop(){
    isIncrementing = false
}

*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let audio = new Audio('music.mp3');
let body = document.body
body.onkeydown = ()=>{
    let color = ["blue","red","yellow","violet"]
    index = getRandomInt(3)
    document.body.style.backgroundColor = color[index]
    audio.play()
    setTimeout(()=>{
        audio.pause()
    },3000)

}

