import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'button',
  classNames: [ 'selectable-tag' ],
  attributeBindings: [ 'role' ],
  role: 'button',

  click() {
    this.attrs.onSelect();
  }
});
