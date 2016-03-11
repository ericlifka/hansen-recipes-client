import Ember from 'ember';
import { request } from 'ic-ajax';
const { Service } = Ember;


export default Service.extend({

  init() {
    this._super(...arguments);

    window.__store = this;
    this.set('records', {});
  },

  findAllTags() {
    return request('/tags?populate=false')
      .then(data =>
        this.processRequestData('tags', data));
  },

  findAllIngredients() {
    return request('/ingredients?populate=false')
      .then(data =>
        this.processRequestData('ingredients', data));
  },

  queryRecipes(filters) {
    console.log(filters);
  },

  processRequestData(type, data) {
    if (!Array.isArray(data)) {
      data = [ data ];
    }

    return data.map(record => Ember.Object.create(record));
  }
});
