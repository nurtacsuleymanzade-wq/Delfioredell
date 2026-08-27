export type Product = {
  id: string
  name: string
  kind: 'Caciotta' | 'Ricotta'
  color: string
  label: string
  description?: string
  needs_confirmation?: boolean
  image?: string
}

export const products: Product[] = [
  { id: 'classic-caciotta', name: 'Klassik Caciotta', kind: 'Caciotta', color: '#d5a963', label: 'classic', description: 'Yumşaq, balanslı və kremli.', needs_confirmation: false, image: 'cheese-14.png' },
  { id: 'black-caciotta', name: 'Qara Caciotta', kind: 'Caciotta', color: '#242824', label: 'black', description: 'Dərin rəngli, seçilən xarakter.', needs_confirmation: true, image: 'cheese-16.png' },
  { id: 'orange-caciotta', name: 'Narıncı Caciotta', kind: 'Caciotta', color: '#bf6737', label: 'orange', description: 'Rəngli kolleksiyanın parçası.', needs_confirmation: true, image: 'cheese-18.png' },
  { id: 'gold-caciotta', name: 'Qızılı Caciotta', kind: 'Caciotta', color: '#bb9142', label: 'gold', description: 'Del Fiore seçimi.', needs_confirmation: true, image: 'cheese-20.png' },
  { id: 'ricotta', name: 'Ricotta', kind: 'Ricotta', color: '#e6e0d1', label: 'ricotta', description: 'Kremli qabda yumşaq tekstura.', needs_confirmation: true, image: 'cheese-23.png' },
]
