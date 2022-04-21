export default class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`My ${this.name} says hello!`);
  }
}