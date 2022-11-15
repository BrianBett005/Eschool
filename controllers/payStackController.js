const CustomError = require("../errors/CustomError");
const Payment = require("../models/Payment");
const { initializePayment } = require("../utils/paystack");

const initializePayStack = async (req, res) => {
  let { email, full_name, amount } = req.body;
  let form = {};

  amount *= 100;
  form = JSON.stringify({
    email: "bettbrian316@gmail.com",
    amount: amount,
    currency: "NGN",
  });
  form.metadata = {
    full_name,
  };

  initializePayment(form, res);
};

const verify = async (req, res) => {
  const ref = req.query.reference;
  verifyPayment(ref, (error, body) => {
    if (error) {
      throw new CustomError.BadRequestError(error);
    }
    const response = JSON.parse(body);
    const { reference, amount, email, full_name, channel } = response.data;
    Payment.create({
      name: full_name,
      paymentType: channel,
      email,
      amount,
      reference,
    }).then((payment) => {
      if (payment) {
        res.redirect("/");
      }
    });
  });
};

module.exports = { initializePayStack, verify };
