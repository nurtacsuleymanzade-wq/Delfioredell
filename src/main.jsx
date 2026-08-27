import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react'
import './styles.css'

const A = `${import.meta.env.BASE_URL}assets/`
const products = [
  { image: 'cheese-14.png', name: 'Qara istiotlu', detail: 'Yumşaq, aromatik və cəsarətli', type: 'Yumşaq pendir', size: '180 q' },
  { image: 'cheese-16.png', name: 'Dağ çiçəyi', detail: 'Təmiz südün incə dadı', type: 'Yarım sərt pendir', size: '220 q' },
  { image: 'cheese-18.png', name: 'Köhnə bağ', detail: 'Dərin və uzunmüddətli dad', type: 'Sərt pendir', size: '200 q' },
  { image: 'cheese-20.png', name: 'Yaşıl otlar', detail: 'Təzə, canlı, zərif', type: 'Yumşaq pendir', size: '180 q' },
]
const locations = [
  { image: 'cheese-10.png', name: 'Bazarstore', address: 'Nizami küçəsi 42, Bakı' },
  { image: 'cheese-21.png', name: 'Neptun Market', address: 'İstiqlaliyyət küçəsi 15, Bakı' },
  { image: 'cheese-23.png', name: 'The Organic Shop', address: 'Port Baku Walk, Bakı' },
]

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return <div className="site-shell">
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Del Fiore ana səhifə"><span>DEL</span><i>✳</i><span>FIORE</span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Əsas menyu">
        <a href="#collection" onClick={() => setMenuOpen(false)}>Kolleksiya</a>
        <a href="#story" onClick={() => setMenuOpen(false)}>Hekayəmiz</a>
        <a href="#find" onClick={() => setMenuOpen(false)}>Harada tapmalı</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Əlaqə</a>
      </nav>
      <div className="nav-actions"><button className="lang">AZ <span>⌄</span></button><button className="bag" aria-label="Səbət"><ShoppingBag size={18}/><em>0</em></button><button className="menu-btn" aria-label="Menyunu aç" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main id="top">
      <section className="hero">
        <img className="hero-img" src={A+'cheese-01.png'} alt="Del Fiore pendiri və təbiət" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">BAKIDA HAZIRLANAN SƏNƏTKAR PENDİRLƏRİ</p>
          <h1>Dadın<br/><i>zamanı var.</i></h1>
          <p className="hero-copy">Təbiətin ritmindən ilham alırıq. Hər Del Fiore pendiri səbr, diqqət və təmiz inqrediyentlərlə hazırlanır.</p>
          <a className="button light" href="#collection">Kolleksiyanı kəşf et <ArrowUpRight size={16}/></a>
        </div>
        <a className="scroll-cue" href="#values"><span>↓</span> AŞAĞI KEÇ</a>
        <div className="hero-mark">DF<br/><small>EST. 2016</small></div>
      </section>

      <section className="values" id="values"><div className="value"><b>01</b><strong>Təmiz inqrediyentlər</strong><span>Yerli süd. Sadə resept.</span></div><div className="value"><b>02</b><strong>Əllə hazırlanır</strong><span>Hər parçada sənət var.</span></div><div className="value"><b>03</b><strong>Zamanla yetişir</strong><span>Tələsmirik. Gözləyirik.</span></div><div className="value"><b>04</b><strong>Sevgi ilə paylaşılır</strong><span>Süfrənizin ən gözəl anı.</span></div></section>

      <section className="collection section-pad" id="collection"><div className="section-heading"><div><p className="eyebrow dark">DEL FIORE SEÇİMİ</p><h2>İmza<br/><i>kolleksiyamız</i></h2></div><p className="heading-note">Hər birinin öz xarakteri,<br/>öz hekayəsi var.</p></div><div className="product-grid">{products.map((p,i)=><article className="product" key={p.name}><div className="product-image"><img src={A+p.image} alt={p.name}/><span className="product-no">0{i+1}</span></div><div className="product-meta"><div><h3>{p.name}</h3><p>{p.detail}</p></div><span className="arrow"><ArrowUpRight size={17}/></span></div><div className="product-spec"><span>{p.type}</span><span>{p.size}</span></div></article>)}</div><div className="rail-line"><span>01</span><div><i></i></div><span>04</span></div></section>

      <section className="story" id="story"><div className="story-copy"><p className="eyebrow">BİZİM HEKAYƏMİZ</p><h2>Zamanla<br/><i>hazırlanır.</i></h2><p>Yaxşı pendir üçün sirr sadədir: yaxşı süd, təmiz hava və səbr. Bizim südçülərimiz səhər tezdən başlayır. Biz isə onun ən yaxşı halını tapana qədər gözləyirik.</p><a className="text-link" href="#contact">Hekayəmizlə tanış ol <ArrowUpRight size={15}/></a></div><div className="story-photos"><img className="tall" src={A+'cheese-06.png'} alt="Əl işi pendir istehsalı"/><img className="small" src={A+'cheese-08.png'} alt="Təbiətdə pendir"/><span className="stamp">ƏLLƏ<br/>HAZIRLANIR</span></div></section>

      <section className="serve section-pad"><div className="serve-image"><img src={A+'cheese-11.png'} alt="Del Fiore pendir süfrəsi"/><span className="image-caption">SÜFRƏNİZƏ İLHAM</span></div><div className="serve-copy"><p className="eyebrow dark">SÜFRƏDƏ</p><h2>Yaxşı dad<br/><i>paylaşılmalıdır.</i></h2><p>Bir dilim çörək, bir az əncir, bir stəkan şərab. Bəzən xoşbəxtlik bu qədər sadədir.</p><a className="button dark-button" href="#find">Reseptlərə bax <ArrowUpRight size={16}/></a></div></section>

      <section className="find section-pad" id="find"><div className="section-heading"><div><p className="eyebrow dark">YAXININIZDA</p><h2>Del Fiore-u<br/><i>Bakıda tapın.</i></h2></div><p className="heading-note">Dadımıza yaxınlaşın.<br/>Sizi gözləyirik.</p></div><div className="location-grid">{locations.map(l=><article className="location" key={l.name}><img src={A+l.image} alt={l.name}/><div><h3>{l.name}</h3><p>{l.address}</p><a href="#contact">Mağazaya bax <ArrowUpRight size={14}/></a></div></article>)}</div></section>
    </main>
    <footer id="contact"><div className="footer-top"><a className="brand footer-brand" href="#top"><span>DEL</span><i>✳</i><span>FIORE</span></a><p>Yaxşı dadın<br/><i>zamanı var.</i></p><a className="social" href="https://instagram.com" aria-label="Instagram">◎</a></div><div className="footer-bottom"><span>© 2026 Del Fiore</span><span>Bakı, Azərbaycan</span><a href="mailto:hello@delfiore.az">hello@delfiore.az</a><span>Hazırlandı sevgi ilə.</span></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App />)
