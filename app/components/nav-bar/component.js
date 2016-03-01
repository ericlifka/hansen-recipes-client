import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  classNames: [ 'nav-bar' ],

  session: inject.service()
});
