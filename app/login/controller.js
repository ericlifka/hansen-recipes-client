import Ember from 'ember';
const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service(),

  register: false,

  actions: {
    processForm() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:username-password', identification, password)
        .catch(reason => {
          this.set('errorMessage', reason.error || reason);
        });
    },
    toggleRegistration() {
      this.toggleProperty('register');
    }
  }
});
