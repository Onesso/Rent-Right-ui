// import { useState, useEffect } from "react";
// import axios from "axios";
// import DropIn from "braintree-web-drop-in-react";
// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import Receipt from "../ReceiptProcessing/Receipt";
// import "./payment.scss";

// export default function Payment({ rent }) {
//   const [clientToken, setClientToken] = useState("");
//   const [instance, setInstance] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [transactionDetails, setTransactionDetails] = React.useState(null);
//   const receiptRef = useRef();

//   // Function to handle printing
//   const handlePrintReceipt = useReactToPrint({
//     content: () => receiptRef.current,
//   });

//   console.log(rent);

//   // 1. Get client token
//   const getToken = async () => {
//     console.log("here");
//     const { data } = await axios.get("/api/post/braintree/token");
//     console.log(data);

//     setClientToken(data.clientToken);
//   };

//   useEffect(() => {
//     console.log("Fetching token...");
//     getToken();
//   }, []);

//   // 2. Handle payment submission
//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const { nonce } = await instance.requestPaymentMethod();
//       const { data } = await axios.post("/api/post/braintree/payment", {
//         nonce,
//         amount: rent, // Your amount
//       });
//       // trial here start

//       // Extract transaction details from the response
//       const transaction = response.data.transaction;
//       console.log("Transaction details:", transaction);

//       // Store transaction details in state for printing
//       setTransactionDetails(transaction);

//       // Show success message
//       alert("Payment successful!");

//       // Open print dialog (next step)
//       handlePrintReceipt(transaction);

//       //trial here end
//       console.log("Payment success!", data);
//     } catch (err) {
//       console.error("Payment error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="payment">
//       {clientToken && (
//         <DropIn
//           options={{
//             authorization: clientToken,
//             card: {
//               cardholderName: true, // Enable the cardholder name field
//               postalCode: true,
//             },
//             paypal: {
//               flow: "vault", // Optional PayPal integration
//             },
//           }}
//           onInstance={(instance) => setInstance(instance)}
//         />
//       )}
//       <button
//         onClick={handlePayment}
//         disabled={!instance || loading}
//         className="paybutton"
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//       {/* Hidden Receipt (only prints when needed) */}
//       <div style={{ display: "none" }}>
//         <Receipt ref={receiptRef} transaction={transactionDetails} />
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react"; // Import useEffect
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { useReactToPrint } from "react-to-print";
// import Receipt from "../ReceiptProcessing/Receipt";
import "./payment.scss";

export default function Payment({ rent }) {
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null); // Corrected state initialization
  const receiptRef = useRef();

  // Function to handle printing
  const handlePrintReceipt = useReactToPrint({
    content: () => receiptRef.current,
  });

  console.log(rent);

  // 1. Get client token
  const getToken = async () => {
    console.log("here");
    const { data } = await axios.get("/api/post/braintree/token");
    console.log(data);
    setClientToken(data.clientToken);
  };

  useEffect(() => {
    console.log("Fetching token...");
    getToken();
  }, []);

  // Effect to trigger printing when transactionDetails is updated
  useEffect(() => {
    if (transactionDetails) {
      handlePrintReceipt();
    }
  }, [transactionDetails, handlePrintReceipt]); // Dependencies for useEffect

  // 2. Handle payment submission
  const handlePayment = async () => {
    setLoading(true);
    try {
      const { nonce } = await instance.requestPaymentMethod();
      const response = await axios.post("/api/post/braintree/payment", {
        nonce,
        amount: rent, // Your amount
      });
      // Extract transaction details from the response
      const transaction = response.data.transaction;
      console.log("Transaction details:", transaction);

      // Store transaction details in state for printing
      setTransactionDetails(transaction);

      // Show success message
      alert("Payment successful!");

      // Printing will be handled by the useEffect above
      // handlePrintReceipt(transaction); // Removed this line
    } catch (err) {
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment">
      {clientToken && (
        <DropIn
          options={{
            authorization: clientToken,
            card: {
              cardholderName: true, // Enable the cardholder name field
              postalCode: true,
            },
          }}
          onInstance={(instance) => setInstance(instance)}
        />
      )}
      <button
        onClick={handlePayment}
        disabled={!instance || loading}
        className="paybutton"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {/* Hidden Receipt (only prints when needed) */}
      <div style={{ display: "none" }}>
        <Receipt ref={receiptRef} transaction={transactionDetails} />
      </div>
    </div>
  );
}
