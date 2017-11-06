"use strict";

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this._startInterval = null;
    this.setInterval = null;
  }

  start() {  //SEEMS OK
    this._startInterval = setInterval(()=> {
      this.update();
    }, 1000);
  }

  stop() { //SET TIMEOUT - SOMETHING MISSING
    set.timeOut();
  }

// MAYBE ALMOST DONE (?)
  update(floor) {
    console.log("Direction: " + this.requests + " | Floor: " + this.floor);
  }

  _passengersEnter() { }
  _passengersLeave() { }


  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor ++;
    }
  }



  floorDown() {
    if (this.floor > 0) {
      this.floor --;
    }
  }


  call() { }
  log() { }
}



module.exports = Elevator;
