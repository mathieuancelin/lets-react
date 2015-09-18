const Promise = require('bluebird');
const React = require('react-native');
const _ = require('lodash');
const { NetInfo } = React

var cached = undefined;
let error = false;
let loaded = false;
let devMode = false;

exports.errors = function() {
  return error;
};

exports.loaded = function() {
  return loaded;
};

exports.nearMe = function(latitude, longitude) {
  if (devMode) {
    return Promise.resolve([
      {
          "type":"Site appui vélo",
          "capacity":2,
          "location":[
             0.340780983228572,
             46.58049051954279
          ],
          "objectId":44,
          "address":"Place du Maréchal Leclerc, 86000 Poitiers, France"
       },
       {
         "type":"Site appui vélo",
         "capacity":8,
         "location":[
            0.341183015924013,
            46.580392756372106
         ],
         "objectId":43,
         "address":"6B Rue Claveurier, 86000 Poitiers, France"
      },
    ]);
  }
  let defered = Promise.defer();
  NetInfo.isConnected.fetch().then(connected => {
    if (connected) {
      console.log('Fetching near me ...')
      fetch(`https://open-data-poitiers.herokuapp.com/bike-shelters/find?lat=${latitude.replace('.', ',')}&lon=${longitude.replace('.', ',')}`)
        .then(r => r.json())
        .then(r => {
          try {
            console.log('Near me successful', r);
            if (_.isArray(r)) {
              defered.resolve(r.filter(i => !_.isNull(i.address)));
            } else {
              defered.resolve([]);
            }
          } catch(e) {
            console.error('Bad resolve', e);
          }
        })
        .catch(e => {
          console.error('Near me failed', e);
          defered.resolve([]);
        });
    } else {
      console.log('Not connected ...');
      defered.resolve([]);
    }
  });
  return defered.promise;
};

exports.fetch = function() {
  if (devMode) {
    return Promise.resolve(exports.defaultShelters.filter(i => !_.isNull(i.address)));
  }
  if (!cached) {
    let all = fetch("https://open-data-poitiers.herokuapp.com/bike-shelters/all");
    let defered = Promise.defer();
    NetInfo.isConnected.fetch().then(connected => {
      if (connected) {
        console.log('Connected, fetching data');
        fetch("https://open-data-poitiers.herokuapp.com/bike-shelters/all")
          .then(r => r.json())
          .then(r => {
            loaded = true;
            console.log('Data fetched successfully');
            if (_.isArray(r)) {
              defered.resolve(r.filter(i => !_.isNull(i.address)));
            } else {
              defered.resolve(exports.defaultShelters);
            }
          })
          .catch(e => {
            console.error('Data fetch failed, using local data', e);
            error = true;
            defered.resolve(exports.defaultShelters);
          });
      } else {
        console.log('Not connected ...');
        defered.resolve(exports.defaultShelters);
      }
    });
    cached = defered.promise;
  }
  return cached;
};

exports.defaultPromise = function() {
  return Promise.resolve(exports.defaultShelters);
};

exports.defaultShelters = require('./staticData');
