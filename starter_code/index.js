"use strict";

const Person = require("./person.js"); //ACQUIRES CONSTANT FROM PERSON.JS
const Elevator = require("./elevator.js"); //ACQUIRES CONSTANT FROM INDEX.JS

const elevator = new Elevator();

const dafne = new Person("Dafne", 2, 4);
const nat = new Person("Natalie", 0, 2);
const varun = new Person("Varun", 4, 2);

elevator.start();
elevator.call(dafne);
elevator.call(nat);
elevator.call(varun);
// NPM INIT - CREATES: -> PACKAGE.JSON
