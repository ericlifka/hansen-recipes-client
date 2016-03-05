import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize() {
    console.log(arguments);
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var model = payload[ 0 ];

    return {
      data: [
        {
          type: primaryModelClass.modelName,
          id: model.id,
          attributes: this.attributesFromRawModel(model)
        }
      ]
    };
  },

  attributesFromRawModel(model) {
    var attributes = { };
    Object.keys(model).forEach(key => {
      if (key !== "id") {
        attributes[ key ] = model[ key ];
      }
    });
    return attributes;
  }
});
