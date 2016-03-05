import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr(),
  measurements: hasMany('measurement', { inverse: 'recipe' }),
  steps: hasMany('step', { inverse: 'recipe' })
});
