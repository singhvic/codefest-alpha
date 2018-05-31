const express = require('express')
const app = express()
var port = process.env.PORT || 8080;

app.post('/',(req,res)=>{
  //let response = "his number is 9537759063"; //Default response from the webhook to show it’s working
  /*let responseObj={ "fulfillmentText":"his number is 9537759063" ,
                   "fulfillmentMessages":[ { "text": { "text": [ "his number is 9537759063" ] } } ] ,
                   "source":"" } */
  let responseObj={
   "fulfillmentText":"his number is 9537759063",
   "fulfillmentMessages":[
      {
        "contact" : {
         "text":[
            "9537759063"
         ]
        }
      }
   ],
   "source":""
}
  return res.json(responseObj);});

app.listen(port);
