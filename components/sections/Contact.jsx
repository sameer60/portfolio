/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/ui/Button";

const Contact = () => {
  const handleSendMessage = (notify) => {
    if (typeof notify === "function") notify();
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tj1qul",
        "template_zqz52c2",
        form.current,
        "X1KDNx9ThEYzeiqZx"
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          handleSendMessage(() =>
            toast.success("Message Sent !", {
              style: {
                padding: "10px 16px",
                borderRadius: "10px",
              },
            })
          );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="overflow-hidden bg-base-100 py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-slate-600"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-slate-800"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <div className="bg-neutral hypr-card rounded-3xl p-6 sm:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-neutral-content">
              Let's <span className="text-primary">talk</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-neutral-content/75">
              Interested? Don't hesitate to get in touch!
            </p>
          </div>
          <div className="mt-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-content mb-1">
                  Name
                </label>
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Elon Musk"
                    id="name"
                    name="name"
                    className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary focus:outline-none rounded-xl"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-content mb-1">
                  Email
                </label>
                <div>
                  <input
                    required
                    type="email"
                    placeholder="elonmusk@example.com"
                    id="email"
                    name="email"
                    className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary focus:outline-none rounded-xl"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-content mb-1">
                  Message
                </label>
                <div>
                  <textarea
                    required
                    id="message"
                    placeholder="Hi Sameer, I'm eager to discuss the project we're currently engaged in..."
                    name="message"
                    rows="4"
                    className="textarea textarea-bordered w-full bg-base-100 border-base-300 focus:border-primary focus:outline-none rounded-xl"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center md:justify-end sm:col-span-2">
                <Button
                  type="submit"
                  onClick={handleSendMessage}
                  variant="primary"
                  className="rounded-xl border border-primary/50 hover:bg-primary/90"
                >
                  <span>Send Message</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
