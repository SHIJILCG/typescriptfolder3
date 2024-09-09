"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userdetailsinonehand = {
    name: "Daniel",
    age: 26,
};
console.log(userdetailsinonehand.name);
// function flipaconin(){
//     return Math.random < 0.5
// }
// console.log(userdetails.location)
// const value= Math.random()< 0.5 ? "a":"b";
// if(value !== "a"){
// }else if(value !== "b"){
// }
function greet(person, date) {
    console.log(`Hello ${person} ,today is ${date.toDateString()}`);
}
greet("shijil", new Date());
console.log(Date(), new Date());
let message = "hello there";
console.log(message);
const item = () => {
    console.log("item");
};
let myneme = "Alice";
console.log(myneme);
function greettwo(name) {
    console.log("Hello," + name.toUpperCase() + "!!");
    return 34;
}
greettwo("45");
function getFavoriteNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        return 34;
    });
}
console.log(getFavoriteNumber());
let mypromise = new Promise((resolve, reject) => {
    let succes = true;
});
// setTimeout(()=>{
//     if(success){
//     }
// })
console.log("hihih my neame is ");
