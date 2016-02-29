import Ember from 'ember';
import { request } from 'ic-ajax';
const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service(),

  register: false,

  actions: {
    processForm() {
      if (this.get('register')) {
        this.processRegistration();
      } else {
        this.processLogin();
      }
    },
    toggleRegistration() {
      this.toggleProperty('register');
    }
  },

  processLogin() {
    const { username, password } = this.getProperties('username', 'password');
    this.get('session').authenticate('authenticator:username-password', username, password)
      .catch(reason => {
        this.set('errorMessage', reason.error || reason);
      });
  },

  processRegistration() {
    const { username, password, passwordRepeat } = this.getProperties('username', 'password', 'passwordRepeat');

    request({ url: '/register', type: 'POST', data: { username, password } })
      .then(result => {
        this.set('errorMessage', 'Registration successful, please login to continue');
        this.set('register', false);
        this.set('password', '');
        this.set('passwordRepeat', '');
      })
      .catch(error => {
        this.set('errorMessage', reason.error || reason);
      });
  }
});
