import Ember from 'ember';
import { promiseArray } from 'hansen-recipes-client/utils/promise-helpers';
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
    },

    addFilter(type, entity) {
      console.log('add filter', type, entity);

      this.send('closeFilterPanels');
    }
  },

  availableTags: computed(function () {
    return promiseArray(
      this.get('store').findAllTags(),
      'tag-search'
    );
  })
});
