import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const payments = [
    {
      id: "UPI",
      info: "UPI is a real-time payment system that allows users to link multiple bank accounts to a single mobile application, enabling seamless and instant money transfers. It eliminates the need for traditional banking details, making transactions more convenient and secure. With UPI, users can send and receive money, pay bills, and make purchases using their smartphones, revolutionizing the way we handle financial transactions in India.",
    },

    {
      id: "Net Banking",
      info: "Net banking, also known as online banking or internet banking, is a digital platform provided by banks that allows customers to access and manage their bank accounts and perform various financial transactions through the internet. It provides a convenient and secure way for users to check their account balances, transfer funds, pay bills, view transaction history, and access other banking services from the comfort of their homes or on the go using their computers or mobile devices.",
    },
    {
      id: "Card Payment",
      info: "Card payment refers to the process of making a financial transaction using a credit card, debit card, or prepaid card. It involves the use of a plastic card issued by a financial institution that is linked to the cardholder's bank account. Card payments can be made in person at physical stores using point-of-sale (POS) terminals or online through secure payment gateways. This method of payment offers convenience, security, and widespread acceptance, making it a popular choice for consumers worldwide.",
    },
    {
      id: "Cash on Delivery",
      info: "Cash on Delivery (COD) is a payment method where customers can make purchases online and choose to pay for their orders in cash at the time of delivery. This option allows customers to receive their products first and then pay the delivery person in cash, providing a sense of security and convenience for those who may not have access to digital payment methods or prefer to pay in person. COD is commonly used in e-commerce transactions, especially in regions where digital payment adoption is still growing.",
    },
    {
      id: "Wallets",
      info: "Wallets, also known as digital wallets or e-wallets, are electronic applications that allow users to store their payment information securely and make transactions digitally. These wallets can be linked to various payment methods such as credit cards, debit cards, or bank accounts, enabling users to make purchases online or in physical stores without the need for cash or physical cards. Digital wallets offer convenience, speed, and enhanced security features, making them a popular choice for modern consumers seeking a seamless payment experience.",
    },
    {
      id: "Buy Now Pay Later",
      info: "Buy Now Pay Later (BNPL) is a payment option that allows consumers to make purchases and defer payment to a later date, often without incurring interest or fees if paid within a specified period. This financing method provides flexibility for customers who may not have immediate funds available but want to acquire products or services. BNPL is commonly offered by retailers and financial institutions, enabling consumers to split their payments into installments or delay payment until a future date, making it an attractive choice for those seeking convenient and manageable payment solutions.",
    },
    {
      id: "Paytm",
      info: "Paytm is a popular digital payment platform that allows users to make seamless and secure transactions using their smartphones. It offers a wide range of services including peer-to-peer transfers, bill payments, recharges, and online shopping. Paytm has revolutionized the way people in India make payments, providing a convenient and user-friendly experience for all their financial needs.",
    },
  ];
  const [selectedPayment, setSelectedPayment] = useState("");
  return (
    <div className="flex flex-col gap-2 border-2 border-green-500 ">
      <h1 className="text-3xl font-bold mb-4">Payment Methods</h1>
      {payments.map((item) => {
        return (
          <label
            key={item.id}
            htmlFor={item.id}
            className="flex items-center gap-2 mb-2"
          >
            {item.id}
            <input
              className="form-radio h-5 w-5 text-blue-500"
              type="radio"
              id={item.id}
              name="payment"
              value={item.id}
              checked={selectedPayment === item.id}
              onChange={() => setSelectedPayment(item.id)}
            />
          </label>
        );
      })}
      <br />

      <p className="text-2xl font-bold mb-4">
        Selected Payment Method: {selectedPayment}
      </p>
      <p className="text-lg bg-gray-100 p-4">
        <span className="font-bold">Info</span>:{" "}
        {payments.find((p) => p.id === selectedPayment)?.info ||
          "Please select a payment method."}
      </p>
    </div>
  );
};
export default App;
