export type KitsuCollection<Data> = {
  data: Data[]
  meta: { count: number }
  links: {
    first: string
    next: string
    last: string
  }
}

export type KitsuCollectionAnimeResponse = KitsuCollection<KitsuAnime>

export type KitsuAnime = {
  id: string
  type: 'anime'
  attributes: KitsuAnimeAttributes
  relationships: KitsuAnimeRelationships
}

export type KitsuMedia = {
  tiny: string
  large: string
  small: string
  medium: string
  original: string
  meta: {
    dimensions: {
      tiny: { width: number; height: number }
      large: { width: number; height: number }
      small: { width: number; height: number }
      medium: { width: number; height: number }
    }
  }
}

export type KitsuTitles = {
  en: string
  en_jp: string
  ja_jp: string
  fr?: string
}

export type KitsuAnimeAttributes = {
  createdAt: string
  updatedAt: string
  slug: string
  synopsis: string
  description: string
  coverImageTopOffset: number
  titles: KitsuTitles
  canonicalTitle: string
  abbreviatedTitles: string[]
  averageRating: string
  ratingFrequencies: Record<string, string>
  userCount: number
  favoritesCount: number
  startDate: string
  endDate: string
  nextRelease: string | null
  popularityRank: number
  ratingRank: number
  ageRating: string
  ageRatingGuide: string
  subtype: string
  status: string
  tba: string | null
  posterImage: KitsuMedia
  coverImage: KitsuMedia
  episodeCount: number
  episodeLength: number
  totalLength: number
  youtubeVideoId: string
  showType: string
  nsfw: boolean
}

export type KitsuAnimeRelationships = {
  castings: {
    links: Links
  }
  characters: {
    links: Links
  }
  categories: {
    links: Links
  }
  genres: {
    links: Links
  }
  episodes: {
    links: Links
  }
  installments: {
    links: Links
  }
  mappings: {
    links: Links
  }
  mediaRelationships: {
    links: Links
  }
  productions: {
    links: Links
  }
  quotes: {
    links: Links
  }
  reviews: {
    links: Links
  }
  staff: {
    links: Links
  }
}

export type Links = {
  self: string
  related: string
}
