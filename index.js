// const lod = require('loadash')
import _ from 'lodash'; // Importing lodash library

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // Using _.flattenDeep() function from lodash
console.log(newItems);