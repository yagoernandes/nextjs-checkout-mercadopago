// pages/index.js
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../utils/cookie";

const Index = () => {
  const router = useRouter();
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const paymentState = localStorage.getItem("paymentStatus");
    if (paymentState === "paid") {
      setCookie("paymentState", "paid", null); // Set cookie for 30 days
      router.push("/post");
    }
  }, []);

  if (paid) {
    return (
      <div className="p-8">
        <span className="underline"> this is thumbnail...</span> <br /> if paid.
        show content every time you enter, <br />
        else redirect to payment
        <Link href="/post">
          <div className="grid text-6xl text-white font-bold px-4 py-6 bg-green-700">
            click to redirect
          </div>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default Index;
