import Image from "next/image";
import React from "react";

const post = () => {
  return (
    <div className="p-10 bg-indigo-100">
      <div className="pt-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">
          Titulo
        </h2>
      </div>
      <div className="max-w-2xl mx-auto text-gray-700">
        <div className="flex items-center mb-6">
          <Image
            src="https://www.lavoz.com.ar/resizer/aJ1etz-TtbwZYI0AybuwdBq0k0s=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DPPQOEHRKJGBXH7YNRPX2I4U6U.jpg"
            width={1600}
            height={20}
            className=" mr-4"
            alt=""
          />
          <p className="text-lg font-bold text-indigo-500">Jhon Doe</p>
        </div>
        {/* display sanitized HTML */}
        <div>
          <Image
            src="https://www.lavoz.com.ar/resizer/aJ1etz-TtbwZYI0AybuwdBq0k0s=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DPPQOEHRKJGBXH7YNRPX2I4U6U.jpg"
            width={50}
            height={50}
            className="rounded-full mr-4"
            alt=""
          />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            animi aspernatur obcaecati consequatur quos dolor est vero velit cum
            esse, quibusdam eveniet sint unde voluptates sed pariatur itaque!
            Eveniet, ducimus! <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            animi aspernatur **obcaecati** consequatur quos dolor est vero velit
            cum esse, quibusdam eveniet sint unde voluptates sed pariatur
            itaque! Eveniet, ducimus!
            <br /> <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            animi aspernatur **obcaecati** consequatur quos dolor est vero velit
            cum esse, quibusdam eveniet sint unde voluptates sed pariatur
            itaque! Eveniet, ducimus!
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
