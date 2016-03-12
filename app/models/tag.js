import Ember from 'ember';

export default Ember.Object.create({
  resourceName: 'tag',

  attributes: {
    name: {
      type: 'literal'
    }
  }
});
