import Ember from 'ember';

export default Ember.object.extend({
  resourceLocation: '/tags',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
