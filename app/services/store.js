import Ember from 'ember';
import { request } from 'ic-ajax';
const { Service } = Ember;


export default Service.extend({

  init() {
    this._super(...arguments);

    this.set('records', {});
  },

  findAllTags() {
    return  request('/tags')
      .then(data =>
        this.processRequestData('tags', data));
  },

  findAllIngredients() {
    return request('/ingredients')
      .then(data =>
        this.processRequestData('ingredients', data));
  },

  processRequestData(type, data) {
    if (!Array.isArray(data)) {
      data = [ data ];
    }

    return data.map(record => Ember.Object.create(record));
  }
});
