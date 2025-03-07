export interface IHeroProps extends THeroTagsProps {
  images: Record<'logo' | 'network', string> & { thumbnail: {
    desktop: string
    mobile: string
  } }
  title: string
  description: string
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