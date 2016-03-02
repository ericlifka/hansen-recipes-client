import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  classNames: [ 'login-form' ],
  register: false,

  errorMessage:'test error',
  successMessage: 'test success',

  usernameError: false,
  passwordError: false,
  passwordRepeatError: false,
  signupKeyError: false,

  didInsertElement() {
    this._super(...arguments);

    Ember.run.next(() => this.$('input#username').focus());
  },

  actions: {
    processForm() {
      this.clearErrors();

      if (this.get('register')) {
        this.processRegistration();
      } else {
        this.processLogin();
      }
    },

    toggleRegistration() {
      this.clearForm();
      this.toggleProperty('register');
      Ember.run.next(() => this.$('input#username').focus());
    }
  },

  processLogin() {
    const username = this.get('username');
    const password = this.get('password');

    if (this.validateFields('username', 'password')) {
      return;
    }

    this.attrs.submitLogin(username, password)
      .then(() => this.clearForm())
      .catch(reason => {
        this.set('errorMessage', reason.error || reason);
      });
  },

  processRegistration() {
    const fields = [ 'username', 'password', 'passwordRepeat', 'signupKey' ];
    const { username, password, passwordRepeat, signupKey } = this.getProperties(...fields);

    if (this.validateFields(...fields)) {
      return;
    }

    if (password !== passwordRepeat) {
      this.set('passwordError', true);
      this.set('passwordRepeatError', true);
      return;
    }

    this.attrs.submitRegister(username, password, signupKey)
      .then(result => {
        this.set('register', false);
        this.clearForm();
        this.set('username', result.user.username);
        this.set('successMessage', 'Registration successful, please login to continue');
        Ember.run.next(() => this.$('input#password').focus());
      })
      .catch(result => {
        const code = result.jqXHR.status;

        if (code === 401) {
          this.set('signupKeyError', true);
        }
        if (code === 400) {
          this.set('usernameError', true);
        }

        this.set('errorMessage', result.jqXHR.responseJSON.error);
      });
  },

  clearForm() {
    this.clearErrors();
    this.set('username', null);
    this.set('password', null);
    this.set('passwordRepeat', null);
    this.set('signupKey', null);
  },

  clearErrors() {
    this.set('usernameError', false);
    this.set('passwordError', false);
    this.set('passwordRepeatError', false);
    this.set('signupKeyError', false);
    this.set('errorMessage', null);
    this.set('successMessage', null);
  },

  validateFields(...fields) {
    let hadError = false;

    fields.forEach(field => {
      if (!this.get(field)) {
        this.set(`${field}Error`, true);
        hadError = true;
      }
    });

    return hadError;
  }
});
