// const request = require("request");
const https = require("https");

const initializePayment = (form, res) => {
  const MySecretKey = `Bearer ${process.env.MY_SECRET}`;
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: MySecretKey,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    form,
  };

  const req = https
    .request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        console.log(JSON.parse(data));
        const parsedData = JSON.parse(data);
        console.log(parsedData.data.authorization_url);
        res.redirect(parsedData.data.authorization_url);
      });
    })
    .on("error", (error) => {
      console.error(error);
      res.status(400).json(error);
    });
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
