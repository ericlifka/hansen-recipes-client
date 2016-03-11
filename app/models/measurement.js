import Ember from 'ember';

export default Ember.object.extend({
  attributes: {
    quantity: {
      type: 'literal'
    },

    unit: {
      type: 'literal'
    }
  }
});
