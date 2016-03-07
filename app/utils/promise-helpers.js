import Ember from 'ember';
const { Promise } = Ember.RSVP;
const { ArrayProxy, ObjectProxy, PromiseProxyMixin } = Ember;

const PromiseArray = ArrayProxy.extend(PromiseProxyMixin);
const PromiseObject = ObjectProxy.extend(PromiseProxyMixin);

const promiseObject = (promise, label) => PromiseObject.create({
  promise: Promise.resolve(promise, label)
});

const promiseArray = (promise, label) => PromiseArray.create({
  promise: Promise.resolve(promise, label)
});

export {
  PromiseArray,
  PromiseObject,
  promiseObject,
  promiseArray
};
