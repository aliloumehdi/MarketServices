var express = require('express');
var router = express.Router();
var dbAbstractionLayer=require('../dbconfig/DbAbstractionLayer')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//         let resp =  {
//       "mobile": [
//         { imageName: 'offer1', title: '10% off on personal cares', cols: 2, rows: 1 },
//         { imageName: 'offer2', title: 'Flash sales in Footwears', cols: 2, rows: 1 },
//         { imageName: 'offer3', title: 'Extended warranty for Apple products', cols: 2, rows: 1 },
//         { imageName: 'offer4', title: '5% discount for grocery', cols: 2, rows: 1 }
//       ],
//       "web": [
//         { imageName: 'offer1', title: '10% off on personal cares', cols: 2, rows: 1 },
//         { imageName: 'offer2', title: 'Flash sales in Footwears', cols: 1, rows: 1 },
//         { imageName: 'offer3', title: 'Extended warranty for Apple products', cols: 1, rows: 2 },
//         { imageName: 'offer4', title: '5% discount for grocery', cols: 1, rows: 1 }
//       ]
//     };
//   res.send(resp);
// });
router.get('/', function (req, res, next) {

  // setTimeout(() => {

  //   let jsonResponse = {
  //     "handsetCards": [
  //       { imageName: 'offer1', title: '10% off on personal cares', cols: 2, rows: 1 },
  //       { imageName: 'offer2', title: 'Flash sales in Footwears', cols: 2, rows: 1 },
  //       { imageName: 'offer3', title: 'Extended warranty for Apple products', cols: 2, rows: 1 },
  //       { imageName: 'offer4', title: '5% discount for grocery', cols: 2, rows: 1 }
  //     ],
  //     "webCards": [
  //       { imageName: 'offer1', title: '10% off on personal cares', cols: 2, rows: 1 },
  //       { imageName: 'offer2', title: 'Flash sales in Footwears', cols: 1, rows: 1 },
  //       { imageName: 'offer3', title: 'Extended warranty for Apple products', cols: 1, rows: 2 },
  //       { imageName: 'offer4', title: '5% discount for grocery', cols: 1, rows: 1 }
  //     ]
  //   };
  
  //   res.json(jsonResponse);

  // }, 100);
  //change 100(in milliseconds, 1000ms == 1sec) for testing!
  
  dbAbstractionLayer.queryDealsCollection().then(response=>{
    console.log(response);
    res.json(response);
  }).catch(error=>{
    res.status(500).json({});
  });

});

module.exports = router;
