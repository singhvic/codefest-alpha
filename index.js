const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

var data = {
"malav":{"name":"Malav Desai","number":"9988998899", "email":"malav.desai@sterlite.com","desk":"C-79"},
"desai":{"name":"Malav Desai","number":"9988998899", "email":"malav.desai@sterlite.com","desk":"C-79"},
"vicky":{"name":"Vicky Singh","number":"9988008899", "email":"vicky.singh@sterlite.com","desk":"C-80"},
}

app.post('/',(req,res)=>{
  //let response = "his number is 9537759063"; //Default response from the webhook to show it’s working
  /*let responseObj={ "fulfillmentText":"his number is 9537759063" ,
                   "fulfillmentMessages":[ { "text": { "text": [ "his number is 9537759063" ] } } ] ,
                   "source":"" } */
  console.log("this is fucking dangerous");
  console.log(req.body);
  let responseObj={
   "fulfillmentText":"",
   "fulfillmentMessages":[
      {
        "text" : {
         "text":[
            data.malav.name,
           data.malav.number,
           data.malav.email,
           data.malav.desk
         ]
        }
      }
   ],
   "source":""
}
  return res.json(responseObj);});

app.listen(port);
