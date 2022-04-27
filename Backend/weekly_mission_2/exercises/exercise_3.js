class SocialNetwork {
  constructor(user, bio, interests) {
    this.user = user;
    this.bio = bio;
    this.interests = interests;
  }

  get getUser() {
    return this.user;
  }

  get getBio() {
    return this.bio;
  }

  get getInterests() {
    return this.interests;
  }
}

class Twitter extends SocialNetwork {
  constructor(user, bio, interests, trendingTopic, hashtag) {
    super(user, bio, interests);
    this.trendingTopic = trendingTopic;
    this.hashtag = hashtag;
  }
}

class Facebook extends SocialNetwork {
  constructor(user, bio, interests, post) {
    super(user, bio, interests);
    this.post = post;
  }
}

class Uber {
  constructor(profile, travel) {
    this.profile = profile;
    this.travel = travel;
  }

  get getProfile() {
    return this.profile;
  }

  get getTravel() {
    return this.travel;
  }
}
const usrObj = {
  name: 'Baruch Guerra',
  nickname: 'ezpk',
  age: 26,
  profilePic: 'img.jpg'
};

const usrProfile = {
  name: 'Baruch Guerra',
  paymentMethods: ['TDD', 'TDC', 'PayPal'],
  profilePic: 'img.jpg',
}

const newUserTwitter = new Twitter(usrObj, 'I like music', ['music', 'programming', 'food'], 'Jhonny Depp', '#LaunchX');
console.table(newUserTwitter);

const newUserFacebook = new Facebook(usrObj, 'I like food', ['food', 'tacos', 'travel'], { title: 'Title', Description: 'description', content: 'img.jpg' });
console.log(newUserFacebook);

const newUserUber = new Uber(usrProfile, { startTravel: 'CDMX', endTravel: 'Querétaro' });
console.log(newUserUber);