"use strict";
// class user{
//      public name:string
//      email:string
//      private city?:string ="kelakam"
//      constructor(email:string,name:string="st"){
//          this.name = name;
//          this.email =email;
//      }
//     show = ()=>{
//          return this.city
//     }
// }
// const newuser= new user("shijil","shijil@gamil.com");
// const newusersecon = new user("hiii#gamil.com")
// const hitesh= new user("hitesh@gmail.com","hitesh")
// console.log(newuser);
// console.log(newusersecon);
// console.log(hitesh);
// console.log(hitesh.show());
class user {
    constructor(email, name, uerid) {
        this.email = email;
        this.name = name;
        this.uerid = uerid;
        this.coursecount = 1;
        this.city = "kelakam";
    }
    //    show = ()=>{
    //         return this.city
    //    }
    //    get getappleemail():string{
    //       return `apple${this.email}`
    //    }
    //    private deleretoken(){
    //       console.log("token is deleted");
    //    }
    get coursecountfun() {
        return this.coursecount;
    }
    set coursecountfun(coursevalue) {
        if (coursevalue < 1) {
            throw new Error("course count should be  more than 1");
        }
        this.coursecount = coursevalue;
    }
}
class childuser extends user {
    constructor() {
        super(...arguments);
        this.isfamily = false;
    }
    changecoursecount() {
        this.coursecount = 4;
    }
}
const newuser = new user("shijilc2gmail.com", "shijil", 111);
const newusertwo = new childuser("shijilc2gmail.com", "shijil", 1122);
newuser.coursecountfun = 10;
console.log(newusertwo);
console.log("shijil cg");
