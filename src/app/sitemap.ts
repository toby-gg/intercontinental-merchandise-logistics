import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const pages=["","/about","/services","/contact","/privacy","/terms"]; return pages.map((path)=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:path==="/services"?.9:.7})); }
