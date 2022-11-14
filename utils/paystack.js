// const request = require("request");
const https = require("https");

const initializePayment = (form, mycallback) => {
  const MySecretKey = `Bearer ${process.env.MY_SECRET}`;
  const options = {
    url: "https://api.paystack.co/transaction/initialize",
    headers: {
      Authorization: MySecretKey,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    form,
  };
  const callback = (error, response, body) => {
    return mycallback(error, body);
  };
  const req = https.request(options, callback);
  req.write(form);
  req.end();
};

const verifyPayment = (ref, mycallback) => {
  const options = {
    url:
      "https://api.paystack.co/transaction/verify/" + encodeURIComponent(ref),
    headers: {
      authorization: MySecretKey,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  };
  const callback = (error, response, body) => {
    return mycallback(error, body);
  };
  request(options, callback);
};

module.exports = { initializePayment, verifyPayment };
