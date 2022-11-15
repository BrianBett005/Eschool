// const request = require("request");
const https = require("https");
const { Payment } = require("../models/Payment");
const MySecretKey = `Bearer ${process.env.MY_SECRET}`;
const initializePayment = (form, res) => {
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
        res.send(parsedData.data.authorization_url);
      });
    })
    .on("error", (error) => {
      console.error(error);
      res.status(400).json(error);
    });
  req.write(form);
  req.end();
};

const verifyPayment = (ref, res) => {
  const https = require("https");
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/verify/:reference",
    method: "GET",
    headers: {
      Authorization: `Bearer ${MySecretKey}`,
    },
  };

  https
    .request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const parsedData = Json.parse(data);
        const { reference, amount, email, full_name, channel } =
          parsedData?.data;
        Payment.create({
          name: full_name,
          paymentType: channel,
          email,
          amount,
          reference,
        }).then((payment) => {
          if (payment) {
            window.alert("Payment was successful");
          }
        });
      });
    })
    .on("error", (error) => {
      console.error(error);
      res.status(500).json(error);
    });
};

module.exports = { initializePayment, verifyPayment };
