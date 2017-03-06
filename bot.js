var request = require("request")

console.log('démarrage du bot');

var url = "http://communaute.amontourdeprogrammer.fr/latest.json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})

