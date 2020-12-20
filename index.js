// const { default: Axios}  = require("axios");
const express = require('express');
const axios = require('axios');
const openIdClient = require("openid-client");
// const fetch = require('node-fetch');
const Payment = require ('./Payment');

openIdClient.Issuer.defaultHttpOptions={timeout:20000};

const app = express();
// global.Headers = fetch.Headers;

const discover = openIdClient.Issuer.discover(process.env.AUTHORIZATION_WELLKNOWN);

discover.then(async issuer => {
    client = new issuer.Client({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      })
      const token = await client.grant(
        {
            grant_type: 'client_credentials',
            scope: 'openid'
        });
        app.listen(process.env.PORT || 5000, () => {
          console.log('Express Server started on PORT: ', process.env.PORT );
        });
        // console.log (token);
    const url = "https://api.fusionfabric.cloud/referential/v1/countries";


    const instance = axios.create ({
       timeout : 4000,
       headers: {
          Authorization: 'Bearer ' + token.access_token ,   
       }
    });

    const response = await instance.get(url);
  // console.log(response.data); 
     response.data.countries.forEach(country => {  console.log(country.name) });

}).catch(err =>  console.log(err));


app.get('/paymentold', (req, res) => {
  // res.send('Hello WorldOk bo');
  discover.then(async issuer => {
    client = new issuer.Client({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      })
      const token = await client.grant(
        {
            grant_type: 'client_credentials',
            scope: 'openid'
        });
     

  
  const url = "https://api.fusionfabric.cloud/payment/payment-initiation/realtime-payments/v2/us-real-time-payment/tch-rtps/initiate";

  var body =          
      {
        
        "initiatingParty": "LOCALOFFICEUS1",
        "paymentInformationId": "1545922187435",
        "requestedExecutionDate": "2018-12-06",
        "instructedAmount": {
          "amount": 1,
          "currency": "USD"
        },
        "paymentIdentification": {
          "endToEndId": "1545922187435"
        },
        "debtor": {
          "name": "Daboy Name"
        },
        "debtorAgent": {
          "identification": "020010001"
        },
        "debtorAccountId": {
          "identification": "745521145"
        },
        "creditor": {
          "name": "joe Name"
        },
        "creditorAgent": {
          "identification": "131000000"
        },
        "creditorAccountId": {
          "identification": "1111111111"
        },
        "remittanceInformationUnstructured": "RmtInf1234"
      }

  const instance = axios.create ({
     timeout : 4000,
     headers: {
        Authorization: 'Bearer ' + token.access_token ,   
      data: JSON.stringify(body),

     }
  });
//  var headers = {
//                   Authorization: 'Bearer ' + token.access_token , }
     


    // axios({
    //     method: 'post',
    //     url: url,
    //     headers: headers,
    //     data: JSON.stringify(body)
    //   }).then(function (response) {
    //     console.log(response);
    //     res.send(ok);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  const response = await instance.get(url);
  console.log(response);

}).catch(err =>  console.log(err));
               
});

require ('./payRoutes')(app);

app.get('/', (req, res) => {
  res.send('Hello WorldOk');

               
});