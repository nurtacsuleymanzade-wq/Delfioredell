'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, OrbitControls, PerspectiveCamera, RoundedBox, Sparkles } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { products, type Product } from '../data/products'

gsap.registerPlugin(ScrollTrigger)

type SceneProps = { active: Product; progress: React.MutableRefObject<number>; pointer: React.MutableRefObject<{ x: number; y: number }> }

function Cheese({ product, index, progress, pointer }: { product: Product; index: number; progress: React.MutableRefObject<number>; pointer: React.MutableRefObject<{x:number;y:number}> }) {
  const ref = useRef<THREE.Group>(null)
  const classic = product.id === 'classic-caciotta'
  useFrame((_, delta) => {
    if (!ref.current) return
    const p = progress.current
    const spread = index - 2
    const targetX = spread * 1.18 + pointer.current.x * (classic ? .025 : .05)
    const targetY = (index % 2 ? .22 : -.1) + pointer.current.y * .05
    const focus = classic ? Math.min(1, Math.max(0, (p - .12) * 2.1)) : 0
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, targetX * (1 - focus), 5, delta)
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, targetY + focus * .08, 5, delta)
    ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, -Math.abs(spread) * .48 + focus * .95, 5, delta)
    ref.current.rotation.y += delta * (classic ? .22 : .08)
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, pointer.current.y * .025, 4, delta)
    const scale = (classic ? 1.05 : .82 - Math.abs(spread) * .025) + focus * .13
    ref.current.scale.setScalar(scale)
  })
  return <group ref={ref}>
    <RoundedBox args={[1.55, .42, 1.55]} radius={.19} smoothness={5} rotation={[0, index * .18, 0]}>
      <meshStandardMaterial color={product.color} roughness={product.label === 'black' ? .62 : .78} metalness={product.label === 'gold' ? .08 : .01} />
    </RoundedBox>
    <mesh position={[0, .216, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[.52, 48]} /><meshStandardMaterial color={product.label === 'ricotta' ? '#faf7ee' : '#d7bd8b'} roughness={.96} />
    </mesh>
    <mesh position={[0, .232, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[.34, .39, 48]} /><meshBasicMaterial color="#b99962" transparent opacity={.8} />
    </mesh>
    <mesh position={[0, .245, .02]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[.2, 48]} /><meshBasicMaterial color="#f1e9d6" />
    </mesh>
    <mesh position={[0, .25, .02]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[.14, 48]} /><meshBasicMaterial color="#28372d" />
    </mesh>
  </group>
}

function Scene({ progress, pointer }: { progress: React.MutableRefObject<number>; pointer: React.MutableRefObject<{x:number;y:number}> }) {
  const camera = useThree(s => s.camera)
  useFrame((_, delta) => {
    const p = progress.current
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.current.x * .22, 3, delta)
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.current.y * .12 + p * .18, 3, delta)
    camera.position.z = THREE.MathUtils.damp(camera.position.z, 6.3 - p * 1.1, 3, delta)
    camera.lookAt(0, p * .18, 0)
  })
  return <>
    <ambientLight intensity={1.2} color="#e8dcc0" /><directionalLight position={[3, 4, 5]} intensity={3.2} color="#fff1d1" castShadow /><pointLight position={[-4, 1, 2]} intensity={5} color="#b79054" />
    <Environment preset="warehouse" blur={.8} />
    {products.map((product, i) => <Cheese key={product.id} product={product} index={i} progress={progress} pointer={pointer} />)}
    <Sparkles count={45} scale={[8, 4, 5]} size={1.3} speed={.18} color="#c4a267" opacity={.28} />
  </>
}

export default function Experience() {
  const progress = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })
  const [selected, setSelected] = useState<Product | null>(null)
  useEffect(() => {
    const onMove = (e: MouseEvent) => { pointer.current.x = (e.clientX / innerWidth - .5) * 2; pointer.current.y = (e.clientY / innerHeight - .5) * -2 }
    const selectProduct = (e: Event) => { const id = (e as CustomEvent<string>).detail; setSelected(products.find(p => p.id === id) ?? null) }
    const update = () => { progress.current = window.scrollY / Math.max(1, document.body.scrollHeight - innerHeight) }
    window.addEventListener('mousemove', onMove); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('delfiore:select', selectProduct); update()
    const trigger = ScrollTrigger.create({ trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: s => { progress.current = s.progress } })
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('scroll', update); window.removeEventListener('delfiore:select', selectProduct); trigger.kill() }
  }, [])
  return <>
    <div className="scene-canvas" aria-hidden="true"><Canvas dpr={[1, 1.35]} shadows gl={{ antialias: true, powerPreference: 'high-performance' }}><PerspectiveCamera makeDefault position={[0, 0, 6.3]} fov={38}/><Scene progress={progress} pointer={pointer}/></Canvas></div>
    {selected && <div className="product-modal" role="dialog" aria-modal="true" aria-label={selected.name}><button className="close-modal" onClick={() => setSelected(null)} aria-label="Pəncərəni bağla">×</button><div className="modal-kicker">DEL FIORE / {selected.kind}</div><h2>{selected.name}</h2><p>{selected.description}</p>{selected.needs_confirmation && <small>Əlavə məhsul məlumatları təsdiqdən sonra burada görünəcək.</small>}</div>}
  </>
}

export function ProductButton({ product, onSelect }: { product: Product; onSelect: (p: Product) => void }) { return <button className="product-hit" onClick={() => onSelect(product)} aria-label={`${product.name} detallarını aç`}/> }
