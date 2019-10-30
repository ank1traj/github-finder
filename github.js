class Github {
  constructor() {
    this.client_id = 'Iv1.440c89198b635364';
    this.client_secret = 'f95df9af79f10f0811440273c182dd38259e344f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}