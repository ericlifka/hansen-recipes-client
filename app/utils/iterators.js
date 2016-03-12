/**
 * Iterate over objects following the same spec as Array.forEach
 * @param object - Any JS Object with key value pairs, only properties satisfying hasOwnProperty will be visited.
 * @param handler - function(value, key, object)
 */
export function iterateObject(object, handler) {
  Object.keys(object).forEach(key =>
    handler(object[ key ], key, object));
}
