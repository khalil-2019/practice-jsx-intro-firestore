import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        I'm always open for collaborations and interesting projects. Feel free
        to reach out to me through the following ways:
      </p>

      <h2>Email</h2>
      <p>
        <a href="mailto:johnsmith@example.com">johnsmith@example.com</a>
      </p>

      <h2>Social Media</h2>
      <p>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <br />
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>

      <h2>Contact Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
