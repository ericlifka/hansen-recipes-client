import Ember from 'ember';

export default Ember.Object.create({
  resourceName: 'step',

  attributes: {
    text: {
      type: 'literal'
    },

    ordinal: {
      type: 'literal'
    }
  }
});
