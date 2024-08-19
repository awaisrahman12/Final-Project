import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
        Here you can connect with us
      </h1>
      <div className="mt-6 text-center">
        <p className="text-gray-700 mb-9">
          We value your feedback. Share your queries below, and our team will assist you promptly. Connect with us anytime.
        </p>
        <div className="flex justify-center space-x-4"></div>
      </div>
      <div className="bg-slate-200 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-slate-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-2">You can also connect with us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
