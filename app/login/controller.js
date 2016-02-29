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
      this.clearForm();
      this.toggleProperty('register');
      Ember.run.next(() => {
        $('input#username').focus();
      });
    }
  },

  processLogin() {
    const { username, password } = this.getProperties('username', 'password');
    this.get('session').authenticate('authenticator:username-password', username, password)
      .then(() => this.clearForm())
      .catch(reason => {
        this.set('errorMessage', reason.error || reason);
      });
  },

  processRegistration() {
    const { username, password, passwordRepeat } = this.getProperties('username', 'password', 'passwordRepeat');

    request({ url: '/register', type: 'POST', data: { username, password } })
      .then(result => {
        this.set('register', false);
        this.clearForm();
        this.set('username', result.user.username);
        this.set('errorMessage', 'Registration successful, please login to continue');
        Ember.run.next(() => {
          $('input#password').focus();
        });
      })
      .catch(error => {
        this.set('errorMessage', reason.error || reason);
      });
  },

  clearForm() {
    this.set('errorMessage', null);
    this.set('username', null);
    this.set('password', null);
    this.set('passwordRepeat', null);
  }
});
