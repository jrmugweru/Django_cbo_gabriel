// import React, { useState } from "react";
// import "./donation.css";
// import currencyCodes from "currency-codes";

// const Donation = () => {
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState("KES");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you for donating ${currency} ${amount}!`);
//   };

//   return (
//     <div className="donation-container">
//       <div className="donation-form">
//         <h2 className="donation-title">Make a Donation</h2>
//         <p className="donation-text">Your support helps us make a difference.</p>

//         <form onSubmit={handleSubmit}>
//           {/* Donation Amount */}
//           <div>
//             <label>Donation Amount:</label>
//             <input
//               type="number"
//               className="donation-input"
//               placeholder="Enter amount"
//               value={amount}
//               min="0"
//               onChange={(e) => setAmount(e.target.value)}
//               required
//             />
//           </div>

//           {/* Currency Selection */}
//           <div>
//             <label>Select Currency:</label>
//             <select
//               className="donation-select"
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <option value="KES">KES (Kenyan Shilling) </option>
//               <option value="USD">USD (US Dollar)</option>
//               <option value="EUR">EUR (Euro)</option>
//               <option value="GBP">GBP (British Pound)</option>
//             </select>
//           </div>

//           {/* Payment Methods */}
//           <h3 className="donation-text">Payment Methods:</h3>

//           <div className="payment-method mpesa">
//             <h4>M-Pesa</h4>
//             <p>Paybill: <strong>123456</strong></p>
//             <p>Account Number: <strong>Donation</strong></p>
//           </div>

//           <div className="payment-method bank">
//             <h4>Bank Transfer</h4>
//             <p>Bank Name: <strong>ABC Bank</strong></p>
//             <p>Account Number: <strong>987654321</strong></p>
//           </div>

//           {/* Donate Button */}
//           <button type="submit" className="donate-button">
//             Donate Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donation;

import React, { useState, useEffect } from "react";
import "./donation.css";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("KES");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch currency codes from API
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => setCurrencies(Object.keys(data.rates))) // Extract currency codes
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for donating ${currency} ${amount}!`);
  };

  return (
    <div className="donation-container">
      <div className="donation-form">
        <h2 className="donation-title">Make a Donation</h2>
        <p className="donation-text">Your support helps us make a difference.</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Donation Amount:</label>
            <input
              type="number"
              className="donation-input"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          {/* Dynamic Currency Selection */}
          <div>
            <label>Select Currency:</label>
            <select
              className="donation-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="donate-button">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;

