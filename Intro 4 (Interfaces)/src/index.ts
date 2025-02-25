type robot = {
  id: number;
  name: string;
};

interface robot2 {
    id: number;
    name: string;
    sayHello():string;
}

const bot: robot = {
  id: 1,
  name: "Megaman",
};

const bot2: robot2 = {
  id: 2,
  name: "Megaman 2",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  }
}

console.log(bot);
console.log(bot2);

class Pessoa implements robot2 {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
  sayHello(): string {
    return `Hello ${this.name}`;
  }
}

const p = new Pessoa(3, "Pessoa");
console.log(p);
console.log(p.sayHello());