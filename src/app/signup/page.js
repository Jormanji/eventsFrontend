"use client"; 
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import Header from "../Header"; 
import { useUserContext } from "../userContext"; 
import axios from "axios"; 

const LoginPage = () => {
  const { login } = useUserContext(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const router = useRouter(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setMessage(`Welcome ${username}`);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-backgroundPurple">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Log In</h2>
          {message && <p className="text-green-600 mb-4">{message}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-900"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-900"
                required
              />
            </div>
            <button type="submit" className="w-full bg-primaryPurple text-white p-2 rounded hover:bg-secondaryPurple">Log In</button>
          </form>
          <p className="mt-4 text-gray-900 flex justify-center">
            Don’t have an account?{" "}
          </p>
          <Link href="/signup" className="text-primaryPurple flex justify-center">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
