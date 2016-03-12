import Ember from 'ember';

export default Ember.Object.create({
  resourceName: 'recipe',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
