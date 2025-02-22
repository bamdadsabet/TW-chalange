export interface IHeroProps {
  images: Record<'thumbnail' | 'logo' | 'network', string>
  title: string
  description: string
  tags: THeroTagsProps
  actionUrl: string
  metaData: IHeroMetaDataProps
}

export interface IHeroMetaDataProps {
  likes: number
  IMDBbRate: number
  time: string
  onAirDuration: Record<'start' | 'end', number>
  total: Record<'seasonTotal' | 'episodeTotal', number>
  madeIn: string
  hasDubbed: boolean
  hasEnded: boolean
  isPG13: boolean
}

export type THeroTagsProps = Record<'tags', string[]>