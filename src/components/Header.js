import { Link } from "gatsby";
import React from "react";
const HeaderBase = () => {
  return (
    <header>
      <div className="container mx-auto px-2 py-2">
        <h1 className="text-2xl">
          <Link to="/">Facundo Leites</Link>
        </h1>
        <h2>Frontend developer, artist and designer</h2>
      </div>
    </header>
  );
};
export const Header = React.memo(HeaderBase);
