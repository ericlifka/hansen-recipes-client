import Ember from'ember';
import Base from 'ember-simple-auth/authenticators/base';
import { request } from 'ic-ajax';

export default Base.extend({
  restore: () => request({ url: '/session' }),

  invalidate: () => request({ url: '/logout', type: 'POST' }),

  authenticate: (username, password) => request({
    url: '/login',
    type: 'POST',
    data: { username, password }
  })
});
