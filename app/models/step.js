import Ember from 'ember';

export default Ember.object.extend({
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
