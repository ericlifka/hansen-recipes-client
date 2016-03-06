import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { inject, Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  store: inject.service(),

  model() {
    return this.get('store').findAll('recipe');
  }
});
