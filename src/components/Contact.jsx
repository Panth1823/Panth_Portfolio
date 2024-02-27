import React, { useState } from "react";
import { useSnackbar } from "notistack";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validateForm = (e) => {
    if (!form.name || !form.email || !form.message) {
      enqueueSnackbar("All fields are required!", { variant: "error" });
      e.preventDefault();
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      enqueueSnackbar("Email address is invalid!", { variant: "error" });
      e.preventDefault();
      return;
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 pt-32 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6"></p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/b9c13577-b220-4061-93c4-92854778546f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 "
            onSubmit={validateForm}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={form.name}
              onChange={handleForm}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={form.email}
              onChange={handleForm}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={form.message}
              onChange={handleForm}
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
