import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogoSvg } from "../icons";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const hardcodedEmail = "test@kisaansaathi.com";
    const hardcodedPassword = "password123";

    if (isLogin) {
      if (email === hardcodedEmail && password === hardcodedPassword) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Try again.");
      }
    } else {
      if (email && password.length >= 6) {
        navigate("/dashboard");
      } else {
        setError("Please enter a valid email and password (min 6 chars).");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-stone-50 via-green-50 to-amber-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <LogoSvg className="h-16 w-16 text-green-700" />
        </div>

        <h1 className="text-3xl font-bold text-center text-stone-900 mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-center text-stone-600 mb-6">
          to your Kisaan Saathi
        </p>

        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-stone-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-stone-500"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-semibold py-3.5 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* 🌿 Back to Home button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-green-700 font-semibold hover:text-green-800 hover:underline transition"
          >
            ← Back to Home
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-stone-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setEmail("");
              setPassword("");
            }}
            className="font-semibold text-green-700 hover:text-green-800 hover:underline"
          >
            {isLogin ? "Create one" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
