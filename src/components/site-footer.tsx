import Image from "next/image";
import Link from "next/link";
import logo from "@/images/jd-logo.png";
import { LINKS, PHONES, TAGLINE } from "@/lib/site";

const linkCls = "text-sand no-underline hover:underline hover:decoration-marigold";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 font-sans text-label font-semibold tracking-[0.14em] text-sand-soft uppercase">{title}</h2>
      <ul className="grid gap-2 text-small">{children}</ul>
    </div>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-sand-line bg-forest-deep px-(--gutter) pt-14 pb-10 text-sand-soft">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-8 min-[461px]:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="min-[461px]:col-span-2 lg:col-span-1">
          <Image src={logo} alt="Jungle Diaries" width={84} height={84} className="size-[84px]" />
          <p className="mt-4 max-w-[18ch] font-display text-[clamp(1.3rem,1.1rem+0.8vw,1.8rem)] leading-[1.15] text-sand">
            {TAGLINE}
          </p>
        </div>
        <Col title="Stays">
          <li><Link href="/amaltas-villa" className={linkCls}>Amaltas Villa</Link></li>
          <li><Link href="/destinn-dhela-retreat" className={linkCls}>Destinn Dhela Retreat</Link></li>
          <li><Ext href={LINKS.amaltasSite}>amaltasvilla.com</Ext></li>
          <li><Ext href={LINKS.destinnSite}>destindhellaretreat.com</Ext></li>
        </Col>
        <Col title="Explore">
          <li><Link href="/safaris" className={linkCls}>Safari zones</Link></li>
          <li><Link href="/journeys" className={linkCls}>Journeys</Link></li>
          <li><Link href="/about" className={linkCls}>About us</Link></li>
          <li><Link href="/plan-a-trip" className={linkCls}>Plan a trip</Link></li>
        </Col>
        <Col title="Reservations">
          {PHONES.map((p) => (
            <li key={p} className="tabular-nums">{p}</li>
          ))}
          <li><Ext href={LINKS.amaltasInstagram}>Amaltas on Instagram</Ext></li>
          <li><Ext href={LINKS.destinnInstagram}>Destinn on Instagram</Ext></li>
        </Col>
        <div className="col-span-full flex flex-wrap justify-between gap-x-5 gap-y-2 border-t border-sand-line pt-[22px] text-[0.85rem]">
          <span>© {new Date().getFullYear()} Jungle Diaries · Ramnagar, Jim Corbett, Uttarakhand</span>
          <span>Wildlife with responsibility</span>
        </div>
      </div>
    </footer>
  );
}
