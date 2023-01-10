import React from "react";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="h-full w-full px-8 bg-slate-50">
      <div className="w-full h-full flex justify-center items-center mx-auto max-w-7xl bg-white">
        <Link to="/carbon" className=" px-4 py-2 rounded-md bg-slate-400 hover:bg-slate-200">
          To Carbon3
        </Link>
      </div>
    </div>
  );
}
