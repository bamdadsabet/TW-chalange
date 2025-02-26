import { IEpisodeCardProps, ISeason } from "@components/Episodes"
const images = Object.keys(import.meta.glob('@assets/episodesThumbnails/*.png', { eager: true }))




const episodeSeeder = () => {
  const res: Omit<IEpisodeCardProps, 'season'>[] = [
    {
      title: 'مرد آهنی: انتقام برای آزادی',
      episode: 1,
      link: '#',
      thumbnail: images[0] ,
      time: '1:32:48',
    },
  ]
  for (let i = 1; i < 20; i++) {
    res.push({
      title: 'مرد آهنی: انتقام برای آزادی',
      episode: i,
      link: '#',
      subtitle: 'رستاخیز فرشتگان',
      views: `${i + 1  * 12} هزار بازدید`,
      rate: 3 * i,
      thumbnail: images[i],
      time: '1:32:48',
    })
  }
  return res
}

const seasonSeeder = (seasonAmount: number, episodesList: Omit<IEpisodeCardProps, 'season'>[]) => {
  const res = []
  for (let i = 0; i < seasonAmount; i++) {
    res.push({
      season: i + 1,
      episodes: episodesList
    })
  }
  return res
}

const episodesSeed = episodeSeeder()


const episodes: ISeason[] = seasonSeeder(4, episodesSeed)

export default episodes