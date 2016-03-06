import Ember from 'ember';
const { Service } = Ember;

export default Service.extend({
  findAll(type) {
    console.log('find for type', type);
  }
});
