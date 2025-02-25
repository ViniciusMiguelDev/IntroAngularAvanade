"use strict";
const bot = {
    id: 1,
    name: "Megaman",
};
const bot2 = {
    id: 2,
    name: "Megaman 2",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(3, "Pessoa");
console.log(p);
console.log(p.sayHello());
