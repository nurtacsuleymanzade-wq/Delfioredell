'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, MapPin, Menu, Play, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { products } from '../data/products'
import { socials } from '../data/socials'

const A = '/Delfioredell/assets/'
const stores = [
  { name: 'Del Fiore Boutique', area: 'Səbail', address: 'Nizami küç., 85, Səbail, Bakı', image: 'cheese-21.png' },
  { name: 'Del Fiore Market', area: 'Nərimanov', address: 'Təbriz küç., 102, Nərimanov, Bakı', image: 'cheese-22.png' },
  { name: 'Del Fiore Gourmet', area: 'Yasamal', address: 'Həsən bəy Zərdabi pr., 71, Yasamal, Bakı', image: 'cheese-23.png' },
]
const scenes = {
  hero: 'cheese-01.png', hover: 'cheese-02.png', collection: 'cheese-04.png', detail: 'cheese-03.png', story: 'cheese-06.png', recipes: 'cheese-07.png', stores: 'cheese-05.png',
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [selected, setSelected] = useState<typeof products[number] | null>(null)
  const [cartCount, setCartCount] = useState(0)
  const [collectionIndex, setCollectionIndex] = useState(0)

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setSelected(null); setCartOpen(false); setMenuOpen(false) } }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const addToCart = () => { setCartCount(value => value + 1); setSelected(null); setCartOpen(true) }
  const visibleProducts = products.map((product, index) => products[(index + collectionIndex + products.length) % products.length])

  return <main className="reference-site">
    <header className="reference-nav">
      <button className="reference-logo" onClick={() => go('hero')} aria-label="Del Fiore ana səhifə"><small>VIAZUL MMC</small><span>⌁</span><strong>Del Fiore</strong><em>KACOTTA PENDİRİ</em><i>Organik</i></button>
      <nav className={menuOpen ? 'nav-menu is-open' : 'nav-menu'}><button onClick={() => go('hero')}>Əsas səhifə</button><button onClick={() => go('collection')}>Məhsullar</button><button onClick={() => go('story')}>Hekayəmiz</button><button onClick={() => go('recipes')}>Reseptlər</button><button onClick={() => go('stores')}>Mağazalar</button><button onClick={() => go('contact')}>Əlaqə</button></nav>
      <div className="nav-tools"><button className="cart-button" onClick={() => setCartOpen(true)} aria-label="Səbət"><ShoppingCart size={23}/><b>{cartCount}</b></button><button className="language">AZ <ChevronDown size={13}/></button><button className="mobile-menu" onClick={() => setMenuOpen(value => !value)} aria-label="Menyu">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <section className="reference-frame hero-frame" id="hero" style={{ '--frame': `url(${A + scenes.hero})` } as React.CSSProperties}>
      <div className="frame-content"><p className="frame-kicker">VIAZUL MMC / DEL FIORE</p><h1>Artizan pendir,<br/><em>ləzzətin 3D hekayəsi.</em></h1><p className="frame-copy">Saf süd, yetişmiş dad və Del Fiore kolleksiyasını kəşf etməyə çağıran interaktiv təcrübə.</p><div className="frame-actions"><button className="gold-cta" onClick={() => go('collection')}>Kəşf etməyə başla <ArrowRight size={16}/></button><button className="play-cta" onClick={() => go('story')}><span><Play size={12} fill="currentColor"/></span> Hekayəyə bax</button></div></div><FeatureBar/><div className="quality-seal">KEYFİYYƏT<br/><strong>VIAZUL<br/>MMC</strong><br/>ZƏMANƏTİ</div><div className="frame-index">01 / 08</div>
    </section>

    <section className="reference-frame collection-frame" id="collection" style={{ '--frame': `url(${A + scenes.collection})` } as React.CSSProperties}><div className="cream-panel"><p className="frame-kicker dark">04 / COLLECTIONS</p><h2>İmza <em>kolleksiyamız</em></h2><p>Hər məhsul öz formasını, öz işığını və öz hekayəsini daşıyır.</p><div className="collection-carousel"><button className="carousel-arrow" onClick={() => setCollectionIndex(value => (value - 1 + products.length) % products.length)} aria-label="Əvvəlki məhsul"><ArrowLeft size={18}/></button>{visibleProducts.slice(0, 4).map(product => <button className="collection-card" key={product.id} onClick={() => setSelected(product)}><div><img src={A + product.image} alt={product.name}/><span>+</span></div><strong>{product.name}</strong><small>{product.kind}</small></button>)}<button className="carousel-arrow" onClick={() => setCollectionIndex(value => (value + 1) % products.length)} aria-label="Növbəti məhsul"><ArrowRight size={18}/></button></div><div className="carousel-dots"><i className="active"/><i/><i/><i/><i/></div></div></section>

    <section className="reference-frame detail-frame" id="detail" style={{ '--frame': `url(${A + scenes.detail})` } as React.CSSProperties}><div className="detail-card"><button className="detail-close" onClick={() => go('collection')} aria-label="Bağla">×</button><div className="detail-copy"><p className="frame-kicker">MƏHSUL DETALI</p><h2>Qara<br/><em>Caciotta</em></h2><h3>Zəngin & Kremli</h3><p>Del Fiore kolleksiyasından seçilmiş məhsulu araşdır.</p><button className="outline-cta" onClick={() => setSelected(products.find(p => p.id === 'black-caciotta') ?? products[0])}>Ətraflı məlumat <ArrowUpRight size={15}/></button></div><div className="detail-hotspots"><span>+</span><span>+</span><span>+</span></div></div><FeatureBar/></section>

    <section className="reference-frame story-frame" id="story" style={{ '--frame': `url(${A + scenes.story})` } as React.CSSProperties}><div className="story-copy"><p className="frame-kicker">06 / STORY — CRAFT</p><h2>Zamanla hazırlanır.<br/><em>Təbii süd.<br/>Əl işi ustalıq.</em></h2><p>Hər Del Fiore pendiri ən yaxşı təbii süd, ənənəvi üsul və insan əlinin toxunuşu ilə zamanla kamilləşir.</p><button className="gold-cta" onClick={() => go('recipes')}>Bizim hekayəmiz <ArrowRight size={16}/></button></div><div className="story-cards"><article><img src={A+'cheese-15.png'} alt="Təbii süd"/><strong>Təbii süd</strong><small>Seçilmiş fermalardan</small></article><article><img src={A+'cheese-16.png'} alt="Yetişmə"/><strong>Zamanın toxunuşu</strong><small>Təbii şəraitdə yetişmə</small></article><article><img src={A+'cheese-17.png'} alt="Əl işi"/><strong>Əl işi ustalıq</strong><small>Hər biri sevgi ilə</small></article></div><FeatureBar/></section>

    <section className="reference-frame recipes-frame" id="recipes" style={{ '--frame': `url(${A + scenes.recipes})` } as React.CSSProperties}><div className="recipes-copy"><p className="frame-kicker">07 / RECIPES</p><h2>Reseptlər,<br/><em>ilham, ləzzət.</em></h2><p>Del Fiore pendiri ilə sadə yeməklərinizə gözlənilməz bir toxunuş qatın.</p><button className="gold-cta" onClick={() => document.getElementById('recipe-list')?.scrollIntoView({ behavior: 'smooth' })}>Reseptləri kəşf et <ArrowRight size={16}/></button></div><div className="recipe-list" id="recipe-list"><button onClick={() => setSelected(products[4])}><img src={A+'cheese-18.png'} alt="Ricotta resepti"/><span>Kremli Ricotta<br/>Fettuccine</span><ArrowUpRight size={16}/></button><button onClick={() => setSelected(products[0])}><img src={A+'cheese-19.png'} alt="Pizza resepti"/><span>Kacottta ilə<br/>Margherita Pizza</span><ArrowUpRight size={16}/></button><button onClick={() => setSelected(products[1])}><img src={A+'cheese-20.png'} alt="Pendir tabağı"/><span>Üzüm və Ballı<br/>Pendir Tabağı</span><ArrowUpRight size={16}/></button></div><FeatureBar/></section>

    <section className="reference-frame stores-frame" id="stores" style={{ '--frame': `url(${A + scenes.stores})` } as React.CSSProperties}><div className="stores-copy"><p className="frame-kicker dark">08 / FIND DEL FIORE</p><h2>Del Fiore-u<br/><em>Bakıda tapın.</em></h2><p>Premium Favorite marketlərdə sizi gözləyirik.</p><button className="gold-cta" onClick={() => document.getElementById('store-list')?.scrollIntoView({ behavior: 'smooth' })}><MapPin size={15}/> Yerlərimizi gör</button></div><div className="store-list" id="store-list">{stores.map(store => <article key={store.name}><img src={A + store.image} alt={store.name}/><div><strong>{store.name}</strong><small><MapPin size={12}/> {store.address}</small><button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`, '_blank')}>Marşruta bax <ArrowUpRight size={14}/></button></div></article>)}</div><FeatureBar light/></section>

    <footer id="contact"><button className="reference-logo footer-logo" onClick={() => go('hero')}><small>VIAZUL MMC</small><span>⌁</span><strong>Del Fiore</strong><em>KACOTTA PENDİRİ</em><i>Organik</i></button><div className="footer-socials">{Object.values(socials).map(s => <a href={s.href} key={s.label}>{s.label}</a>)}</div><small>© 2026 Viazul MMC. Bütün hüquqlar qorunur.</small></footer>

    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="product-modal" onClick={event => event.stopPropagation()} role="dialog" aria-modal="true"><button onClick={() => setSelected(null)} aria-label="Bağla"><X size={20}/></button><img src={A + (selected.image ?? 'cheese-14.png')} alt={selected.name}/><div><p className="frame-kicker">DEL FIORE / {selected.kind}</p><h2>{selected.name}</h2><p>{selected.description}</p><button className="gold-cta" onClick={addToCart}>Səbətə əlavə et <ShoppingCart size={15}/></button></div></div></div>}
    {cartOpen && <aside className="cart-drawer"><button onClick={() => setCartOpen(false)} aria-label="Səbəti bağla"><X/></button><p className="frame-kicker dark">DEL FIORE / CART</p><h2>Səbətiniz</h2><p>{cartCount ? `${cartCount} məhsul səbətə əlavə edildi.` : 'Səbətiniz hələ boşdur.'}</p>{cartCount > 0 && <button className="gold-cta" onClick={() => setCartOpen(false)}>Sifarişi davam etdir <ArrowRight size={15}/></button>}</aside>}
  </main>
}

function FeatureBar({ light = false }: { light?: boolean }) { return <div className={light ? 'feature-bar feature-bar-light' : 'feature-bar'}><span>♧ <b>Təbii süd</b><small>Yerli fermalardan</small></span><span>♧ <b>100% Orqanik</b><small>Əlavəsiz, təmiz tərkib</small></span><span>◷ <b>Yetişmiş ləzzət</b><small>Ənənəvi pendirçilik</small></span><span>♧ <b>Əl işi keyfiyyət</b><small>Hər detalda ustalıq</small></span><span>▱ <b>Sürətli çatdırılma</b><small>Bütün Azərbaycanca</small></span></div> }
