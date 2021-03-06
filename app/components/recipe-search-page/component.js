import Ember from 'ember';
import { promiseArray } from 'hansen-recipes-client/utils/promise-helpers';
const { Component, computed, inject, run } = Ember;

export default Component.extend({
  classNames: ['recipe-search-page'],

  store: inject.service(),
  inputDelay: 500,

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

      this.get(`filters.${type}`).pushObject(entity);
      this.refreshQuery();
    },
    removeFilter(type, entity) {
      this.get(`filters.${type}`).removeObject(entity);
      this.refreshQuery();
    }
  },

  nameFilterInput: computed({
    get: () => "",
    set(key, value) {
      this.set('filters.name', value);
      run.debounce(this, this.refreshQuery, this.inputDelay);
    }
  }),

  tagFilters: computed(function () {
    return promiseArray(
      this.get('store').findAll('tags'),
      'tag-search'
    );
  }),

  ingredientFilters: computed(function () {
    return promiseArray(
      this.get('store').findAll('ingredients'),
      'ingredient-search'
    );
  }),

  refreshQuery() {
    this.get('store').queryRecipes(this.get('filters'));
  }
});
