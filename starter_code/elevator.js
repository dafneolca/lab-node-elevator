class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this._startInterval = null;

  }

  start() {  //SEEMS OK
    this._startInterval = setInterval(()=> {
      this.update();
    }, 1000);
  }

  stop() { //SEEMS OK
    set.timeOut();
  }

// MAYBE ALMOST DONE (?)
  update(floor) {
    console.log("Direction: " + this.requests + " | Floor: " + this.floor);
  }

  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() { }
}


// Remember to use JavaScript functions such as setTimeout() to create the listener

module.exports = Elevator;
