import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  classNames: [ 'nav-bar' ],
  classNameBindings: [ 'session.isAuthenticated::hidden' ],

  session: inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
