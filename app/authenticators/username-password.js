import Base from 'ember-simple-auth/authenticators/base';
import { request } from 'ic-ajax';
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
      request({
        url: `/login?username=${username}&password=${password}`,
        type: `POST`
      }).then(resolve, reject);
    });
  },
  invalidate(data) {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }
});
