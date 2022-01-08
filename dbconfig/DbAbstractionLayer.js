var mongodb = require('mongodb');

var connected = false;
var db = null; 

mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(connection => {
    connected = true;
    db = connection.db('Market');
    console.log("DB Conection successful");
}).catch(error => {
    console.log("Error in connecting to DB");
});

async function queryDealsCollection() {
    if (connected) {

        let jsonResponse = {
            "mobile": [],
            "web": []
        };

        const dealsCollectionArray = await db.collection('Deals').find().toArray();
console.log(dealsCollectionArray);
        dealsCollectionArray.forEach(element => {
            console.log(jsonResponse);
            let         mobile = {}
                    mobile['imageName'] = element['imageName'];
                    mobile['title'] = element['title'];
                    mobile['rows'] = element['handsetRows'];
                    mobile['cols'] = element['handsetCols'];
            jsonResponse.mobile.push(mobile);

            let webElement = {};
            webElement['imageName'] = element['imageName'];
            webElement['title'] = element['title'];
            webElement['rows'] = element['webRows'];
            webElement['cols'] = element['webCols'];
            jsonResponse.web.push(webElement);
        });
console.log(jsonResponse);
        return jsonResponse;

    } else {
        return null;
    }
}

module.exports = { queryDealsCollection };