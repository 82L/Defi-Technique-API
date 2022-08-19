

const request = require('request');
const cities = require('./cities')
const apiKey = '4c8468982915380a33a99ce272a87c59';
let options = {
    method: 'GET',
};
module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    /**
     *
     * @returns {Promise<String>}
     */
    make_API_call : function(){
        let city = cities.citiesArray[getRandomInt(cities.citiesArray.length)];
        let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat='+ city.lat +'&lon=' + city.lng + '&appid=' + apiKey;
        return new Promise((resolve, reject) =>{
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
