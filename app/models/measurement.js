import Ember from 'ember';

export default Ember.Object.extend({
  attributes: {
    quantity: {
      type: 'literal'
    },

    unit: {
      type: 'literal'
    }
  }
});
