"use client";

import React, { useState } from "react";

const EmailCopy: React.FC = () => {
  const email = "yuwaltonwang@gmail.com";

  const copyToClipboard = () => {
    console.log("copying to clipboard", email);
    navigator.clipboard.writeText(email);
    // Optionally, add a visual feedback here, like a toast notification
  };

  return (
    <div className="mb-10 flex items-center justify-center">
      <div
        className="flex items-center rounded-md border border-gray-300 "
        style={{ width: 400 }}
      >
        <input
          type="email"
          value={email}
          readOnly
          disabled={true}
          className="flex-grow rounded-l-md  px-4 py-2 text-base"
        />
        <button
          onClick={copyToClipboard}
          className="rounded-r-md bg-primary px-4 py-2 text-white hover:bg-primary/80"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default EmailCopy;
