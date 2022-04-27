const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const twitter = {
  user: {
    name: 'Baruch Guerra',
    nickname: 'ezpk',
    bio: 'I like music',
    age: 26,
    themes: ['music', 'programming', 'frontend', 'backend'],
  },
  trendingTopic: 'The killers',
  hashtag: '#LaunchX',
};

console.log(`Nombre del usuario: ${twitter.user.name}`);
console.log(`Nickname del usuario: ${twitter.user.nickname}`);

console.log(`Trend del momento: ${twitter.trendingTopic}`);

const facebook = {
  user: {
    name: 'Baruch Guerra',
    nickname: 'ezpk',
    age: 26,
    catchword: 'Ser y durar',
  },
  post: {
    title: 'Título',
    content: 'random-img.jpg',
    description: 'Description',
    author: 'LaunchX'
  },
  bio: {
    information: {
      civilStatus: 'single',
      interests: ['music', 'programming', 'movies'],
      birthday: '18 oct',
      location: 'Edomex',
    }
  }
}

console.log(`Nombre del usuario: ${facebook.user.name}`);
console.log(`Intereses del usuario: ${facebook.bio.information.interests}`);
console.log(`Estado civil del usuario: ${facebook.bio.information.civilStatus}`);


const uber = {
  user: {
    name: 'Baruch Guerra',
    profilePicture: 'img.jpg',
    paymentMethods: ['TDC', 'TDD', 'Paypal'],
  },
  travel: {
    startTravel: 'CDMX',
    finishTravel: 'Oaxaca'
  },
};

console.log(`Viaje del usuario: De ${uber.travel.startTravel} a ${uber.travel.finishTravel}`);
console.log(`Nombre del usuario: ${uber.user.name}`);
console.log(`Métodos de pago del usuario ${uber.user.paymentMethods}`);

