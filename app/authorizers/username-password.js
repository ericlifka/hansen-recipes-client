import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    const username = data['username'];

    if (!username) {
      block('Authorization', `Bearer ${username}`);
    }
  }
});
