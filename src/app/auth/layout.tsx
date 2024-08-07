"use client";
import { FC, ReactNode, useEffect } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Cleanup function to revert the styles
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overscroll-none px-4 sm:px-4 md:px-4 lg:px-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
