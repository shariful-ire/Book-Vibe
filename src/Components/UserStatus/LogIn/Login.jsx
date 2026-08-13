import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../../context/AuthContext.jsx";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  // ==========================================
  // State
  // ==========================================

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  // ==========================================
  // Login Handler
  // ==========================================

  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    // ========================================
    // DEMO ACCOUNT
    // ========================================

    const demoEmail = "demo@bookvibe.com";

    const demoPassword = "123456";

    if (
      email === demoEmail &&
      password === demoPassword
    ) {

      const demoUser = {
        name: "Demo User",
        email: demoEmail,
      };

      login(demoUser);

      navigate("/");

      return;
    }

    // ========================================
    // Get registered users
    // ========================================

    const users =
      JSON.parse(
        localStorage.getItem("bookVibeUsers")
      ) || [];

    // ========================================
    // Find user
    // ========================================

    const existingUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    // ========================================
    // Invalid Login
    // ========================================

    if (!existingUser) {

      setError(
        "Invalid email or password."
      );

      return;
    }

    // ========================================
    // Successful Login
    // ========================================

    login({
      name: existingUser.name,
      email: existingUser.email,
    });

    navigate("/");
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-10">

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

        {/* =====================================
            TITLE
        ===================================== */}

        <div className="mb-8 text-center">

          <h1 className="font-serif text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your BookVibe account
          </p>

        </div>

        {/* =====================================
            DEMO ACCOUNT
        ===================================== */}

        <div className="mb-6 rounded-xl bg-green-50 p-4">

          <p className="font-semibold text-green-700">
            Demo Account
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Email: demo@bookvibe.com
          </p>

          <p className="text-sm text-gray-600">
            Password: 123456
          </p>

        </div>

        {/* =====================================
            ERROR
        ===================================== */}

        {error && (
          <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* =====================================
            FORM
        ===================================== */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
              required
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
              required
            />

          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-green-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-600
            "
          >
            Login
          </button>

        </form>

        {/* =====================================
            SIGN UP LINK
        ===================================== */}

        <p className="mt-6 text-center text-sm text-gray-500">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="font-semibold text-green-600 hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;