import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 h-auto absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? " Sign In" : " Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          {isSignInForm ? " Sign In" : " Sign Up"}
        </button>

        <p className="text-red-500 py-2 font-bold text-lg">{errorMessage}</p>

        <p className="py-4" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already exists. Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
