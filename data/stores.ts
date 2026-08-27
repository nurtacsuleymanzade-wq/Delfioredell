export type Store = { id: string; name: string; address: string; image: string; href?: string; needs_confirmation: boolean }

export const stores: Store[] = [
  { id: 'favorite-premium', name: 'Premium Favoritlər', address: 'Filial ünvanları rəsmi səhifədə yoxlanılır', image: 'favorite-premium.jpg', href: 'https://linktr.ee/favorite_premium', needs_confirmation: true },
]
