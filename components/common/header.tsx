import React from "react";
import {Navigation} from './navigation'
import Link from 'next/link'

export function Header() {
  return (
    <div className="sticky flex justify-between items-center top-0 px-32 py-3">
      <Link href="/">
        <img alt="" src="images/logo.svg"/>
      </Link>
      <Navigation />
    </div>
  );
}
