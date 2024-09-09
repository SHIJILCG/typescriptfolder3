// const userdetailsinonehand ={
//     name:"Daniel",
//     age:26,
// }
// console.log(userdetailsinonehand.name);
// // function flipaconin(){
// //     return Math.random < 0.5
// // }
// // console.log(userdetails.location)
// // const value= Math.random()< 0.5 ? "a":"b";
// // if(value !== "a"){
     
// // }else if(value !== "b"){

// // }
// function greet(person:string,date:Date){
//     console.log(`Hello ${person} ,today is ${date.toDateString()}`)
// }
// greet("shijil", new Date());
// console.log(Date(),new Date());
// let message="hello there";
// console.log(message);
// const item =()=>{
//     console.log("item");
// }
// let myneme:string ="Alice";
// console.log(myneme);
// function greettwo(name:string):number{
//     console.log("Hello," + name.toUpperCase() + "!!");
//     return 34;
// }
// greettwo("45");
// async function getFavoriteNumber():Promise<number> {
//     return 34;
// }
// console.log(getFavoriteNumber())
// let mypromise = new Promise((resolve,reject)=>{
//     let success = true;
//     setTimeout(()=>{
//         if(success){
//             resolve("the Operation was successful");
//         }
//         else{
//             reject("The operation failed.");
//         }
//     },200)
// })
// mypromise
// .then((message)=>{
//      console.log(message)
// })
// .catch((error)=>{
//     console.error(error)
// });

// console.log("hihih my  neame is shijil cg ");
// const names=["Alice","Bob","Eve"];
// names.forEach(function(s){
//      console.log(s.toUpperCase());
// });
// names.forEach((s)=>{
//     console.log(s.toLocaleUpperCase())
// });
// function printcolorrd(pt:{x:number;y:number},s?:string){
//      console.log("The coordinate's x value is " + pt.x);
//      console.log("The coordinate's x value is " + pt.y);
// }
// printcolorrd({x:20,y:30});
// function printname(obj:{first:string,last?:string}){
//     if(obj.last !== undefined){
//         console.log( console.log(obj.last?.toUpperCase()))
//     }
//     console.log(obj.first.toLocaleUpperCase())
// }
// printname({first:"shijil",last:"cg"});

// function welcomepeople(x:string[] | string){
//    console.log(x.slice(0,5))
// }
// welcomepeople("shijil")
// type point ={
//     x:number;
//     y:number;
// };
// type points = point &{
//    z?:string
// }
// interface animal{
//     name:string;
//     id:number
// }
// interface dog{
//      items:string
// }
// function animaldetails(pt:point & points){
     
// }
// function printcoord(pt:points){
//     console.log("the coordinates you are stand is " + pt.x + "and" + pt.y );
// }
// printcoord({x:10,y:20})
// const myCanvas =document.getElementById("main_canva") as HTMLCanvasElement;
// const myCanvastwo=<HTMLCanvasElement>document.getElementById("main_canvas");
// function itemareselected(item:string,alignment:"left"|"center"|"right"){
    
// }
// itemareselected("Hello,World","left");
// itemareselected("G'day,,mate","center");
// function compare(a:string,b:string): -1 | 0 | 1 {
//     return a===b? 0 : a < b ? -1: 1
// }
// console.log(compare("shijil","SHIJIL"))
// const obj={counter:0};
// let somecondition = true;
// if(somecondition){
//     obj.counter =1
// }
// console.log(obj.counter)
// declare function  hadlerequest(url:string,method:"GET" | "POST"):void;
// const req={url:"https://example.com",method:"GET"} as const;
// hadlerequest(req.url,req.method);
// function dosomething(x:string | null){
//     if(x === null){
//         //do something
//     }else{
//         console.log("Hello, " + x.toLocaleUpperCase())
//     }
// }
// enum userrespose{
//     no,
//     yes,
// }
// function respond(resipient:string,message:userrespose):void{
//       console.log(resipient,message)
// }
// respond("hi shijil",userrespose.yes)
//  function printall(strs:string | string[] | null){
//      if(typeof strs === "object" && strs){
//          for(const s of strs){
//             console.log(s)
//         }
//      }else if(typeof strs === "string"){
//         console.log(strs)
//      }else{

