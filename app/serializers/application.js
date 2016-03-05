import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize() {
    console.log(arguments);
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return {
      data: payload.map(raw => this.modelFromRaw(raw, primaryModelClass))
    };
  },

  modelFromRaw(raw, modelClass) {
    return {
      type: modelClass.modelName,
      id: raw.id,
      attributes: this.attributesFromRaw(raw)
    };
  },

  attributesFromRaw(raw) {
    var attributes = {};
    Object.keys(raw).forEach(key => {
      if (key !== "id") {
        attributes[ key ] = raw[ key ];
      }
    });
    return attributes;
  }
});
