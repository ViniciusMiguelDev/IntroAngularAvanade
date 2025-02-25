"use strict";
// Data modifiers (public, private, protected)
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} is attacking with ${this.strength} Strength points!`);
    }
}
const p1 = new Character("Abacatão", 8000, 100);
console.log(p1);
p1.attack();
//SubClass
class Magician extends Character {
    constructor(name, strength, skill, magicPower) {
        super(name, strength, skill);
        this.magicPower = magicPower;
    }
    attack() {
        console.log(`${this.name} is attacking with ${this.magicPower} magicPower points!`);
    }
}
const p2 = new Magician("Merlin", 50, 5000, 10000);
console.log(p2);
p2.attack();
