import Ember from 'ember';

export default Ember.Object.extend({
  resourceLocation: '/recipes',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
