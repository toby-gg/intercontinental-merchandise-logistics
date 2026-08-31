import Link from "next/link";
import { ArrowIcon, BoxIcon, CheckIcon, GlobeIcon, TruckIcon } from "@/components/Icons";
import { services, site } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" /><div className="hero-orbit" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light"><span /> Trade • Supply • Logistics</p>
          <h1>We keep commerce <em>moving.</em></h1>
          <p className="hero-lead">Reliable merchandise sourcing and logistics solutions built around the way your business works.</p>
          <div className="hero-actions"><Link className="button" href="/contact#quote">Request a quote <ArrowIcon /></Link><Link className="text-link text-link--light" href="/services">Explore our services <span>↗</span></Link></div>
          <div className="hero-trust"><span><CheckIcon /> Registered Nigerian company</span><span><CheckIcon /> Responsive support</span><span><CheckIcon /> Flexible solutions</span></div>
        </div>
        <div className="hero-visual" aria-label="Our logistics capabilities">
          <div className="visual-card visual-card--main"><TruckIcon /><span>End-to-end logistics</span><strong>From source to destination</strong><i>→</i></div>
          <div className="visual-card visual-card--top"><GlobeIcon /><span>Connected supply</span></div>
          <div className="visual-card visual-card--bottom"><BoxIcon /><strong>Merchandise</strong><span>Sourced with care</span></div>
          <div className="route-line"><b /><b /><b /></div>
        </div>
      </div>
      <div className="container registration-bar"><span>Registered company</span><strong>RC {site.registrationNumber}</strong><i /><span>Operating across Nigeria</span><strong>Built for business</strong></div>
    </section>

    <section className="section intro">
      <div className="container split-heading"><div><p className="eyebrow"><span /> What we do</p><h2>Your operations deserve a dependable partner.</h2></div><p>We connect procurement, merchandise and logistics into one responsive service—helping businesses reduce friction and move with confidence.</p></div>
      <div className="container service-grid">{services.map((s, i) => <article className={`service-card ${i === 0 ? "service-card--featured" : ""}`} id={s.slug} key={s.slug}><span>{s.number}</span><div className="service-icon">{i % 3 === 0 ? <BoxIcon /> : i % 3 === 1 ? <GlobeIcon /> : <TruckIcon />}</div><h3>{s.title}</h3><p>{s.text}</p><Link href={`/services#${s.slug}`} aria-label={`Learn about ${s.title}`}>Learn more <ArrowIcon /></Link></article>)}</div>
    </section>

    <section className="section dark-section">
      <div className="container why-grid">
        <div><p className="eyebrow eyebrow--light"><span /> Why Intercontinental</p><h2>Clarity at every stage. Accountability at every handoff.</h2><p>Good logistics is more than moving goods. It is knowing what is happening, what comes next and who is responsible.</p><Link href="/about" className="text-link text-link--light">Get to know us <span>↗</span></Link></div>
        <div className="principles">{[
          ["01", "Responsive communication", "Clear updates and a reachable team throughout your engagement."],
          ["02", "Practical solutions", "Services shaped around real operational needs—not rigid packages."],
          ["03", "Trusted coordination", "Careful supplier, shipment and delivery management from end to end."],
          ["04", "Long-term partnership", "A business relationship designed to become more valuable over time."]
        ].map(x => <article key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section process-section"><div className="container"><div className="center-heading"><p className="eyebrow"><span /> How it works</p><h2>Simple, transparent and built around you.</h2></div><div className="process">{[["01","Tell us what you need","Share your goods, route, quantity, timeline or wider operational requirement."],["02","Receive a tailored plan","We assess the request and provide a clear scope, approach and quotation."],["03","We coordinate delivery","Our team manages the moving parts and keeps you informed through completion."]].map(x => <article key={x[0]}><strong>{x[0]}</strong><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></div></section>

    <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow eyebrow--light"><span /> Start a conversation</p><h2>Have goods to source<br/>or somewhere to deliver?</h2></div><div><p>Tell us what your business needs. We’ll respond with a practical next step.</p><Link className="button button--white" href="/contact#quote">Request a quote <ArrowIcon /></Link></div></div></section>
  </>;
}
