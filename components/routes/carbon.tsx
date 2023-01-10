import { HeaderLayout } from "@components/common/headerLayout";
import React from "react";
import { Link } from "react-router-dom";
export function Carbon() {
  return (
    <HeaderLayout>
      <Link to="/" className=" px-4 py-2 rounded-md bg-slate-400 hover:bg-slate-200">
        Back
      </Link>
      <p className="p-6">This is Carbon3</p>
    </HeaderLayout>
  );
}
