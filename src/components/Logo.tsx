import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="Intercontinental GML home">
      <span className="logo__mark" aria-hidden="true"><i /><i /><i /></span>
      <span><strong>INTERCONTINENTAL</strong><small>Merchandise & Logistics</small></span>
    </Link>
  );
}
