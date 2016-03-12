import Ember from 'ember';

export default Ember.Object.create({
  resourceName: 'measurement',

  attributes: {
    quantity: {
      type: 'literal'
    },

    unit: {
      type: 'literal'
    }
  }
});
