import Ember from 'ember';
import { request } from 'ic-ajax';
const { Service } = Ember;


export default Service.extend({
  findAllTags() {
    return request('/tags');
  }
});
