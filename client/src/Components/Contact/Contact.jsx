import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <h4>Shoot me an email at: <span>girou.joe@gmail.com</span></h4>
      <button
        onClick={() => {
          window.open("mailto:giro.joe@gmail.com");
        }}
      >
        Send a message
      </button>
    </div>
  );
};

export default Contact;
