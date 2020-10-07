import React from "react";
import { Link } from "gatsby";
import { useTheme } from "../hooks/useTheme";

const FooterItem = (props) => {
  return (
    <a
      className="hover:underline inline-block py-1 sm:py-0"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

const FooterNavItem = (props) => {
  return (
    <Link {...props} className="hover:underline inline-block py-1 sm:py-0" />
  );
};

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="py-2 border-t border-t-4 mt-4">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2">
          <div className="col-span-2 sm:col-auto">
            <p>Facundo Leites</p>
            <button
              className={`uppercase hover:underline ${
                theme === "dark" ? "line-through" : ""
              }`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              night mode
            </button>
          </div>
          <div className="column is-3">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <FooterNavItem to="/" className="navbar-item">
                    Home
                  </FooterNavItem>
                </li>
                <li>
                  <FooterNavItem className="navbar-item" to="/about">
                    About
                  </FooterNavItem>
                </li>
                <li>
                  <FooterNavItem className="navbar-item" to="/products">
                    Products
                  </FooterNavItem>
                </li>
                <li>
                  <FooterNavItem className="navbar-item" to="/contact/examples">
                    Form Examples
                  </FooterNavItem>
                </li>
                <li>
                  <FooterItem href="/admin/">Admin</FooterItem>
                </li>
              </ul>
            </section>
          </div>
          <div className="column is-3">
            <section>
              <ul className="menu-list">
                <li>
                  <FooterItem
                    title="facebook"
                    href="https://facebook.com/leitesfacundo"
                  >
                    facebook
                  </FooterItem>
                </li>
                <li>
                  <FooterItem
                    title="twitter"
                    href="https://twitter.com/facundoleites"
                  >
                    twitter
                  </FooterItem>
                </li>
                <li>
                  <FooterItem
                    title="instagram"
                    href="https://instagram.com/leitesfacundo"
                  >
                    instagram
                  </FooterItem>
                </li>
                <li>
                  <FooterItem
                    title="behance"
                    href="https://behance.net/facundoleites"
                  >
                    behance
                  </FooterItem>
                </li>
                <li>
                  <FooterItem
                    title="github"
                    href="https://github.com/facundoleites"
                  >
                    github
                  </FooterItem>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
