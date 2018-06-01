const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

var data = {
"malav":{"name":"Malav Desai","number":"9988998899", "email":"malav.desai@sterlite.com","desk":"C-79"},
"vicky":{"name":"Vicky Singh","number":"9988008899", "email":"vicky.singh@sterlite.com","desk":"C-80"},
"vijayrajsinh":{"name":"Vijayrajsinh Sarvaiya","number":"9067596979", "email":"vijayrajsinh.sarvaiya@sterlite.com","desk":"C-42"},
"khushbu":{"name":"Khushbu Chauhan","number":"9988008200", "email":"khushbu.chauhan@sterlite.com","desk":"C-65"},
"soniya":{"name":"Soniya Patel","number":"998800557", "email":"soniya.patel@sterlite.com","desk":"C-24"},
"Umang":{"name":"Umang Goswami","number":"8800889922", "email":"umang.goswami@sterlite.com","desk":"C-62"},
"jay":{"name":"Jay Makadiya","number":"9055655846", "email":"jay.makadiya@sterlite.com","desk":"C-29"},
"nirmal":{"name":"Nirmal Kachhia","number":"9988045579", "email":"nirmal.kachhia@sterlite.com","desk":"C-61"},
"chirag":{"name":"Chirag Prajapati","number":"9955565599", "email":"chirag.prajapati@sterlite.com","desk":"C-39"},
"palak":{"name":"Palak Patel","number":"8008899546", "email":"palak.patel@sterlite.com","desk":"C-57"},
"sanjay":{"name":"Sanjay Dhamelia","number":"9558008899", "email":"sanjay.dhamelia@sterlite.com","desk":"C-42"},
}

app.post('/',(req,res)=>{
  //let response = "his number is 9537759063"; //Default response from the webhook to show it’s working
  /*let responseObj={ "fulfillmentText":"his number is 9537759063" ,
                   "fulfillmentMessages":[ { "text": { "text": [ "his number is 9537759063" ] } } ] ,
                   "source":"" } */
  console.log("this is fucking dangerous");
  console.log(req.body);
  if (req.body.queryResult.parameters.index == 5) {
      console.log("updating");
      data[req.body.queryResult.parameters.name].number=req.body.queryResult.parameters.pnumber;
  }
  let responseObj={
   "fulfillmentText":"",
   "fulfillmentMessages":[
      {
        "text" : {
         "text":[
            data[req.body.queryResult.parameters.name].name,
           data[req.body.queryResult.parameters.name].number,
           data[req.body.queryResult.parameters.name].email,
           data[req.body.queryResult.parameters.name].desk
         ]
        }
      }
   ],
   "source":""
}
  return res.json(responseObj);});

app.listen(port);
