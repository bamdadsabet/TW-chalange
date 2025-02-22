export interface IEpisodeCardProps {
  title: string
  subtitle?: string
  thumbnail: string
  episode: number
  rate?: number
  views?: string
  link: string
  time: `${number}:${number}:${number}`
}

export interface ISeason {
  season: number
  episodes: IEpisodeCardProps[]
}