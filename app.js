const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const testData = {
  name: 'John Doe',
  age: '30',
  account_balance: '15.5'
}
const testAcct = {"items":[{"accountId":"01010OA00P207","accountName":"Jwalker","currency":"JPY","customerType":"PERSON","accountType":"CACC","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"},{"accountId":"01010OA00P208","accountName":"Jwalker","currency":"USD","customerType":"PERSON","accountType":"CACC","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"},{"accountId":"01010OA00P209","accountName":"Jwalker","currency":"USD","customerType":"PERSON","accountType":"SVGS","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"},{"accountId":"01010OA00P210","accountName":"Jwalker","currency":"GBP","customerType":"PERSON","accountType":"CACC","accountStatus":"ENABLED","accountOwnership":"SOLE","postingsRestriction":"NONE"}],
"links":{"self":{"href":"/accounts?customerId=FFDC02&limit=10&offset=0","templated":true}}}

const getBalance = {"accountId":"01010OA00P208","balances":[
  {"balanceType":"CLOSINGBOOKED","amount":{"amount":"907830.31","currency":"USD"},"dateTime":"2020-12-19T23:59:59.999+0530"},{"balanceType":"OPENINGBOOKED","amount":{"amount":"907830.31","currency":"USD"},"dateTime":"2020-12-20T00:00:00.000+0530"},{"balanceType":"INTERIMAVAILABLE","amount":{"amount":"907830.31","currency":"USD"},"dateTime":"2020-12-20T23:53:53.683+0530"},

  const acctDetail = {
      "accountId": "01010OA00P208",
      "accountName": "Jwalker",
      "currency": "USD",
      "customerType": "PERSON",
      "accountType": "CACC",
      "accountStatus": "ENABLED",
      "accountOwnership": "SOLE",
      "postingsRestriction": "NONE"
  }
  const transfer =  "forcePostIndicator": true,
    "postingEntries": [
        {
            "accountId": "01010OA00P208",
            "amount": {
                "currency": "USD",
                "amount": 3000
            },
            "baseEquivalent": {
                "currency": "USD",
                "amount": 300
            },
            "exchangeRate": 1,
            "blockReference": "",
            "creditDebitIndicator": "CREDIT",
            "narrative": "Fund Transfer",
            "postingType": "T00"
        },
        {
            "accountId": "01010OA00P209",
            "amount": {
                "currency": "USD",
                "amount": 3000
            },
            "baseEquivalent": {
                "currency": "USD",
                "amount": 3000
                },
            "exchangeRate": 1,
            "blockReference": "",
            "creditDebitIndicator": "DEBIT",
            "narrative": "Fund Transfer",
            "postingType": "C00"
        }
    ],
    "sourceBranchCode": "00000001",
    "sourceId": "FFDC",
    "transactionReference": "{{TransactionReferenceMain}}",
    "valueDate": "{{StartDate}}"
}
const transfRef = {
    "transactionReference": "cd4ef07f-dd20-4616-9e27-377111736a9b",
    "postingDate": "2020-12-21",
    "transactionId": "011768298d691Vzs"
}
  
 app.get("/", (req, res) => res.send(testAcct));

app.get("/listaccounts", (req,res) => res.send(testAcct));
app.get("/getaccountbalance", (req,res) => res.send(getBalance));
app.post("/transfer", (req,res) => res.send(transfer));
app.get("/getRef", (req,res) => res.send(transfRef));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
