import Ember from 'ember';

export default Ember.object.extend({
  resourceLocation: '/ingredients',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
