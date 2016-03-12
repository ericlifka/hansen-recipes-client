import Ember from 'ember';

export default Ember.Object.extend({
  resourceLocation: '/tags',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
