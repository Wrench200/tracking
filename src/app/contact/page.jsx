"use client";

import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, email, address, message } =
      formData;
    const mailtoLink = `mailto:fastlaneglobalagency@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${firstName}%20${lastName}%0APhone%20Number:%20${phoneNumber}%0AEmail:%20${email}%0AAddress/State:%20${address}%0AMessage/Comment:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section>
      <Navbar />
      <Banner
        img={"/images/pexels-pixabay-269790.jpg"}
        content={"CONTACT US"}
        height={"40vh"}
        location={""}
        spanText={"Ready to ship? We'd love to hear from you!"}
      />
      <div className="container lg:w-[60rem] h-full">
        <div className="container mx-auto p-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label
              className="block text-base font-bold mb-2"
              htmlFor="firstName"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <div className="flex w-full">
              <div className="w-[50%]">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mr-2 shadow border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
                <label className="block text-base mb-2" htmlFor="firstName">
                  First Name
                </label>
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
                <label className="block text-base mb-2" htmlFor="lastName">
                  Last Name
                </label>
              </div>
            </div>
            <div>
              <label
                className="block text-base font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-base font-bold mb-2" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-base font-bold mb-2"
                htmlFor="address"
              >
                Address/State
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-base font-bold mb-2"
                htmlFor="message"
              >
                Message/Comment<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
