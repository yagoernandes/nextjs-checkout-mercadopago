import Link from "next/link";

const pending = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        className="w-64 h-64 mb-8 object-cover"
        src="https://www.mintos.com/blog/wp-content/uploads/2020/03/pending-payments-blog-update.png"
        alt="Payment pending"
      />
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">
        Payment Pending
      </h1>
      <p className="text-gray-600 mb-8">
        Your payment is currently being processed. Please wait a few moments for
        the transaction to complete.
      </p>
      <Link
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        href="/payment"
      >
        Check Status
      </Link>
    </div>
  );
};

export default pending;
