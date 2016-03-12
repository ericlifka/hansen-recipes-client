import Ember from 'ember';

export default Ember.Object.extend({
  resourceLocation: '/ingredients',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
