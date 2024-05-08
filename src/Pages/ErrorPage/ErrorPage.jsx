import React from "react";
import "./ErrorPage.css";
import Button from "../../Components/Button/Button";

const ErrorPage = () => {
  return (
    <main className="error-page">
      <div className="error-page-container">
        <img
          src="https://res.cloudinary.com/dmdg0lwhz/image/upload/v1714651670/sammy-line-no-connection_gnw0gs.gif"
          alt="Error image"
          className="error-image"
        />

        <h1 className="error-code">404</h1>
        <h3 className="page-not-found">Oops, page not found</h3>
        <p className="error-message">
          It seems like you've stumbled upon a page that doesn't exist. Don't
          worry, it happens to the best of us. If you believe there's a
          technical issue, please contact our support team. We're here to help!
        </p>
        <Button
          text="Go back"
          font="1.25rem"
          hoverColor="#0f4c81"
          border="#0f4c81"
        />
      </div>
    </main>
  );
};

export default ErrorPage;
