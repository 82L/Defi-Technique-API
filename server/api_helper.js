

const request = require('request');
const cities = require('./cities')
let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '880c2c9a30mshf418b8cf219aa67p1a975cjsn2c01c5181736',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
        useQueryString: true
    }
};
module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    /**
     *
     * @param city
     * @returns {Promise<String>}
     */
    make_API_call : function(city =null){
        if(!city){
            city = cities.citiesArray[getRandomInt(cities.citiesArray.length)];
        }
        let url = 'https://open-weather13.p.rapidapi.com/city/' + city;
        return new Promise((resolve, reject) => {
            request(url, options, (err, res, body) => {
                if (err) reject(err)
                resolve(body)
            });
        })
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
// });
