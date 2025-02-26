export interface IEpisodeCardProps {
  title: string
  subtitle?: string
  thumbnail: string
  episode: number
  rate?: number
  views?: string
  link: string
  time: `${number}:${number}:${number}`
  season: number
}

export interface ISeason {
  season: number
  episodes: Omit<IEpisodeCardProps, 'season'>[]
}

export interface IEpisodeListProps {
  episodesList: ISeason[]
} 