import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
  classNames: ['recipe-search-page'],

  store: inject.service(),

  actions: {
    openTagsFilterPanel() {
      this.set('tagsPanel', true);
      this.set('ingredientsPanel', false);
    },
    openIngredientsFilterPanel() {
      this.set('ingredientsPanel', true);
      this.set('tagsPanel', false);
    },
    closeFilterPanels() {
      this.set('tagsPanel', false);
      this.set('ingredientsPanel', false);
    }
  },

  availableTags: computed(function () {

    this.get('store').findAllTags();
  })
});
