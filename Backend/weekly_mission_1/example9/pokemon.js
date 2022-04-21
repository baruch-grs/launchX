class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello explorer, I'm ${this.name}`);
  }

  sayMessage(message) {
    console.log(`[${this.name}: ${message}]`);
  }

}
module.exports = Pokemon;