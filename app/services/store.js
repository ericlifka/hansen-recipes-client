import Ember from 'ember';
import Ingredient from 'hansen-recipes-client/models/ingredient';
import Measurement from 'hansen-recipes-client/models/measurement';
import Recipe from 'hansen-recipes-client/models/recipe';
import Step from 'hansen-recipes-client/models/step';
import Tag from 'hansen-recipes-client/models/tag';
import { request } from 'ic-ajax';
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

  findAll(type) {
    let model = this.get('models').get(type);
    if (!model) throw `Unsupported model type '${type}'`;

    return request(model.get('resourceLocation'))
      .then(data => this.processRequestData(type, data));
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
