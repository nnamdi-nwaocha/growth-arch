"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [token, setToken] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const tokenParam = params.get("token");
      const messageParam = params.get("message");

      if (tokenParam) {
        setToken(tokenParam);
        await confirmEmail(tokenParam);
      }

      if (messageParam) {
        setMessage(messageParam);
      }
    };

    fetchData();
  }, []);

  const confirmEmail = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/confirm-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (response.ok) {
        setConfirmationMessage(
          "Your email has been successfully confirmed. You can now log in."
        );
      } else {
        const data = await response.json();
        setError(data.message || "Failed to confirm email");
      }
    } catch (_err) {
      console.log(_err);
      setError("An error occurred while confirming your email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push("/profile");
      } else {
        const data = await response.json();
        setError(data.message || `An error occurred: ${response.statusText}`);
      }
    } catch (err) {
      setError(
        `An error occurred: ${err instanceof Error ? err.message : String(err)}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container bg-white mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-center font-sans text-gray-900">
            Log in to your account
          </h2>
          {(message || confirmationMessage) && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-sm text-green-700">
                {message || confirmationMessage}
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
            >
              {isLoading ? "Processing..." : "Log in"}
            </button>
          </form>
          <div className="text-sm text-center">
            <Link
              href="/signup"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
