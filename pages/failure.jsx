import Link from "next/link";

const failure = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        className="w-64 h-64 mb-8 object-cover"
        src="https://st4.depositphotos.com/5179615/37876/v/600/depositphotos_378766856-stock-illustration-failed-payment-declined-transaction-invalid.jpg"
        alt="Payment failed"
      />
      <h1 className="text-3xl font-bold text-red-500 mb-4">Payment Failed</h1>
      <p className="text-gray-600 mb-8">
        Unfortunately, your payment has failed. Please try again later or
        contact support for assistance.
      </p>
      <Link
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        href="/payment"
      >
        Try Again
      </Link>
    </div>
  );
};

export default failure;
