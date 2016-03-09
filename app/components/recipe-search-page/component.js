import Ember from 'ember';
import { promiseArray } from 'hansen-recipes-client/utils/promise-helpers';
const { Component, computed, inject } = Ember;

export default Component.extend({
  classNames: ['recipe-search-page'],

  store: inject.service(),

  init() {
    this._super(...arguments);

    this.set('filters', {
      name: '',
      tags: [],
      ingredients: []
    });
  },

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
      this.send('closeFilterPanels');

      this.get(`filters.${type}`).push(entity);
      this.refreshQuery();
    }
  },

  tagFilters: computed(function () {
    return promiseArray(
      this.get('store').findAllTags(),
      'tag-search'
    );
  }),

  ingredientFilters: computed(function () {
    return promiseArray(
      this.get('store').findAllIngredients(),
      'ingredient-search'
    );
  }),

  refreshQuery() {
    this.get('store').queryRecipes(this.get('filters'));
  }
});
