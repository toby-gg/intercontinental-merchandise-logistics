import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BoxIcon, GlobeIcon, TruckIcon } from "@/components/Icons";
import { services, site } from "@/lib/site";
export const metadata: Metadata={title:"Merchandise & Logistics Services",description:`Explore procurement, merchandise, haulage, distribution and business logistics services from ${site.shortName}.`,alternates:{canonical:"/services"}};
export default function ServicesPage(){return <><PageHero eyebrow="Our services" title="Commercial support from source to destination." text="Flexible services that can work independently or connect into one coordinated solution for your business."/><section className="section"><div className="container detailed-services">{services.map((s,i)=><article id={s.slug} key={s.slug}><div className="detail-number">{s.number}</div><div className="detail-icon">{i%3===0?<BoxIcon/>:i%3===1?<GlobeIcon/>:<TruckIcon/>}</div><div><h2>{s.title}</h2><p>{s.text}</p><ul><li>Clear scope and quotation</li><li>Responsive coordination</li><li>Business-focused delivery</li></ul><Link href="/contact#quote">Discuss this service <span>↗</span></Link></div></article>)}</div></section></>}
