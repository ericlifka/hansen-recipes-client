import Ember from 'ember';
import { request } from 'ic-ajax';
const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service(),

  actions: {
    login(username, password) {
      return this.get('session').authenticate('authenticator:username-password', username, password)
    },

    register(username, password, signupKey) {
      return request({
        url: '/register',
        type: 'POST',
        data: { username, password, signupKey }
      });
    }
  }
});
