"use strict";

var _ = require("lodash"); // LIBRARY

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = "up";
    this.requests = []; // PENDING REQUESTS : floors where elevator must stop.
    this.waitingList = []; // PEOPLE THAT CALLED THE ELEVATOR
    this.passengers = []; // PEOPLE IN THE ELEVATOR
  }

  update() {
    if (this.requests.length === 0 && this.waitingList.length === 0) {
      this.stop();
    } else if (this.requests.length > 0) {
      if (this.requests[0] < this.floor) {
        this.floorDown();
      } else if (this.requests[0] > this.floor) {
        this.floorUp();
      } else if (this.requests[0] === this.floor) {
        this._passengersLeave(this.passengers[0]);
      }
    } else if (this.waitingList.length > 0) {
      if (this.waitingList[0].originFloor > this.floor) {
        this.floorUp();
      } else if (this.waitingList[0].originFloor < this.floor) {
        this.floorDown();
      } else if (this.waitingList[0].originFloor === this.floor) {
        this._passengersEnter(this.waitingList[0]);
      }
    }
    this.log();
  }

  start() {
    this.startingElevator = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.startingElevator);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.direction = "up";
    } else {
      console.log("You have reached the top floor. Cannot go up.");
    }
    console.log(this.floor);
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
      this.direction = "down";
    } else {
      console.log("You have reached the bottom floor. Cannot go further down.");
    }
    console.log(this.floor);
  }

  call(person) {
    console.log("Elevator Called");
    this.waitingList.push(person);
    console.log(this.waitingList);
  }

  _passengersEnter(person) {
    if (this.waitingList.includes(person)) {
      this.passengers.push(person);
      this.waitingList.shift();
      this.requests.push(person.destinationFloor);
      console.log(person.name + " has entered the elevator.");
    }
  }

  _passengersLeave(person) {
    if (this.passengers.includes(person)) {
      this.passengers.shift();
      this.requests.shift();
      console.log(person.name + " has left the elevator.");
    }
  }
}

module.exports = Elevator;
