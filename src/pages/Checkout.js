import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/img7.jpg";
import Container from "../components/Container";
import StripeCheckout from "react-stripe-checkout";
const Checkout = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (token) => {
    // Here, you can make a request to your backend server to process the payment using the token
    // You'll need to handle the server-side implementation to charge the user's card with the desired amount
    // Once the payment is processed, you can update the paymentStatus state accordingly
    setPaymentStatus("success");
  };
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">TrendFusion</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Shweta Sonkar (shwetasonkar638@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">Watch</h5>
                    <p className="total-price">M / Gold</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 10000</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 10000</h5>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        {/* Existing code */}
        {/* ... */}
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/cart" className="text-dark">

            <button className="button">Return to Cart</button>
            </Link>
            {paymentStatus !== "success" ? (
              <StripeCheckout
                token={handlePayment}
                stripeKey="YOUR_STRIPE_PUBLISHABLE_KEY"
                amount={1000000} // The amount in cents or the desired currency's smallest unit
                name="TrendFusion" // Your website or company name
                description="Payment for Watch" // A description of the product or payment
                currency="USD" // The currency code (e.g., USD, EUR, etc.)
              >
                <button className="button">Continue to Payment</button>
              </StripeCheckout>
            ) : (
              <p>Payment Successful! Thank you for your purchase.</p>
            )}
          </div>
        </div>
        {/* Existing code */}
        {/* ... */}
      </Container>
    </>
  );
};

export default Checkout;