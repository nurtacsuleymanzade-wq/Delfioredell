export type Product = { id: string; name: string; kind: 'Caciotta' | 'Ricotta'; color: string; image: string; needs_confirmation: boolean }
export const products: Product[] = [
 { id:'classic', name:'Klassik Caciotta', kind:'Caciotta', color:'#d09b58', image:'cheese-14.png', needs_confirmation:true },
 { id:'black', name:'Qara Caciotta', kind:'Caciotta', color:'#1c211e', image:'cheese-16.png', needs_confirmation:true },
 { id:'orange', name:'Narıncı Caciotta', kind:'Caciotta', color:'#b94d24', image:'cheese-18.png', needs_confirmation:true },
 { id:'gold', name:'Qızılı Caciotta', kind:'Caciotta', color:'#bd8b24', image:'cheese-20.png', needs_confirmation:true },
 { id:'ricotta', name:'Ricotta', kind:'Ricotta', color:'#d9e2ce', image:'cheese-23.png', needs_confirmation:true },
]
