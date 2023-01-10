import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="sticky flex items-center bg-green-200 top-0 px-8 py-6 border-b border-solid border-green-300">
      <Link to="/">
        <span className="mx-4 font-medium text-2xl">GTech</span>
      </Link>
      <div className="flex-1" />
    </div>
  );
}
