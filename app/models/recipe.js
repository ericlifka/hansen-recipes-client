import Ember from 'ember';

export default Ember.object.extend({
  resourceLocation: '/recipes',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
