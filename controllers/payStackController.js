const CustomError = require("../errors/CustomError");
const Payment = require("../models/Payment");
const { initializePayment } = require("../utils/paystack");

const initializePayStack = async (req, res) => {
  const { email, full_name } = req.body;
  const form = { email, full_name };
  form.metadata = {
    full_name: form.full_name,
  };
  form.amount *= 100;
  initializePayment(form, (error, body) => {
    if (error) {
      throw new CustomError.BadRequestError(error);
    } else {
      const response = JSON.parse(body);
      res.redirect(response.data.authorization_url);
    }
  });
};

const verify = async (req, res) => {
  const ref = req.query.reference;
  verifyPayment(ref, (error, body) => {
    if (error) {
      throw new CustomError.BadRequestError(error);
    }
    const response = JSON.parse(body);
    const { reference, amount, email, full_name } = response.data;
    Payment.create({
      name: full_name,
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
