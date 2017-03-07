var request = require("request")
var jsonfile = require('jsonfile')

var url = "http://communaute.amontourdeprogrammer.fr/latest.json"

var file = 'data.json' // fichier pour conserver notre tableau d'ID
var old_topics_id = jsonfile.readFileSync(file) // notre fichier d'ID transformé en tableau
var new_topics_id = [] // tableau vide à chaque séquence pour récuperer les nouveaux ID des topics

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {

        // on cree un tableau avec les topics depuis le JSON qu'on parse
        var array_topics = (body["topic_list"]["topics"])

        // on itere sur ce tableau et on insere l'ID dans le tableau new_topics s'il n'existe pas dans le tableau old_topics
        array_topics.forEach(function(topic) {
          if (!old_topics_id.includes(topic["id"])) {
            new_topics_id.push(topic["id"]);
          }
        }
        );
    }

    // on crée un tableau all_topics dans lequel on concatene les 2 tableaux d'ID
    var all_topics = new_topics_id.concat(old_topics_id);
    // on ecrit dans le fichier data.json le tableau de tous les sujets
    jsonfile.writeFile(file, all_topics, function (err) {
      console.error(err)
    })
})
