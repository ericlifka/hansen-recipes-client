import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  text: attr(),
  ordinal: attr(),
  recipe: belongsTo('recipe', { inverse: 'steps' })
});
