import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
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
        this.$('input#username').focus();
      });
    }
  },

  processLogin() {
    const { username, password } = this.getProperties('username', 'password');

    this.attrs.submitLogin(username, password)
      .then(() => this.clearForm())
      .catch(reason => {
        this.set('errorMessage', reason.error || reason);
      });
  },

  processRegistration() {
    const { username, password, passwordRepeat } = this.getProperties('username', 'password', 'passwordRepeat');

    this.attrs.submitRegister(username, password)
      .then(result => {
        this.set('register', false);
        this.clearForm();
        this.set('username', result.user.username);
        this.set('errorMessage', 'Registration successful, please login to continue');
        Ember.run.next(() => {
          this.$('input#password').focus();
        });
      })
      .catch(reason => {
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
