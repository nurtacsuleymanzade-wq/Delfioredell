export type Store = { id: string; name: string; address: string; image: string; needs_confirmation: boolean }

export const stores: Store[] = [
  { id: 'rahat-gourmet', name: 'Rahat Gourmet', address: '28 May küç. 25, 28 Mall, 2-ci mərtəbə', image: 'cheese-21.png', needs_confirmation: false },
  { id: 'bazarstore', name: 'Bazarstore', address: 'Azadlıq pr. 125, Nərimanov filialı', image: 'cheese-22.png', needs_confirmation: false },
  { id: 'araz-supermarket', name: 'Araz Supermarket', address: 'Həsən Əliyev 45, Gənclik filialı', image: 'cheese-23.png', needs_confirmation: false },
  { id: 'meliores-fine-food', name: 'Meliores Fine Food', address: 'M. S. Vurğun 16, Port Baku Mall', image: 'cheese-21.png', needs_confirmation: false },
]
