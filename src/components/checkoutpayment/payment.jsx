import { useState, useEffect } from "react";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import "./payment.scss";

export default function Payment({ rent }) {
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);

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

  // 2. Handle payment submission
  const handlePayment = async () => {
    setLoading(true);
    try {
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/post/braintree/payment", {
        nonce,
        amount: rent, // Your amount
      });
      console.log("Payment success!", data);
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
            // paypal: {
            //   flow: "vault", // Optional PayPal integration
            // },
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
    </div>
  );
}
