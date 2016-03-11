import Ember from 'ember';

export default Ember.object.extend({
  attributes: {
    text: {
      type: 'literal'
    },

    ordinal: {
      type: 'literal'
    }
  }
});
