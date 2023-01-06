import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <h1>CONTACT US</h1>
        <p>Connect with us by dropping any questions or comments</p>
      </div>

      <form action="/action_page.php" className="form">
        <div className="top-form">
          <div className="inner-form">
            <label for="name">Name</label>
            <input type="text" placeholder="Ex. John Doe" required />
          </div>
          <div className="inner-form">
            <label for="email">Email</label>
            <input type="text" placeholder="Example@gmail.com" required />
          </div>
          <div className="inner-form">
            <label for="tel">Phone</label>
            <input type="tel" placeholder="1234567890" required />
          </div>
        </div>
        <div className="middle-form">
          <div className="inner-form">
            <label for="subject">Subject</label>
            <input type="text" placeholder="Subject" required />
          </div>
        </div>
        <div className="bottom-form">
          <div className="inner-form">
            <label for="comments">Comments, Questions, or Concerns</label>
            <textarea placeholder="Type here" required></textarea>
          </div>
        </div>
        <input type="submit" value="Send!" className="btn" />
      </form>
    </div>
  );
};

export default Contact;
