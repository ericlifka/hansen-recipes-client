import Ember from 'ember';
import Ingredient from 'hansen-recipes-client/models/ingredient';
import Measurement from 'hansen-recipes-client/models/measurement';
import Recipe from 'hansen-recipes-client/models/recipe';
import Step from 'hansen-recipes-client/models/step';
import Tag from 'hansen-recipes-client/models/tag';
import { iterateObject } from 'hansen-recipes-client/utils/iterators';
import { request } from 'ic-ajax';
const { Service } = Ember;

const __MODELS__ = {
  ingredients: Ingredient,
  measurements: Measurement,
  recipes: Recipe,
  steps: Step,
  tags: Tag
};

export default Service.extend({

  init() {
    this._super(...arguments);
    window.__store = this;

    this.set('records', {});
    this.set('models', __MODELS__);
    Object.keys(__MODELS__).forEach(name => this.set(`records.${name}`, {}));
  },

  findAll(type) {
    let modelDescriptor = this.get(`models.${type}`);
    if (!modelDescriptor) throw `Unsupported model type '${type}'`;

    return request(this.resourceURL(modelDescriptor))
      .then(data => this.processRequestData(modelDescriptor, data));
  },

  queryRecipes(filters) {
    console.log(filters);
  },

  processRequestData(modelDescriptor, data) {
    if (!Array.isArray(data)) {
      return this.processRequestData(modelDescriptor, [ data ])[ 0 ];
    }

    return data.map(record => {
      let model = Ember.Object.create();
      iterateObject(modelDescriptor.attributes, (attributeSpec, attributeName) => {
        if (attributeSpec.type === 'literal') {
          model.set(attributeName, record[ attributeName ]);
        }

        model.set('id', record.id);
      });
      return model;
    });
  },

  resourceURL(model) {
    return `/${model.get('resourceName')}s`; // lol fancy shit
  }
});
