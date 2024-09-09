abstract class takephoto{
    constructor(
        public cameramode:string,
        public filter:string,
    ){}

    abstract getsepia():void;
    getReeltime():number{
        return 5
    }
}


class instagram extends takephoto{

    constructor(
        public cameramode:string,
        public fulter:string,
        public  burst:number
    ){super(cameramode,fulter)}
    getsepia(): void {
        console.log("hhihi")
    }
}
const hites=new instagram("test","Test",234);
console.log(hites.getReeltime());
console.log("the page ite")