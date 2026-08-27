'use client'

import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'
import Experience from '../components/Experience'
import { brand } from '../data/brand'
import { products } from '../data/products'
import { socials } from '../data/socials'

const base = '/Delfioredell/assets/'
const select = (id: string) => window.dispatchEvent(new CustomEvent('delfiore:select', { detail: id }))

export default function Home() {
  return <main className="immersive-site">
    <Experience />
    <header className="topbar"><a className="label-logo" href="#hero"><small>{brand.company}</small><span>⌂</span><strong>{brand.name}</strong></a><nav><a href="#collection">Kolleksiya</a><a href="#story">Hekayə</a><a href="#recipes">Reseptlər</a><a href="#find">Harada tapmalı</a></nav><div className="top-actions"><span>AZ</span><button aria-label="Menyu"><Menu size={18}/></button></div></header>
    <section className="hero-copy-section" id="hero"><p className="overline">VIAZUL MMC / DEL FIORE</p><h1>Artizan pendir,<br/><em>ləzzətin 3D hekayəsi.</em></h1><p className="lede">Saf süd, yetişmiş dad və Del Fiore kolleksiyasını kəşf etməyə çağıran interaktiv təcrübə.</p><div className="hero-actions"><a className="gold-button" href="#collection">Kəşf etməyə başla <ArrowDown size={15}/></a><a className="quiet-link" href="#story">Hekayəyə bax <ArrowUpRight size={14}/></a></div><div className="hero-scroll"><span>SCROLL TO EXPLORE</span><i></i><b>01 / 08</b></div></section>
    <section className="statement"><p className="overline">DEL FIORE / SƏNƏTKAR KOLLEKSİYA</p><h2>Əşyaya baxmırsan.<br/><em>Onu hiss edirsən.</em></h2><p>Mouse-u hərəkət etdir. Scroll et. Məhsul dünyası sənin ritminlə açılsın.</p></section>
    <section className="collection-section" id="collection"><div className="section-top"><div><p className="overline">04 / COLLECTIONS</p><h2>İmza <em>kolleksiyamız</em></h2></div><p>Hər məhsul öz formasını, öz işığını və öz hekayəsini daşıyır.</p></div><div className="product-rail">{products.map((p, i) => <button className={`product-card ${i === 0 ? 'featured' : ''}`} key={p.id} onClick={() => select(p.id)}><div className="product-thumb"><img src={`${base}${p.image}`} alt=""/><span>0{i + 1}</span></div><strong>{p.name}</strong><small>{p.kind}</small><i><ArrowUpRight size={14}/></i></button>)}</div><p className="hint">Məhsulu seçərək detallarını aç <span>↗</span></p></section>
    <section className="story-section" id="story"><div className="story-visual"><img src={`${base}cheese-06.png`} alt="Əl işi pendir hazırlanması"/><div className="story-orbit">CRAFT / 06</div></div><div className="story-text"><p className="overline">06 / STORY — CRAFT</p><h2>Zamanla hazırlanır.<br/><em>Təbii süd. Əl işi ustalıq.</em></h2><p>Yaxşı pendir tələsmir. Biz də tələsmirik. Bu hissə südün səssizliyindən, ustanın əlindən və formanın zamanla dəyişməsindən ilhamlanır.</p><a className="quiet-link" href="#recipes">Hekayəni davam etdir <ArrowUpRight size={14}/></a></div></section>
    <section className="recipes-section" id="recipes"><div className="section-top"><div><p className="overline">07 / RECIPES</p><h2>Reseptlər — <em>ilham və ləzzət.</em></h2></div><p>Bir məhsul. Sonsuz süfrə anı.</p></div><div className="recipe-grid"><article><img src={`${base}cheese-11.png`} alt="Pendir süfrəsi"/><div><small>01 / PAYLAŞ</small><h3>Cheese board</h3></div></article><article><img src={`${base}cheese-21.png`} alt="Ricotta ilə resept"/><div><small>02 / HAZIRLA</small><h3>Ricotta ilə sadə an</h3></div></article></div></section>
    <section className="find-section" id="find"><p className="overline">08 / FIND DEL FIORE</p><h2>Del Fiore-u<br/><em>Bakıda tapın.</em></h2><div className="map-placeholder"><span>BAKI / 40.4093° N, 49.8671° E</span><strong>Satış nöqtələri<br/>təsdiqdən sonra əlavə ediləcək.</strong><i>+</i></div></section>
    <footer><a className="label-logo" href="#hero"><small>{brand.company}</small><span>⌂</span><strong>{brand.name}</strong></a><div className="footer-socials">{Object.values(socials).map(s => <a key={s.label} href={s.href}>{s.label}</a>)}</div><p>Real məhsul məlumatları təsdiq olunduqca bu interaktiv təcrübəyə əlavə ediləcək.</p><small>© 2026 Viazul MMC / Del Fiore</small></footer>
  </main>
}
