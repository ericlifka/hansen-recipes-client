import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  quantity: attr(),
  unit: attr(),
  ingredient: belongsTo('ingredient', { inverse: 'measurements' }),
  recipe: belongsTo('recipe', { inverse: 'measurements' })
});
