import Ember from 'ember';

export default Ember.Object.extend({
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
