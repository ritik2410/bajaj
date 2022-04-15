var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.post('/bfhl',function(req,res){
  let data=req.body.data;
  let newdata=data.split(",");
  let alphabets=[];
  let numbers=[];
  let issuccess=true;
  for(let i=0;i<newdata.length;i++){
    let currentdata=newdata[i];
    if(isnumber(currentdata)==true){
      console.log(currentdata);
      numbers.push(currentdata);
    }
    else if (isalphabets(currentdata) == true) {
      console.log(currentdata);
      alphabets.push(currentdata);
    }
    else{
      issuccess=false;
    }
  }
  if(issuccess==true){
    res.send(
      {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number":"ABCD123",
        "numbers": numbers,
        "alphabets":alphabets
      }
    )
  }
  else{
    res.send(
      {
        "is_success": false,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "numbers": numbers,
        "alphabets": alphabets
      }
    )
  }
    
})

function isnumber(data){
  console.log(data.length)
  for (let j = 0; j < data.length; j++) {
    if(data[j]>=0 && data[j]<=9){
      continue;
    }
    else{
      return false;
    }
  }
  return true;
}

function isalphabets(data) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] >= 'a' && data[j] <= 'z' || data[j] >= 'A' && data[j] <= 'Z') {
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}

module.exports = router;
