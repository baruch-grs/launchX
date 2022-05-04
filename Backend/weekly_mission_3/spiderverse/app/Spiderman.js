class Spiderman {
  constructor(name, age, studio, movies, actor) {
    this.name = name;
    this.age = age;
    this.studio = studio;
    this.movies = movies;
    this.actor = actor;
  }
  get getName() {
    return this.name;
  }
  get getActor() {
    return this.actor;
  }
  get getMovies() {
    return this.movies;
  }

  get getAge() {
    return this.age;
  }
  getInfo() {
    return `Hey, I'm ${this.actor} from Marvel studio`;
  }
}

module.exports = Spiderman;