import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../../context/AuthContext.jsx";

const SignUp = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  // ==========================================
  // Form State
  // ==========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // ==========================================
  // Handle Input
  // ==========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ==========================================
  // Sign Up
  // ==========================================

  const handleSignUp = (e) => {

    e.preventDefault();

    setError("");

    // ========================================
    // Password Length
    // ========================================

    if (formData.password.length < 6) {

      setError(
        "Password must be at least 6 characters."
      );

      return;
    }

    // ========================================
    // Confirm Password
    // ========================================

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError(
        "Passwords do not match."
      );

      return;
    }

    // ========================================
    // Get Existing Users
    // ========================================

    const users =
      JSON.parse(
        localStorage.getItem("bookVibeUsers")
      ) || [];

    // ========================================
    // Check Email
    // ========================================

    const userExists = users.some(
      (user) =>
        user.email === formData.email
    );

    if (userExists) {

      setError(
        "An account with this email already exists."
      );

      return;
    }

    // ========================================
    // Create New User
    // ========================================

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    // ========================================
    // Save User
    // ========================================

    const updatedUsers = [
      ...users,
      newUser,
    ];

    localStorage.setItem(
      "bookVibeUsers",
      JSON.stringify(updatedUsers)
    );

    // ========================================
    // Automatically Login
    // ========================================

    login({
      name: newUser.name,
      email: newUser.email,
    });

    // ========================================
    // Go Home
    // ========================================

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
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join the BookVibe community
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
          onSubmit={handleSignUp}
          className="space-y-4"
        >

          {/* NAME */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
              required
            />

          </div>

          {/* EMAIL */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
              required
            />

          </div>

          {/* CONFIRM PASSWORD */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
              required
            />

          </div>

          {/* SIGN UP */}

          <button
            type="submit"
            className="
              mt-2
              w-full
              rounded-xl
              bg-cyan-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-cyan-600
            "
          >
            Sign Up
          </button>

        </form>

        {/* =====================================
            LOGIN LINK
        ===================================== */}

        <p className="mt-6 text-center text-sm text-gray-500">

          Already have an account?{" "}

          <Link
            to="/signin"
            className="font-semibold text-green-600 hover:underline"
          >
            Sign In
          </Link>

        </p>

      </div>

    </section>
  );
};

export default SignUp;