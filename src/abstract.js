"use strict";
class takephoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    getReeltime() {
        return 5;
    }
}
class instagram extends takephoto {
    constructor(cameramode, fulter, burst) {
        super(cameramode, fulter);
        this.cameramode = cameramode;
        this.fulter = fulter;
        this.burst = burst;
    }
    getsepia() {
        console.log("hhihi");
    }
}
const hites = new instagram("test", "Test", 234);
console.log(hites.getReeltime());
console.log("the page ite");
