import Link from "next/link";
import { Logo } from "./Logo";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo light /><p>Moving goods. Connecting opportunities. Supporting business growth.</p><span>RC {site.registrationNumber}</span></div>
        <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Solutions</h3>{services.slice(0,4).map(s => <Link key={s.slug} href={`/services#${s.slug}`}>{s.title}</Link>)}</div>
        <div><h3>Get in touch</h3><a href={`tel:${site.phone}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.address}</p></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
    </footer>
  );
}