//      }
//  }
// function printall(strs:string|string[]|null){
//     if(strs && typeof strs === "object"){
//         for(const s of strs){
//            console.log(s)
//         }
//     }else if(typeof strs === "string"){
//         console.log(strs)
//     }
// }
// function multiplyAll(value:number[] | undefined,factor:number):number[] | undefined{
//     if(!value){
//         return value
//     }else{
//         return value.map((x)=> x * factor);
//     }
// }
// console.log(multiplyAll(undefined,12))
// type fish = {swim:()=>void};
// type  bird = {fly:()=>void};

// function move(animal:fish | bird){
//      if("swim" in animal){
//          return animal.swim()
//      }
//      return animal.fly()
// }
// type Fish ={swim:()=>void};
// type Bird ={fly:()=> void};
// type human={swim?:()=>void;fly?:()=>void};
// function move(animal:Fish | Bird | human){
//     if("swim" in animal){
//         animal;
//     }else{
//         animal;
//     }
// }
// function logvalue(x:Date | string){
//     if(x instanceof Date){
//         console.log(x.toUTCString());
//     }else{
//         console.log(x.toLocaleUpperCase())
//     }
// }
// let x=Math.random() < 0.5 ? 10 :"hello world";
//   x =1;
//   console.log(x);
//   x="goodbye!";
//   console.log(x);
// function padleft(padding:number | string,input:string){
//      if(typeof padding === "number"){
//         return "".repeat(padding) + input
//      }
//      return padding + input;
// }
// console.log(padleft(12,"shijl"));
// interface Shape {
//     kind:"circle" | "square";
//     radius ?:number;
//     sidelength?:number;
// }
// function handleshapes(shape:Shape){
//      if(shape.kind === "circle"){}
// }
// function greeter(fn:(a:string)=> void){
//      fn("Hello,World") 
// }
// function pirntTOconsole(s:string){
//     console.log(s)
// }
// greeter(pirntTOconsole)
// type DedcribablrFunction={
//     decription:string;
//     (someArg:number):boolean;
// }

// function dosomething(fn:DedcribablrFunction){
//     console.log(fn.decription +"\t" + "returned"+ "\t" +  fn(6));
// }
// function myfunc(someArg:number){
//     return someArg > 3;
// }
// myfunc.decription ="default description";
// dosomething(myfunc)

// type decriptionforfunction={
//     description:string;
//     (value:number):number
// }
// function todosomething(fn:decriptionforfunction,value:number){
//     console.log(fn.description +" you have" + fn(value) + "conins left in your valt")
// }
// function myfunc(value:number){
//        return value * 20
// };
// myfunc.description = "shijil";
// todosomething(myfunc,12);
// function firstElement <type>(arr:type[]):type | undefined{
//      return arr[0]
// }
// console.log(firstElement(["a","b","c"]));
// console.log(firstElement([1,2,4]));
// console.log(firstElement([]))
// function map<input,output>(arr:input[],func:(arg:input)=>output):output[]{
//    return arr.map(func);
// }
// const fn=(n:number)=>{
//     return 12;
// }
// const parsed=map([1,23,4,5,6,4,3,33,3],fn);
// interface someType{
//     readonly prop:string;

// }
// function dosomething(obj:someType){
//     console.log(`prop has the value '${obj.prop}'`)
// }
// dosomething({prop:"shijil"});
// interface stringArray{
//     [index:number]:string
// }
// const myarray :stringArray =[];
// const secondItem=myarray[1];
// interface squareConfig{
//      color?:string;
//      width?:number;
// }
// function createSquare(config:squareConfig):{color:string;area:number}{
//      return{
//         color:config.color || "red",
//         area:config.width ? config.width * config.width : 20
//      }
// }
// let mysquare=createSquare({color:"red"})
// console.log(mysquare);
// interface animal{
//     live():void;
// }
// interface Dog extends animal{
//     woof:void;
// }

// type example1=Dog extends animal ? number :string;
// type example2 = RegExp extends animal ? number :string;
class point{
    x:number;
    y:number;
    constructor(x:number,y:number = 10){
        this.x=x;
        this.y = y
    }
}
const newpoint= new point(10);
console.log(newpoint);


class pointtwo{
    x=10;
    y=20;
    scale(n:number):void{
          this.x *=n;
          this.y *=n
    }
}
class c{
    _length=0;
    get length(){
        return this._length;
    }
    set length(value){
        this._length= value
    }
}
export{}

