"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Quote request from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nCompany: ${data.get("company")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\n\nRequest:\n${data.get("message")}`);
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }
  return <form className="quote-form" onSubmit={submit} id="quote"><div className="form-row"><label>Full name<input name="name" required autoComplete="name" /></label><label>Company name<input name="company" autoComplete="organization" /></label></div><div className="form-row"><label>Phone number<input name="phone" required type="tel" autoComplete="tel" /></label><label>Service required<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Procurement & sourcing</option><option>General merchandise</option><option>Haulage & delivery</option><option>Warehousing & distribution</option><option>Import & export support</option><option>Business logistics</option></select></label></div><label>Tell us what you need<textarea name="message" required rows={6} placeholder="Goods, quantity, pickup and delivery locations, and timeline..." /></label><button className="button" type="submit">Prepare email request <span>↗</span></button>{sent && <p className="form-note" role="status">Your email app should open with the request prepared.</p>}</form>;
}
