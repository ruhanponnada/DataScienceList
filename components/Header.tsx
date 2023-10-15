import React from 'react';
import Link from "next/link";

export const Header: React.FC = () => {
    return (
      
        <header className="bg-inherit py-2 navbar-center">
          <div className="flex justify-center">
            <div className="px-3">
              <Link href="/" className="underline underline-offset-2 btn btn-ghost normal-case text-xl">
                The List
              </Link>
            </div>
            <div className="px-3">
              <Link href="/resources" className="underline underline-offset-2 btn btn-ghost normal-case text-xl">
                Resources
              </Link>
            </div>
            <div className="px-3">
              <Link href="/about" className="underline underline-offset-2 btn btn-ghost normal-case text-xl">
                About
              </Link>
            </div>
          </div>
        </header>
    );
  };
  