"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["/", "Home"], ["/about", "Company"], ["/services", "Services"], ["/contact", "Contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main navigation">
          {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "active" : ""}>{label}</Link>)}
          <Link href="/contact#quote" className="button button--small">Request a quote <span>↗</span></Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
