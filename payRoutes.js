const axios = require('axios');
const openIdClient = require("openid-client");

module.exports = app => {
    app.get ('/finastra', async (req, res) => {
        var data = JSON.stringify({"initiatingParty":"LOCALOFFICEUS1","paymentInformationId":"MMSTADV52788075","requestedExecutionDate":"2020-12-10","instructedAmount":{"amount":10,"currency":"USD"},"paymentIdentification":{"endToEndId":"9527601938058"},"debtor":{"name":"CUST_1"},"debtorAgent":{"identification":"020010001"},"debtorAccountId":{"identification":"745745745"},"creditor":{"name":"NPP CR test ACC"},"creditorAgent":{"identification":"131000000"},"creditorAccountId":{"identification":"1111111111"},"remittanceInformationUnstructured":"RmtInf1234"});

        var config = {
          method: 'post',
          url: 'https://api.fusionfabric.cloud/payment/payment-initiation/realtime-payments/v2/us-real-time-payment/tch-rtps/initiate',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjNTRVUnJqTVV3Q2pVTFRVUV93QUVBQW9GemxoN1l0LU5xVXFRZGR5TGg0In0.eyJqdGkiOiI4NTc3YWUwOC00YWI4LTQ2ZmQtYjVhYy1jYjc0MGZhYzc5MzkiLCJleHAiOjE2MDcxNTU5OTUsIm5iZiI6MCwiaWF0IjoxNjA3MTUyMzk1LCJpc3MiOiJodHRwczovL2FwaS5mdXNpb25mYWJyaWMuY2xvdWQvbG9naW4vdjEiLCJhdWQiOlsicGF5bWVudC11dGlsLXVldHItdjEtZjgwOGU3MjUtZWNhOC00MzNjLTlmMGEtZDI1Yzk4YzJiZWZjIiwicGF5bWVudC11dGlsLWNsZWFyaW5nLXNjaGVtZXMtdjEtOTdhZDEzYzMtZDM0Mi00N2FmLWFmMGQtMGIzYjIzODg3MGQwIiwicGF5bWVudHMtb3BlcmF0aW9ucy10cmFuc2FjdGlvbi1zZWFyY2gtdjEtMGIxZDY4NjQtMTRhNy0xMWU5LWFiMTQtZDY2M2JkODczZDkzIiwicGF5bWVudHMtY2FsZW5kYXItbm9uLXdvcmtpbmctZGF5cy12MS1mMzljMDY4Yi0xNWM4LTQ3ODctODAxMi1hYjMzNzcyMmY5ZDMiLCJyZWZlcmVudGlhbC12MS0zNTNmMzkzMy1jMzA1LTQ4OTgtODhkNS1jZDZjZDE2N2Y3NDUiLCJwYXltZW50LWludGVybmF0aW9uYWwtdjEtNjM3M2IyMGMtZTVlZC00MzI4LTgyOTAtNDg4N2ZkZTE5MzBkIiwicmVhbC10aW1lLXBheW1lbnRzLWluaXRpYXRpb24tdjItOWZiNTg4ZGQtYjlkZC00YmU0LTlkMjktMWU3Zjg3OGIyMjMxIiwicGF5bWVudC1sb2FkLXBheW1lbnQtdjEtZjMxMDBkZGUtNjRkZS0xMWU5LWE5MjMtMTY4MWJlNjYzZDNlIiwicGF5bWVudHMtbWVtYmVyc2hpcC12YWxpZGF0aW9uLXYxLTA3MTZjNWZmLWI0MzItNDQ3Mi1hNWY2LWU2YTVlODBlMDFhYyJdLCJzdWIiOiI2NDZhYjVjYy0wNTA3LTRmOTctODY3Ni0xN2QzY2Y4ODY5N2MiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiI2NDZhYjVjYy0wNTA3LTRmOTctODY3Ni0xN2QzY2Y4ODY5N2MiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJjNzAzMDg5Zi0yNjRjLTRiYjUtODVlMC04OTQwMTc5ZTE0ZjIiLCJhY3IiOiIxIiwic2NvcGUiOiJvcGVuaWQgcGF5bWVudC11dGlsLXVldHItdjEtZjgwOGU3MjUtZWNhOC00MzNjLTlmMGEtZDI1Yzk4YzJiZWZjIHBheW1lbnQtdXRpbC1jbGVhcmluZy1zY2hlbWVzLXYxLTk3YWQxM2MzLWQzNDItNDdhZi1hZjBkLTBiM2IyMzg4NzBkMCBwYXltZW50cy1vcGVyYXRpb25zLXRyYW5zYWN0aW9uLXNlYXJjaC12MS0wYjFkNjg2NC0xNGE3LTExZTktYWIxNC1kNjYzYmQ4NzNkOTMgcGF5bWVudHMtY2FsZW5kYXItbm9uLXdvcmtpbmctZGF5cy12MS1mMzljMDY4Yi0xNWM4LTQ3ODctODAxMi1hYjMzNzcyMmY5ZDMgcmVmZXJlbnRpYWwtdjEtMzUzZjM5MzMtYzMwNS00ODk4LTg4ZDUtY2Q2Y2QxNjdmNzQ1IHBheW1lbnQtaW50ZXJuYXRpb25hbC12MS02MzczYjIwYy1lNWVkLTQzMjgtODI5MC00ODg3ZmRlMTkzMGQgcmVhbC10aW1lLXBheW1lbnRzLWluaXRpYXRpb24tdjItOWZiNTg4ZGQtYjlkZC00YmU0LTlkMjktMWU3Zjg3OGIyMjMxIHBheW1lbnQtbG9hZC1wYXltZW50LXYxLWYzMTAwZGRlLTY0ZGUtMTFlOS1hOTIzLTE2ODFiZTY2M2QzZSBwYXltZW50cy1tZW1iZXJzaGlwLXZhbGlkYXRpb24tdjEtMDcxNmM1ZmYtYjQzMi00NDcyLWE1ZjYtZTZhNWU4MGUwMWFjIiwiYXBwIjoiNjQ2YWI1Y2MtMDUwNy00Zjk3LTg2NzYtMTdkM2NmODg2OTdjIiwiaXB3aGl0ZWxpc3QiOiIiLCJpbnRJcFdoaXRlbGlzdCI6IiIsInRlbmFudCI6InNhbmRib3giLCJ1c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC02NDZhYjVjYy0wNTA3LTRmOTctODY3Ni0xN2QzY2Y4ODY5N2MifQ.Jzlw6-2N13IRsvWufrW-_N3LL5lrMOpA2MBxmHNYb058KLvPEIr2_nbszuxMpHxvtArXptEBC7qqP37IpoT9f5vySqQM_FLWaiXT998UxMLu0phbDLeW7uU4kDHIg8MFuz8H7xa6y_SvXCjEeXHspoUppY4o6YVrQITZ8SYI1t3GSFQjfapvu-o-EIbSObKVKrHyTdoNwk2T6amAKbxT6BixKjDmsFXq3BSyW-2K25vMGBZ-OGUUV2MZwjPhsc2d5AFpvCoULUvpfLURn4SdCWrbG1VF7WgN-sHHK-aH-wC2Voky5U5ZnOfXfs0rhI_uEgQj_umXp2zHhX3oQUI8xA', 
            'Cookie': 'LTMSESSIONID=!vw39gzfOjUIAFol1khtUTmMhrQG0usBIYQHxwCUPRn7Z9VnyNgy4sB1VuyTrSggTBWqRJ0oagiReaVE=; TS016a938c=017d2d345810e51a51478d07ee7405321112e26b0b13934e26c5da5c06cfe922feac778aff34e00af115a0ead7a8743aebe807d4db0ac9820a1a85a7cea5e25d552cd82fb4'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    app.get('/payment', async (req, res) => {

        openIdClient.Issuer.defaultHttpOptions={timeout:20000};
    
    
   
    
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

        var body =          
        {
          
          "requestedExecutionDate": "2020-12-16",
          "instructedAmount": {
            "amount": 1,
            "currency": "USD"
          },
          
          "debtor": {
            "name": "Michael Puzon"
          },
         
          "debtorAccountId": {
            "identification": "1000120"
          },
          "creditor": {
            "name": "joe Name"
          },
          "creditorAccountId": {
            "identification": "1111111111"
          }

        }

       const url = "https://api.fusionfabric.cloud/payment/payment-initiation/realtime-payments/v2/us-real-time-payment/tch-rtps/initiate";
        // const url1 = 'https://api.fusionfabric.cloud/payment/payment-initiation/v1/credit-transfer/international/initiate'; 
        const instance = axios.create ({
            timeout : 4000,
            headers: {
               Authorization: 'Bearer ' + token.access_token ,   
             data: JSON.stringify(body),
       
            }
         });

         const response = await instance.post(url);
         console.log(response);
         res.send('Hello WorldOk bo');
         return response;
        }).catch(err =>  console.log(err));
    });
};