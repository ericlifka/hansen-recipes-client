import Ember from 'ember';
import { request } from 'ic-ajax';
import Ingredient from 'hansen-recipes-client/models/ingredient';
import Measurement from 'hansen-recipes-client/models/measurement';
import Recipe from 'hansen-recipes-client/models/recipe';
import Step from 'hansen-recipes-client/models/step';
import Tag from 'hansen-recipes-client/models/tag';
const { Service } = Ember;

export default Service.extend({

  init() {
    this._super(...arguments);
    window.__store = this;

    this.set('records', {
      ingredients: {},
      measurements: {},
      recipes: {},
      steps: {},
      tags: {}
    });

    this.set('models', {
      ingredients: Ingredient,
      measurements: Measurement,
      recipes: Recipe,
      steps: Step,
      tags: Tag
    });
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
