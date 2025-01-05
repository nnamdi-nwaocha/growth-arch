"use client";

import { useEffect } from "react";

function Footer() {
  // Keep-alive logic
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/keep-alive") // Ensure this endpoint is created
        .catch(console.error); // Log any errors
    }, 10 * 60 * 1000); // 10 minutes interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Growth
          Arc Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
