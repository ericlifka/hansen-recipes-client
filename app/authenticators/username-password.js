import Ember from'ember';
import Base from 'ember-simple-auth/authenticators/base';
import { request } from 'ic-ajax';

export default Base.extend({
  restore(data) {
    return new Promise(function (resolve, reject) {
      reject();
    });
  },
  authenticate(username, password) {
    return request({
      url: `/login?username=${username}&password=${password}`,
      type: `POST`
    });
  },
  invalidate(data) {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }
});
