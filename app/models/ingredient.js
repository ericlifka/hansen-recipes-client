import Ember from 'ember';

export default Ember.Object.create({
  resourceName: 'ingredient',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
