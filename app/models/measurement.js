import Ember from 'ember';

export default Ember.object.extend({
  resourceLocation: '/measurements',

  attributes: {
    quantity: {
      type: 'literal'
    },

    unit: {
      type: 'literal'
    }
  }
});
