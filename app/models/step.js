import Ember from 'ember';

export default Ember.Object.extend({
  attributes: {
    text: {
      type: 'literal'
    },

    ordinal: {
      type: 'literal'
    }
  }
});
