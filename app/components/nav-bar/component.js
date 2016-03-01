import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  tagName: 'nav',
  classNames: [ 'nav-bar' ],

  session: inject.service()
});
