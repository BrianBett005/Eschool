const CustomError = require("../errors/CustomError");
const Payment = require("../models/Payment");
const { initializePayment } = require("../utils/paystack");

const initializePayStack = async (req, res) => {
  let { email, full_name, amount } = req.body;
  let form = {};

  amount *= 100;
  form = JSON.stringify({
    email: email,
    amount: amount,
    currency: "NGN",
  });
  form.metadata = {
    full_name,
  };

  initializePayment(form, res);
};

const verify = async (req, res) => {
  
  verifyPayment(res);
};

module.exports = { initializePayStack, verify };
