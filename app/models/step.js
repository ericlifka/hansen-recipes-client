import Ember from 'ember';

export default Ember.Object.extend({
  resourceLocation: '/steps',

  attributes: {
    text: {
      type: 'literal'
    },

    ordinal: {
      type: 'literal'
    }
  }
});
