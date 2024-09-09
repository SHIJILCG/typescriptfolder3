// // // const score:Array<number> =[];

// // // const names:Array<string> =[]

// // // function identitone(val: boolean | number): boolean | number {
// // //     return val;
// // // }
// // // function identittwo(val:any):any {
// // //     return val;
// // // }

// // // function  identitthree<Type>(val:Type):Type{
// // //     return val;
// // // }
// // // // identittwo(3)
// // // // identitthree("3")

// // // // function identitfour<T>(val:T):T{
// // // //      return val
// // // // }


// // // interface bootle{
// // //     brand:string
// // //     types:number
// // // }

// // // const myBootle = { brand: "shijil", types: 33 };
// // //  function identitfour<bootle>(item:bootle):bootle{
// // //       return item
// // // }

// // // identitfour(myBootle);

// // // function getsearchproducts<T>(product:T[]):T{
// // //     return product[1]
// // // }
// // // const getmoresearchproducts=<T,>(item:T[]):T=>{
   
// // //     const myindexm=4;
// // //     return item[myindexm]
// // // }
// // // interface database{
// // //     connection:string,
// // //     uername:string,
// // //     password:string,
// // // }

// // // function adnotherfunction<T,U extends database>(Valueone:T,  ValueTwo:U):object{
// // //       return{
// // //           Valueone,
// // //           ValueTwo
// // //       }
// // // }
// // // // adnotherfunction(3,{connection:"item",uername:"shijil",password:"werty"});

// // // interface quiz{
// // //     name:string
// // //     type:string
    
// // // }
// // // interface course{
// // //     name:string
// // //     author:string
// // //     subject:string
// // // }

// // // class sellable<T>{
// // //     public cart:T[]=[]
// // //     addtocart(products:T){
// // //         this.cart.push(products)
// // //     }
// // // }
// // function dectectype(val:number | string ){
// //      if(typeof val=== "string"){
// //           return val.toLocaleLowerCase()
// //      }
         
// //      return val + 2;
// // }


// // function providedid(id:string|null){
// //      if(!id){
// //         console.log("please provide the id");
// //         return
// //      }
// //      id.toLocaleLowerCase();
// // }

// // function printALl(strs:string | string[] | null){
// //     if(strs){
// //         if(typeof strs === "object"){
// //             for(const s of strs){
// //                 console.log(s);
// //             }
// //         }else if(typeof strs === "string"){
// //             console.log(strs)
// //         }
// //     }
// // }


// // interface user{
// //     name:string
// //     eamil:string

// // }
// // interface Admin{
// //     name:string
// //     eamil:string
// //     isAdmin:boolean
// // }
// // function isAdmin(accout:user| Admin){
// //     if("isAdmin" in accout){
// //         return accout.isAdmin
// //     }
// //     return accout.name;
// // }

// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//       console.log(x.toUTCString());                 
//     } else {
//       console.log(x.toUpperCase());
//     }
//   }

// type Fish={
//     swim:()=>void

// }
// type bird={
//     bird:()=>void
    
// }


// function idFish(pet:Fish|bird):pet is Fish{
//     return (pet as Fish).swim !== undefined
    
// }
// function food(pet:Fish | bird){
//      if(idFish(pet)){
//         pet
//         return "fish food"
//      }else{
//         pet 
//         return "bird food"
//      }
// }

// interface circle{
//     kind:"circle"
//     radius:number
// }
// interface square{
//     kind:"square"
//     side:number
// }
// interface Rectangle{
//     kind:"rectangle"
//     length:number
//     width:number
// }
// type Shape = circle|square|Rectangle
// function getTrueshape(shap:Shape){
//      if(shap.kind === "circle"){
//         return Math.PI * shap.radius ** 2
//      }
//     // return shap.side * shap.side
// }
// function getArea(shap:Shape){
//     switch(shap.kind){
//         case "circle":
//              return Math.PI * shap.radius ** 2
//         case "square":
//             return   shap.side * shap.side  
//         case "rectangle":
//              return shap.length * shap.width    
//         default:
//              const _defaultforshape:never = shap
//                return _defaultforshape      
//     }
// }

// const userdetails={
//     name:"Danel",
//     age:34
// };
// console.log(userdetails.name

// )
// function greet(person,data){
//     console.log(`Hello${person},today is ${data}`)
// }
// greet("banana",1234)

function greet(person:string,data:Date){
      console.log(`Hello ${person}, today is ${data.toDateString()}`)
}


console.log(greet("shijil",new Date()));
this 