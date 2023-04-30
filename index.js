function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  

  function myMap(collection, callback) {
    if (typeof collection === "object") {
      collection = Object.values(collection);
    }
    
    const newArray = [];
    for (let i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i]));
    }
    return newArray;
  }
  
  function myReduce(collection, callback, acc) {
    let values = collection;
    if (!Array.isArray(collection)) {
      values = Object.values(collection);
    }
    let whatever = acc ? 0 : 1;
    let result = acc || values[0];
    for (let i = whatever; i < values.length; i++) {
      result = callback(result, values[i], collection);
    }
    return result;
  }
  
  function myFind(collection, predicate) {
    const isArray = Array.isArray(collection);
  
    for (let key in collection) {
      const value = isArray ? collection[key] : collection[key];
      if (predicate(value, key, collection)) {

        return value;
      }
    }
  
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    for (let key in collection) {
      if (predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }
  
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n=1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    let keys = [];
    for(let key in object) {
      if(object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  function myValues(object) {
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }