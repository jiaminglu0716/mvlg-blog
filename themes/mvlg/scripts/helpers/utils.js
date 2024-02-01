/* global hexo */

'use strict';

const crypto = require('crypto');
const { decodeURL } = require('hexo-util');
const compareVersions = require('../../scripts/utils/compare-versions');

hexo.extend.helper.register('md5', function(string) {
  return crypto.createHash('md5').update(string).digest('hex');
});

hexo.extend.helper.register('require_version', function(current, require) {
  const verRe = current.match(/[@/](\d{1,2})\.?(\d{0,2})\.?(\d{0,2})/);
  if (verRe && verRe.length >= 4) {
    const ver = `${verRe[1]}.${verRe[2] || 'x'}.${verRe[3] || 'x'}`;
    return compareVersions(ver, require) >= 0;
  }
  return false;
});

hexo.extend.helper.register('deduplicate', function(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
});

hexo.extend.helper.register('decode_url', decodeURL);

hexo.extend.helper.register('deepclone', function (target) {
  const map = new WeakMap();
  
  function isObject(target) {
      return (typeof target === 'object' && target ) || typeof target === 'function'
  }

  function clone(data) {
    if (!isObject(data)) {
      return data
    }
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data)
    }
    if (typeof data === 'function') {
      return new Function('return ' + data.toString())()
    }
    const exist = map.get(data)
    if (exist) {
      return exist
    }
    if (data instanceof Map) {
      const result = new Map()
      map.set(data, result)
      data.forEach((val, key) => {
        if (isObject(val)) {
          result.set(key, clone(val))
        } else {
          result.set(key, val)
        }
      })
      return result
    }
    if (data instanceof Set) {
      const result = new Set()
      map.set(data, result)
      data.forEach(val => {
        if (isObject(val)) {
          result.add(clone(val))
        } else {
          result.add(val)
        }
      })
      return result
    }
    const keys = Reflect.ownKeys(data)
    const allDesc = Object.getOwnPropertyDescriptors(data)
    const result = Object.create(Object.getPrototypeOf(data), allDesc)
    map.set(data, result)
    keys.forEach(key => {
      const val = data[key]
      if (isObject(val)) {
        result[key] = clone(val)
      } else {
        result[key] = val
      }
    })
    return result
  }

  return clone(target)
})
