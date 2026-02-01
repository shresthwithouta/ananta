"use client";

import { useState } from "react";

export default function AuthTestPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  async function register() {
    setMessage("Registering...");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    setMessage(JSON.stringify(data));
  }

  async function verifyOtp() {
    setMessage("Verifying OTP...");
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    setMessage(JSON.stringify(data));
  }

  async function login() {
    setMessage("Logging in...");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setMessage(JSON.stringify(data));
  }

  async function resendOtp() {
  setMessage("Resending OTP...");
  const res = await fetch("/api/auth/resend-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  setMessage(JSON.stringify(data));
}


  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Auth Test</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border"
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border"
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border"
      />

      <button onClick={register} className="w-full bg-black text-white p-2">
        Register (OTP)
      </button>

      <input
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-2 border"
      />

      <button onClick={verifyOtp} className="w-full bg-blue-600 text-white p-2">
        Verify OTP
      </button>

      <button onClick={resendOtp} className="w-full bg-orange-500 text-white p-2">
  Resend OTP
</button>


      <button onClick={login} className="w-full bg-green-600 text-white p-2">
        Login
      </button>

      <pre className="bg-gray-100 p-2 text-xs text-black overflow-auto">
        {message}
      </pre>
    </main>
  );
}
