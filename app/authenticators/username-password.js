import Base from 'ember-simple-auth/authenticators/base';
import Ember from'ember';
const { Promise } = Ember.RSVP;
const { $ } = Ember;

export default Base.extend({
  restore(data) {
    return new Promise(function (resolve, reject) {
      reject();
    });
  },
  authenticate(username, password) {
    return new Promise(function (resolve, reject) {
      $.post(`/login?username=${username}&password=${password}`)
        .done(resolve)
        .fail(reject);
    });
  },
  invalidate(data) {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }
});
