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
