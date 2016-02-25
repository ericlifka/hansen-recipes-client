import Ember from'ember';
import Base from 'ember-simple-auth/authenticators/base';
import { request } from 'ic-ajax';

export default Base.extend({
  restore() {
    return request({ url: '/session' });
  },
  authenticate(username, password) {
    return request({
      url: `/login?username=${username}&password=${password}`,
      type: `POST`
    });
  },
  invalidate() {
    return request({ url: '/logout', type: 'POST' });
  }
});
