export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="page-hero-grid" /><div className="container"><p className="eyebrow eyebrow--light"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}
