let locationData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' }
];

let LocationFetcher = {
  fetch: function(){
    return new Promise(function (resolve, reject) {

      console.log('returning promise')
      if (true) {
        resolve(locationData)
      } else {
        reject({ status: 'error: things have broken' })
      }

      /*
      setTimeout(function () {
      }, 500);
      */

    });
  }
};


module.exports = LocationFetcher;
